# MiGreat Website - Build System Documentation

## Overview

This project now uses a **modern build system** with **Handlebars templating** and **multi-language support** (English/German) to generate SEO-friendly static HTML files. This solves the previous issue where sections were loaded dynamically via JavaScript, which prevented proper search engine indexing.

## Architecture

### Key Features

✅ **Static HTML Generation** - All content is rendered at build time for perfect SEO
✅ **Multi-Language Support** - English (EN) and German (DE) with language switcher
✅ **Flat Translation Structure** - Easy-to-manage JSON locale files with dot notation
✅ **Component-Based** - Reusable Handlebars partials for maintainability
✅ **Build-Time Rendering** - No client-side component loading needed
✅ **Preserved Functionality** - All Alpine.js, carousels, and interactive features intact

### Technology Stack

- **Templating**: Handlebars 4.7.8
- **Build Tool**: Node.js with custom build scripts
- **CSS**: TailwindCSS 3.4.1 (CDN) + PostCSS + Custom CSS
- **JavaScript**: Alpine.js 3.x (CDN) + Lucide Icons
- **Bundling**: Rollup 4.9.6 (for future asset optimization)

## Project Structure

```
migreat-website/
├── views/                          # Handlebars templates
│   ├── layouts/
│   │   └── main.handlebars        # Main layout with <head>, nav, footer
│   ├── pages/
│   │   ├── home.handlebars        # Home page (includes all sections)
│   │   ├── contact.handlebars     # Contact page
│   │   ├── degree-check.handlebars # Degree recognition tool
│   │   └── visa-check.handlebars  # Visa eligibility tool
│   └── partials/
│       ├── common/                # Shared components
│       │   ├── nav.handlebars
│       │   └── footer.handlebars
│       └── home/                  # Home page sections
│           ├── hero.handlebars
│           ├── how-it-works.handlebars
│           ├── services.handlebars
│           ├── stats.handlebars
│           ├── success-stories.handlebars
│           ├── why-germany.handlebars
│           └── cta.handlebars
│
├── locales/                       # Translation files
│   ├── en/                        # English translations
│   │   ├── meta.json
│   │   ├── nav.json
│   │   ├── footer.json
│   │   ├── hero.json
│   │   ├── how-it-works.json
│   │   ├── services.json
│   │   ├── stats.json
│   │   ├── success-stories.json
│   │   ├── why-germany.json
│   │   ├── cta.json
│   │   ├── contact.json
│   │   ├── degree-check.json
│   │   └── visa-check.json
│   └── de/                        # German translations
│       └── [same files as en/]
│
├── scripts/
│   └── build.js                   # Build script
│
├── src/                           # Source files (for future optimization)
│   ├── styles/
│   │   └── main.css              # CSS entry point
│   └── js/
│       └── main.js               # JS entry point
│
├── assets/                        # Static assets (copied to public/)
│   ├── css/
│   ├── js/
│   ├── images/
│   └── json/
│
├── public/                        # Generated output (git-ignored)
│   ├── index.html                # Root redirect with language detection
│   ├── en/                       # English site
│   │   ├── index.html
│   │   ├── contact.html
│   │   ├── degree-check.html
│   │   └── visa-check.html
│   ├── de/                       # German site
│   │   └── [same pages]
│   └── assets/                   # Copied static assets
│
├── package.json
├── rollup.config.js
├── postcss.config.js
├── tailwind.config.js
└── BUILD-SYSTEM-README.md (this file)
```

## Translation System

### Flat Locale Structure

All translations use a **flat JSON structure** with **dot notation** for namespacing:

**Example: `locales/en/hero.json`**
```json
{
  "hero.title": "MiGreat Germany",
  "hero.subtitle": "Your trusted companion for getting a visa and moving for work",
  "hero.description": "Navigate your journey to Germany with confidence...",
  "hero.cta.visaCheck": "Free Visa Check",
  "hero.testimonial.priya.name": "Priya Sharma",
  "hero.testimonial.priya.role": "Software Engineer",
  "hero.testimonial.priya.quote": "In Germany, I have excellent working conditions..."
}
```

**Example: `locales/de/hero.json`**
```json
{
  "hero.title": "MiGreat Germany",
  "hero.subtitle": "Ihr vertrauenswürdiger Begleiter für Visum und Arbeitsmigration",
  "hero.description": "Navigieren Sie Ihre Reise nach Deutschland mit Zuversicht...",
  "hero.cta.visaCheck": "Kostenloser Visum-Check",
  "hero.testimonial.priya.name": "Priya Sharma",
  "hero.testimonial.priya.role": "Software-Ingenieurin",
  "hero.testimonial.priya.quote": "In Deutschland habe ich hervorragende Arbeitsbedingungen..."
}
```

### Using Translations in Templates

