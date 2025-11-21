# Resource Paths Reference

**Purpose**: Quick reference for all resource paths in the MiGreat website v2.0
**Updated**: 2025-11-05
**Status**: Updated for Handlebars + Build System ✅

---

## 🏗️ Architecture Overview

The project has **SOURCE** files and **GENERATED** files:

- **SOURCE** (edit these):
  - `views/` - Handlebars templates
  - `locales/` - Translation JSON files
  - `assets/` - Static files (CSS, JS, images)
  - `scripts/` - Build scripts

- **GENERATED** (never edit):
  - `public/` - Built output for deployment

---

## 📁 Source File Structure

```
migreat-website/
├── views/                          ⭐ SOURCE TEMPLATES
│   ├── layouts/
│   │   └── main.handlebars        # Main page wrapper
│   ├── pages/
│   │   ├── home.handlebars        # Homepage template
│   │   ├── contact.handlebars     # Contact page template
│   │   ├── degree-check.handlebars
│   │   └── visa-check.handlebars
│   └── partials/
│       ├── common/                # Shared components
│       │   ├── head.handlebars
│       │   ├── nav.handlebars
│       │   └── footer.handlebars
│       ├── home/                  # Homepage sections
│       │   ├── hero.handlebars
│       │   ├── how-it-works.handlebars
│       │   ├── services.handlebars
│       │   ├── stats.handlebars
│       │   ├── success-stories.handlebars
│       │   ├── why-germany.handlebars
│       │   └── cta.handlebars
│       └── sections/
├── locales/                        ⭐ SOURCE TRANSLATIONS
│   ├── en/                        # English
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
│   └── de/                        # German
│       └── [same structure]
├── assets/                         ⭐ SOURCE STATIC FILES
│   ├── css/
│   │   ├── animations.css
│   │   ├── carousel.css
│   │   └── mobile-only.css
│   ├── js/
│   ├── json/
│   │   ├── anabin-data.json      # Institution data
│   │   └── degrees-data.json     # Degree data
│   ├── images/
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   └── [testimonial photos]
│   └── csv/                       # Raw data
├── scripts/
│   └── build.js                   ⭐ BUILD SCRIPT
└── public/                         ⭐ GENERATED OUTPUT (DO NOT EDIT!)
    ├── index.html                 # Root with language detection
    ├── en/                        # English pages
    │   ├── index.html
    │   ├── contact.html
    │   ├── degree-check.html
    │   └── visa-check.html
    ├── de/                        # German pages
    │   └── [same structure]
    └── assets/                    # Copied from /assets
        ├── css/
        ├── js/
        ├── json/
        └── images/
```

---

## 🔗 Resource Paths in Templates

### Asset Paths in Handlebars (Absolute from Root)

All asset paths in generated HTML use absolute paths from root:

```handlebars
<!-- Favicon (in common/head.handlebars) -->
<link rel="icon" type="image/x-icon" href="/assets/images/favicon.ico">

<!-- CSS Files (in common/head.handlebars) -->
<link rel="stylesheet" href="/assets/css/animations.css">
<link rel="stylesheet" href="/assets/css/mobile-only.css">
<link rel="stylesheet" href="/assets/css/carousel.css">

<!-- Images (in templates) -->
<img src="/assets/images/logo.png" alt="{{t 'nav.logoAlt'}}">
<img src="/assets/images/testimonials/priya-sharma-new.jpg" alt="...">

<!-- JSON Data (in JavaScript) -->
fetch('/assets/json/anabin-data.json')
fetch('/assets/json/degrees-data.json')
```

### Language-Aware Internal Links

```handlebars
<!-- Navigation Links (use lang variable) -->
<a href="/{{lang}}/">{{t 'nav.home'}}</a>
<a href="/{{lang}}/contact.html">{{t 'nav.contact'}}</a>
<a href="/{{lang}}/degree-check.html">{{t 'nav.degreeCheck'}}</a>
<a href="/{{lang}}/visa-check.html">{{t 'nav.visaCheck'}}</a>

<!-- Section Anchors -->
<a href="/{{lang}}/#services">{{t 'nav.services'}}</a>
<a href="/{{lang}}/#success-stories">{{t 'nav.successStories'}}</a>
<a href="/{{lang}}/#why-germany">{{t 'nav.whyGermany'}}</a>
```

