import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Handlebars from 'handlebars';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Register Handlebars helpers
Handlebars.registerHelper('t', function(key, options) {
    const translations = (this && this.translations)
        || (options && options.data && options.data.root && options.data.root.translations)
        || {};
    return translations[key] || key;
});

Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
});

Handlebars.registerHelper('unless', function(conditional, options) {
    if (!conditional) {
        return options.fn(this);
    }
    return options.inverse(this);
});

Handlebars.registerHelper('add', function(a, b) {
    return Number(a) + Number(b);
});

// Register partials recursively
function registerPartialsRecursively(dir, prefix = '') {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            registerPartialsRecursively(filePath, `${prefix}${file}/`);
        } else if (path.extname(file) === '.handlebars') {
            const partialName = prefix + path.parse(file).name;
            const partialContent = fs.readFileSync(filePath, 'utf8');
            Handlebars.registerPartial(partialName, partialContent);
            console.log(`Registered partial: ${partialName}`);
        }
    });
}

// Load translations for a specific language
function loadTranslations(lang) {
    const localeDir = path.join(rootDir, 'locales', lang);
    const translations = {};

    if (!fs.existsSync(localeDir)) {
        console.warn(`Warning: Locale directory not found: ${localeDir}`);
        return translations;
    }

    const files = fs.readdirSync(localeDir);

    files.forEach(file => {
        if (path.extname(file) === '.json') {
            const filePath = path.join(localeDir, file);
            const content = fs.readFileSync(filePath, 'utf8');
            const fileTranslations = JSON.parse(content);
            Object.assign(translations, fileTranslations);
        }
    });

    console.log(`Loaded ${Object.keys(translations).length} translations for ${lang}`);
    return translations;
}

// Clean public directory
function cleanPublicDir() {
    const publicDir = path.join(rootDir, 'public');
    if (fs.existsSync(publicDir)) {
        fs.rmSync(publicDir, { recursive: true, force: true });
        console.log('Cleaned public directory');
    }
}

// Copy static assets
function copyRecursiveSync(src, dest) {
    if (!fs.existsSync(src)) {
        return;
    }

    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach(childItemName => {
            copyRecursiveSync(
                path.join(src, childItemName),
                path.join(dest, childItemName)
            );
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

// Copy static files
function copyStaticFiles() {
    console.log('Copying static assets...');

    const publicDir = path.join(rootDir, 'public');
    const assetsDir = path.join(rootDir, 'assets');
    const publicAssetsDir = path.join(publicDir, 'assets');

    // Copy assets
    if (fs.existsSync(assetsDir)) {
        copyRecursiveSync(assetsDir, publicAssetsDir);
        console.log('Copied assets directory');
    }
}

// Build pages
async function buildPages() {
    console.log('Building pages...');

    const viewsDir = path.join(rootDir, 'views');
    const partialsDir = path.join(viewsDir, 'partials');

    // Register partials
    if (fs.existsSync(partialsDir)) {
        registerPartialsRecursively(partialsDir);
    }

    // Load layouts
    const layoutsDir = path.join(viewsDir, 'layouts');
    const mainLayoutPath = path.join(layoutsDir, 'main.handlebars');

    if (!fs.existsSync(mainLayoutPath)) {
        console.error('Error: Main layout not found');
        return;
    }

    const mainLayoutContent = fs.readFileSync(mainLayoutPath, 'utf8');
    const mainLayout = Handlebars.compile(mainLayoutContent);

    // Load page templates
    const pagesDir = path.join(viewsDir, 'pages');
    const pageTemplates = {};

    if (fs.existsSync(pagesDir)) {
        const pageFiles = fs.readdirSync(pagesDir);

        pageFiles.forEach(file => {
            if (path.extname(file) === '.handlebars') {
                const pageName = path.parse(file).name;
                const pageContent = fs.readFileSync(path.join(pagesDir, file), 'utf8');
                pageTemplates[pageName] = Handlebars.compile(pageContent);
                console.log(`Loaded page template: ${pageName}`);
            }
        });
    }

    // Build for each language
    const languages = ['en', 'de'];

    for (const lang of languages) {
        console.log(`\nBuilding ${lang} pages...`);
        const translations = loadTranslations(lang);

        const langDir = path.join(rootDir, 'public', lang);
        fs.mkdirSync(langDir, { recursive: true });

        // Build each page
        for (const [pageName, pageTemplate] of Object.entries(pageTemplates)) {
            const pagePath = pageName === 'home' ? '/' : `/${pageName}`;

            const pageBody = pageTemplate({
                lang,
                translations,
                path: pagePath
            });

            const pageHtml = mainLayout({
                lang,
                translations,
                path: pagePath,
                body: pageBody,
                page: pageName
            });

            const outputFile = pageName === 'home' ? 'index.html' : `${pageName}.html`;
            const outputPath = path.join(langDir, outputFile);

            fs.writeFileSync(outputPath, pageHtml);
            console.log(`Generated: ${lang}/${outputFile}`);
        }
    }
}

// Create root index.html that redirects to default language
function createRootIndex() {
    const rootIndexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MiGreat - Migration to Germany</title>
    <meta http-equiv="refresh" content="0; url=/en/">
    <script>
        // Detect browser language
        const userLang = navigator.language || navigator.userLanguage;
        const lang = userLang.startsWith('de') ? 'de' : 'en';
        window.location.href = '/' + lang + '/';
    </script>
</head>
<body>
    <p>Redirecting...</p>
    <p><a href="/en/">English</a> | <a href="/de/">Deutsch</a></p>
</body>
</html>`;

    const publicDir = path.join(rootDir, 'public');
    fs.writeFileSync(path.join(publicDir, 'index.html'), rootIndexContent);
    console.log('Created root index.html with language detection');
}

// Main build function
async function build() {
    try {
        console.log('Starting build process...\n');

        cleanPublicDir();
        copyStaticFiles();
        await buildPages();
        createRootIndex();

        console.log('\n✓ Build complete!');
    } catch (error) {
        console.error('Build failed:', error);
        process.exit(1);
    }
}

build();
