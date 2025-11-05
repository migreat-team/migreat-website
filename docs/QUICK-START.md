# Quick Start Guide

## Initial Setup

```bash
# Install dependencies
npm install

# Build the website
npm run build

# Serve locally for testing (port 8000)
npm run serve
```

Then visit: http://localhost:8000

## Available Commands

```bash
npm run build       # Build the entire website (generates public/ folder)
npm run dev         # Development mode with watch (requires setup)
npm run serve       # Serve the built website locally
```

## Testing Locally

After running `npm run build` and `npm run serve`:

- **Root**: http://localhost:8000 (redirects to /en/ or /de/ based on browser language)
- **English site**: http://localhost:8000/en/
- **German site**: http://localhost:8000/de/

### Pages to Test:

**English:**
- http://localhost:8000/en/ (Home)
- http://localhost:8000/en/contact.html
- http://localhost:8000/en/degree-check.html
- http://localhost:8000/en/visa-check.html

**German:**
- http://localhost:8000/de/ (Home)
- http://localhost:8000/de/contact.html
- http://localhost:8000/de/degree-check.html
- http://localhost:8000/de/visa-check.html

## Workflow

### Making Content Changes

1. Edit locale files in `locales/en/` or `locales/de/`
2. Run `npm run build`
3. Test with `npm run serve`

### Making Template Changes

1. Edit templates in `views/`
2. Run `npm run build`
3. Test with `npm run serve`

### Deploying

1. Run `npm run build`
2. Upload the `public/` folder to your web server
3. Or use Netlify/Vercel with build command: `npm run build`

## Key Files

- **package.json** - Dependencies and scripts
- **scripts/build.js** - Build script
- **views/layouts/main.handlebars** - Main layout
- **views/pages/** - Page templates
- **views/partials/** - Reusable components
- **locales/** - Translation files

## Troubleshooting

**Q: Build fails?**
- Check Node.js version (should be 16+)
- Run `npm install` again
- Check for syntax errors in templates or JSON files

**Q: Translations not showing?**
- Check translation key exists in locale file
- Rebuild: `npm run build`

**Q: Page not found?**
- Check the page was generated in `public/en/` or `public/de/`
- Check template exists in `views/pages/`

## Need Help?

See **BUILD-SYSTEM-README.md** for detailed documentation.