### Translation Keys

```handlebars
<!-- Use {{t "key"}} for all text -->
<h1>{{t "hero.title"}}</h1>
<p>{{t "hero.subtitle"}}</p>
<button>{{t "cta.button"}}</button>

<!-- Translation resolved from locales/{lang}/*.json -->
```

---

## 📄 Generated Output Structure

### URL Structure After Build

```
Public URLs (what users visit):
/                               → Root (language detection redirect)
/en/                            → English homepage
/en/contact.html                → English contact page
/en/degree-check.html           → English degree checker
/en/visa-check.html             → English visa checker
/de/                            → German homepage
/de/contact.html                → German contact page
/de/degree-check.html           → German degree checker
/de/visa-check.html             → German visa checker
/assets/css/animations.css      → CSS files
/assets/js/main.js              → JS files
/assets/images/logo.png         → Images
/assets/json/anabin-data.json   → Data files
```

### Generated Page Structure

All generated pages include:

```html
<!DOCTYPE html>
<html lang="en">  <!-- or lang="de" -->
<head>
    <!-- Meta tags with translated content -->
    <title>{{translated title}}</title>
    <meta name="description" content="{{translated description}}">

    <!-- Absolute asset paths -->
    <link rel="icon" href="/assets/images/favicon.ico">
    <link rel="stylesheet" href="/assets/css/animations.css">
    <link rel="stylesheet" href="/assets/css/mobile-only.css">
    <link rel="stylesheet" href="/assets/css/carousel.css">

    <!-- CDN libraries -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body>
    <!-- Navigation with translated text and language-specific URLs -->
    <nav>
        <a href="/en/">Home</a>  <!-- or /de/ for German -->
    </nav>

    <!-- Page content with all text translated -->
    <main>{{translated content}}</main>

    <!-- Footer with translated text -->
    <footer>{{translated footer}}</footer>
</body>
</html>
```

---

## 🌐 CDN Resources (External)

All pages use these CDN resources:
```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Alpine.js (for interactivity) -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest"></script>
```

---

## ✅ Resource Verification

### Build and Test Process

```bash
# 1. Build the site
npm run build

# 2. Serve locally
npm run serve
# or: npx serve public -p 8000

# 3. Test URLs
http://localhost:8000/                    # Root (redirects)
http://localhost:8000/en/                 # English homepage
http://localhost:8000/de/                 # German homepage
http://localhost:8000/en/contact.html     # English contact
http://localhost:8000/de/contact.html     # German contact
```

### Resource Checklist

After building, verify these resources are accessible:

**Pages:**
- ✅ `/public/index.html` - Root redirect exists
- ✅ `/public/en/index.html` - English homepage
- ✅ `/public/de/index.html` - German homepage
- ✅ `/public/en/contact.html` - English contact
- ✅ `/public/de/contact.html` - German contact
- ✅ `/public/en/degree-check.html` - English degree checker
- ✅ `/public/de/degree-check.html` - German degree checker
- ✅ `/public/en/visa-check.html` - English visa checker
- ✅ `/public/de/visa-check.html` - German visa checker

**Assets:**
- ✅ `/public/assets/images/favicon.ico`
- ✅ `/public/assets/images/logo.png`
- ✅ `/public/assets/css/animations.css`
- ✅ `/public/assets/css/mobile-only.css`
- ✅ `/public/assets/css/carousel.css`
- ✅ `/public/assets/json/anabin-data.json`
- ✅ `/public/assets/json/degrees-data.json`

---

## 🔧 Common Issues & Solutions

### Issue: Pages not generating
**Problem**: `public/` directory is empty after build
**Solution**:
1. Check `scripts/build.js` for errors
2. Ensure `views/pages/*.handlebars` files exist
3. Run `npm run build` and check console output
4. Verify `locales/en/` and `locales/de/` have all required JSON files

### Issue: Translations not appearing
**Problem**: Text shows as `{{t "key"}}` or blank
**Solution**:
1. Check translation key exists in `locales/{lang}/*.json`
2. Ensure JSON files are valid (no trailing commas)
3. Rebuild: `npm run build`
4. Check build console for "Loaded X translations for {lang}"