In Handlebars templates, use the `{{t 'key'}}` helper:

```handlebars
<h1>{{t 'hero.title'}}</h1>
<p>{{t 'hero.description'}}</p>
<a href="/{{lang}}/visa-check.html">{{t 'hero.cta.visaCheck'}}</a>
```

### Language-Aware URLs

All internal links use the `{{lang}}` variable:

```handlebars
<a href="/{{lang}}/">Home</a>
<a href="/{{lang}}/contact.html">Contact</a>
<a href="/{{lang}}/degree-check.html">Degree Check</a>
```

**Generated URLs:**
- English: `/en/`, `/en/contact.html`, `/en/degree-check.html`
- German: `/de/`, `/de/contact.html`, `/de/degree-check.html`

## Build System

### Build Process

The build script (`scripts/build.js`) performs the following steps:

1. **Clean** - Removes old `public/` directory
2. **Copy Assets** - Copies `assets/` to `public/assets/`
3. **Register Partials** - Recursively registers all Handlebars partials
4. **Load Translations** - Loads and merges all JSON locale files for each language
5. **Compile Templates** - Compiles layouts and page templates
6. **Generate Pages** - For each language (en, de):
   - Renders each page with translations
   - Writes static HTML to `public/{lang}/{page}.html`
7. **Create Root Index** - Creates `public/index.html` with language detection

### Build Commands

```bash
# Install dependencies
npm install

# Build the website
npm run build

# Development (with watch mode)
npm run dev

# Serve locally for testing
npm run serve
```

### Generated Output

```
public/
├── index.html                    # Root redirect with browser language detection
├── en/                           # English version (70-72KB per page)
│   ├── index.html               # 72KB - Full homepage with all sections
│   ├── contact.html             # 21KB
│   ├── degree-check.html        # 25KB - With Anabin database tool
│   └── visa-check.html          # 61KB - With visa eligibility calculator
├── de/                           # German version (70-73KB per page)
│   ├── index.html               # 74KB - Full homepage with German content
│   ├── contact.html             # 22KB
│   ├── degree-check.html        # 26KB
│   └── visa-check.html          # 62KB
└── assets/                       # Static assets (~15MB)
    ├── css/
    ├── js/
    ├── images/
    └── json/
```

## SEO Features

### 1. Static HTML with Full Content

All sections are rendered at build time with complete text content:

```html
<section class="relative bg-gray-900 text-white py-20">
    <h1>MiGreat Germany</h1>
    <p>Your trusted companion for getting a visa and moving for work</p>
    <p>Navigate your journey to Germany with confidence...</p>
</section>
```

✅ **Before**: JavaScript loaded content dynamically → Search engines couldn't index
✅ **Now**: Full HTML content in page source → Perfect for SEO

### 2. Proper Meta Tags

Each page has language-specific meta tags:

```html
<!-- English version -->
<html lang="en">
<title>MiGreat Germany - Your Companion for Migration to Germany</title>
<meta name="description" content="Professional migration services for working in Germany...">
<meta property="og:locale" content="en_US">

<!-- German version -->
<html lang="de">
<title>MiGreat Germany - Ihr Begleiter für die Migration nach Deutschland</title>
<meta name="description" content="Professionelle Migrationsdienstleistungen...">
<meta property="og:locale" content="de_DE">
```

### 3. Hreflang Tags

Proper hreflang tags for international SEO:

```html
<link rel="canonical" href="https://migreat.de/en/" />
<link rel="alternate" hreflang="en" href="https://migreat.de/en/" />
<link rel="alternate" hreflang="de" href="https://migreat.de/de/" />
<link rel="alternate" hreflang="x-default" href="https://migreat.de/en/" />
```

### 4. Language Switcher

Footer includes a language switcher that maintains the current page:

```handlebars
<a href="/en{{#if (eq path '/')}}{{else}}{{path}}.html{{/if}}"
   class="{{#if (eq lang 'en')}}active{{/if}}"
   hreflang="en">English</a>

<a href="/de{{#if (eq path '/')}}{{else}}{{path}}.html{{/if}}"
   class="{{#if (eq lang 'de')}}active{{/if}}"
   hreflang="de">Deutsch</a>
```

**Behavior:**
- On `/en/` → Switcher shows `/de/`
- On `/en/contact.html` → Switcher shows `/de/contact.html`
- On `/en/visa-check.html` → Switcher shows `/de/visa-check.html`

### 5. Root Language Detection

`public/index.html` detects browser language:

```html
<script>
    const userLang = navigator.language || navigator.userLanguage;
    const lang = userLang.startsWith('de') ? 'de' : 'en';
    window.location.href = '/' + lang + '/';
</script>
```

## Adding New Content

### 1. Adding a New Translation Key

**Step 1**: Add key to English locale file (`locales/en/[section].json`)
```json
{
  "hero.newKey": "New English text"
}
```