### Issue: Images not showing
**Problem**: 404 errors for images
**Solution**:
1. Verify images exist in `assets/images/`
2. Use absolute paths: `/assets/images/logo.png`
3. Check images copied to `public/assets/images/` after build
4. Ensure paths start with `/` in templates

### Issue: CSS not applying
**Problem**: Styles not loading
**Solution**:
1. Check CSS files exist in `assets/css/`
2. Use absolute paths: `/assets/css/animations.css`
3. Verify CSS copied to `public/assets/css/` after build
4. Check browser console for 404 errors

### Issue: Language links broken
**Problem**: Clicking language links gives 404
**Solution**:
1. Ensure using `{{lang}}` variable: `<a href="/{{lang}}/contact.html">`
2. Never hardcode `/en/` or `/de/` in templates
3. Check generated HTML has correct paths
4. Rebuild after fixing templates

### Issue: JSON data not loading
**Problem**: Degree checker or visa checker not working
**Solution**:
1. Use absolute paths: `/assets/json/anabin-data.json`
2. Check JSON files copied to `public/assets/json/`
3. Verify JSON is valid (use jsonlint.com)
4. Check browser network tab for 404 errors

### Issue: Build fails
**Problem**: `npm run build` errors
**Solution**:
1. Check all JSON files for syntax errors (trailing commas, etc.)
2. Ensure all partials referenced exist
3. Check `scripts/build.js` for specific error message
4. Verify Node.js version >= 14.x

---

## 🚀 Deployment Notes

### Pre-Deployment Checklist

```bash
# 1. Build the site
npm run build

# 2. Verify build output
ls -la public/
ls -la public/en/
ls -la public/de/
ls -la public/assets/

# 3. Test locally
npm run serve
# Check http://localhost:8000/en/ and /de/

# 4. Check generated HTML
cat public/en/index.html  # Verify paths are absolute (/assets/...)
cat public/de/index.html  # Verify German translations
```

### Deployment Options

**Option 1: Deploy public/ directory**
- Upload entire `public/` directory to web server
- Ensure server serves `index.html` as default for directories
- Configure correct MIME types

**Option 2: CI/CD Pipeline**
```yaml
# Example GitHub Actions
- run: npm install
- run: npm run build
- uses: actions/upload-artifact@v3
  with:
    path: public/
```

### Server Configuration

Ensure server has correct MIME types:
- `.json` → `application/json`
- `.css` → `text/css`
- `.js` → `text/javascript`
- `.html` → `text/html`

Configure rewrites (if needed):
- `/` → `/index.html` (for language detection)
- `/en/` → `/en/index.html`
- `/de/` → `/de/index.html`

---

## 📝 Path Pattern Rules

Following `docs/RULES.md` standards:

1. **All asset paths are absolute** (start with `/`):
   - `/assets/css/` - CSS files
   - `/assets/js/` - JavaScript files
   - `/assets/images/` - Images
   - `/assets/json/` - Data files

2. **Language-aware internal links**:
   - Use `{{lang}}` variable: `/{{lang}}/page.html`
   - Never hardcode `/en/` or `/de/`

3. **Source file organization**:
   - Templates → `views/`
   - Translations → `locales/`
   - Static assets → `assets/`
   - Generated output → `public/` (never edit!)

4. **Translation keys**:
   - Use dot notation: `hero.title`, `nav.services`
   - Group by section/page in separate JSON files

---

## 🎯 Quick Reference

### Edit Content
1. Edit `locales/en/*.json` or `locales/de/*.json`
2. Run `npm run build`
3. Test at http://localhost:8000

### Edit Layout
1. Edit `views/layouts/main.handlebars`
2. Run `npm run build`
3. Test all pages

### Edit Page
1. Edit `views/pages/{page}.handlebars`
2. Run `npm run build`
3. Test specific page

### Add Asset
1. Add file to `assets/css/`, `assets/js/`, or `assets/images/`
2. Reference with absolute path: `/assets/...`
3. Run `npm run build` (copies to public/)
4. Test in browser

---

**Last Updated**: 2025-11-05
**Version**: 2.0 - Multilingual Build System
**Build Status**: ✅ Working with Handlebars + i18n