**Step 2**: Add German translation (`locales/de/[section].json`)
```json
{
  "hero.newKey": "Neuer deutscher Text"
}
```

**Step 3**: Use in template
```handlebars
<p>{{t 'hero.newKey'}}</p>
```

**Step 4**: Rebuild
```bash
npm run build
```

### 2. Adding a New Page

**Step 1**: Create page template (`views/pages/new-page.handlebars`)
```handlebars
<main>
    <h1>{{t 'newPage.title'}}</h1>
    <p>{{t 'newPage.content'}}</p>
</main>
```

**Step 2**: Create locale files
- `locales/en/new-page.json`
- `locales/de/new-page.json`

**Step 3**: Rebuild
```bash
npm run build
```

The build script will automatically generate:
- `public/en/new-page.html`
- `public/de/new-page.html`

### 3. Adding a New Section

**Step 1**: Create partial (`views/partials/home/new-section.handlebars`)
```handlebars
<section id="new-section">
    <h2>{{t 'newSection.title'}}</h2>
    <p>{{t 'newSection.description'}}</p>
</section>
```

**Step 2**: Add to home page (`views/pages/home.handlebars`)
```handlebars
{{> home/hero}}
{{> home/how-it-works}}
{{> home/new-section}}  <!-- Add here -->
{{> home/services}}
```

**Step 3**: Create translations
- `locales/en/new-section.json`
- `locales/de/new-section.json`

**Step 4**: Rebuild
```bash
npm run build
```

## Deployment

### Option 1: Netlify

1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `public`
4. Deploy!

### Option 2: Static Hosting (Vercel, GitHub Pages, etc.)

1. Build locally: `npm run build`
2. Upload `public/` folder to hosting
3. Configure web server to serve from `public/`

### Option 3: Apache/Nginx

1. Build: `npm run build`
2. Copy `public/*` to web root
3. Configure server to serve static files

**Apache .htaccess** (if needed):
```apache
# Force trailing slash for directories
DirectorySlash On

# Enable rewrite engine
RewriteEngine On

# Redirect /en and /de without trailing slash to with trailing slash
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^(.+[^/])$ $1/ [R=301,L]
```

## Translation Statistics

- **Total locale files**: 24 (12 EN + 12 DE)
- **Total translation keys**: 425 per language
- **Components**: 2 (nav, footer)
- **Home sections**: 7 (hero, how-it-works, services, stats, success-stories, why-germany, cta)
- **Pages**: 4 (home, contact, degree-check, visa-check)

## Key Differences from Old System

| Feature | Old System | New System |
|---------|-----------|------------|
| **SEO** | ❌ JavaScript-loaded content | ✅ Static HTML, fully indexable |
| **Languages** | ❌ English only | ✅ English + German |
| **URLs** | Single-language | Multi-language (`/en/`, `/de/`) |
| **Build** | ❌ No build step | ✅ Build generates optimized HTML |
| **Components** | Runtime loading via JS | Build-time inclusion |
| **Translations** | ❌ Hardcoded English | ✅ JSON locale files |
| **Deployment** | Direct file upload | Build + deploy |

## Maintenance Tips

1. **Always rebuild after changes**: `npm run build`
2. **Test both languages**: Check `/en/` and `/de/` versions
3. **Keep translations in sync**: Same keys in EN and DE files
4. **Use flat structure**: Avoid nested objects in locale files
5. **Namespace by component**: Use prefixes like `nav.`, `hero.`, `footer.`

## Troubleshooting

### Build fails with "partial not found"
- Check that partial exists in `views/partials/`
- Check partial name matches exactly (case-sensitive)
- Run `npm run build` again

### Translation not showing
- Check key exists in locale file
- Check spelling of key in template
- Check file is in correct locale directory (en/ or de/)
- Rebuild: `npm run build`

### Page not generating
- Check template exists in `views/pages/`
- Check file extension is `.handlebars`
- Check for syntax errors in template
- Check build script output for errors

### Language switcher not working
- Check path variable is correctly set
- Check URL structure in footer partial
- Verify both language versions exist in public/

## Reference Projects

This build system is based on the proven architecture from:
- **21medien.de** (`/var/www/vhosts/express-templates/21medien.de/`)

The 21medien.de project provided the blueprint for:
- Flat locale structure with dot notation
- Handlebars templating patterns
- Build script architecture
- Multi-language URL structure
- Language switcher implementation

## Conclusion

The new build system provides:
✅ **Perfect SEO** - Fully rendered static HTML
✅ **Multi-language support** - English and German
✅ **Easy maintenance** - Separate content from code
✅ **Scalability** - Easy to add new languages or pages
✅ **Developer-friendly** - Clear structure and documentation

All functionality has been preserved while adding these critical features for SEO and internationalization.
