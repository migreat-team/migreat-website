# MiGreat Germany - Migration Support Website

**Version**: 2.0 - Internationalized & Build System
**Last Updated**: 2025-11-05
**Status**: ✅ Production Ready with Multilingual Support

---

## 📋 Overview

MiGreat Germany is a comprehensive migration support platform helping professionals from India, Ghana, Nigeria, and Kenya navigate the German work visa process. The platform provides automated degree recognition checking, visa eligibility assessment, and personalized migration guidance.

**NEW in v2.0**: Full internationalization (i18n) support with English and German languages, Handlebars templating system, and automated build process.

### Key Features

✅ **Multilingual Support**
- English and German language versions
- Automatic browser language detection
- SEO-optimized language switching
- Separate URL paths per language (/en/, /de/)

✅ **Degree Recognition Checker**
- 1,671 institutions from 4 countries
- 639 degrees with official Anabin classifications
- Real-time recognition status
- Integration with German KMK database

✅ **Visa Eligibility Tool**
- Opportunity Card points calculator
- EU Blue Card assessment
- Skilled Worker Visa evaluation
- Job Training (Ausbildung) eligibility

✅ **Success Stories**
- 14 comprehensive testimonials
- All 4 target countries represented
- 7 occupation categories covered
- Real salary comparisons

✅ **Contact & Support**
- Multi-channel contact options
- WhatsApp integration
- Email support
- Background survey form

---

## 🏗️ Technical Architecture

### Tech Stack
- **Templating**: Handlebars.js (component-based)
- **Build System**: Node.js build script + Rollup + PostCSS
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Lucide Icons (CDN)
- **Interactivity**: Alpine.js (CDN)
- **i18n**: JSON-based translation files
- **Deployment**: Static site generation

### Project Structure
```
migreat-website/
├── views/                      # Handlebars templates (source)
│   ├── layouts/
│   │   └── main.handlebars    # Main layout wrapper
│   ├── pages/                 # Page templates
│   │   ├── home.handlebars
│   │   ├── contact.handlebars
│   │   ├── degree-check.handlebars
│   │   └── visa-check.handlebars
│   └── partials/              # Reusable components
│       ├── common/            # Shared partials (nav, footer)
│       ├── home/              # Homepage sections
│       └── sections/          # Other reusable sections
├── locales/                   # Translations (i18n)
│   ├── en/                    # English translations
│   │   ├── meta.json
│   │   ├── nav.json
│   │   ├── hero.json
│   │   └── [other sections].json
│   └── de/                    # German translations
│       └── [same structure]
├── assets/                    # Static assets (copied to public/)
│   ├── css/
│   │   ├── animations.css
│   │   ├── carousel.css
│   │   └── mobile-only.css
│   ├── js/
│   ├── json/
│   │   ├── anabin-data.json   # Institution data
│   │   └── degrees-data.json  # Degree data
│   ├── images/
│   └── csv/                   # Raw data
├── src/                       # Source files for build
│   ├── js/
│   │   └── main.js
│   └── styles/
│       └── main.css
├── scripts/
│   └── build.js               # Build script (Handlebars + i18n)
├── public/                    # Generated output (DO NOT EDIT!)
│   ├── index.html             # Root redirect with language detection
│   ├── en/                    # English version
│   │   ├── index.html
│   │   ├── contact.html
│   │   ├── degree-check.html
│   │   └── visa-check.html
│   ├── de/                    # German version
│   │   └── [same structure]
│   └── assets/                # Copied from /assets
└── docs/                      # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
```bash
Node.js >= 14.x
npm >= 6.x
```

### Installation
```bash
# Clone repository
git clone [repository-url]
cd migreat-website

# Install dependencies
npm install
```

### Development Workflow
```bash
# Build the site (compiles Handlebars + copies assets)
npm run build

# Serve the built site locally
npm run serve
# Opens at http://localhost:8000

# For development with auto-rebuild (if configured)
npm run dev
```

### Project Organization Rules
- **Source templates**: `views/` (Handlebars)
- **Translations**: `locales/` (JSON)
- **Static assets**: `assets/` (CSS, JS, images, data)
- **Build script**: `scripts/build.js`
- **Generated output**: `public/` (never edit directly!)
- **Documentation**: `docs/` (markdown only)

---

## 📱 Pages Overview

All pages are available in both English (`/en/`) and German (`/de/`) versions.

### 1. Homepage (`home.handlebars` → `index.html`)
- Hero section with auto-rotating testimonial carousel
- "How It Works" - 3 Easy Steps section
- Services overview
- Success stories carousel (5 slides, 14 testimonials)
- Why Germany section
- Statistics section
- Call-to-action sections
- All content loaded from locales JSON files

### 2. Degree Recognition Checker (`degree-check.handlebars`)
- Country selection (India, Ghana, Nigeria, Kenya)
- Institution dropdown (1,671 institutions)
- Degree dropdown (639 degrees)
- Recognition status logic:
  - **Fully Recognized**: H+ university + degree in list + class ≠ NZ
  - **University Recognized**: H+ university + degree not listed
  - **Manual Recognition**: All other cases
- Multilingual labels and instructions

### 3. Visa Eligibility Tool (`visa-check.handlebars`)
- 9-question assessment
- Opportunity Card points calculation
- Visa type recommendations:
  - EU Blue Card
  - Skilled Worker Visa
  - Opportunity Card
  - Job Training (Ausbildung)
- Personalized guidance
- Translated questions and results

### 4. Contact Page (`contact.handlebars`)
- Berlin office address
- Email: migreatgermany@gmail.com
- WhatsApp: +49 123 456 7890
- Contact form
- Quick action links
- Google Maps integration
- Multilingual contact information

---

## 🎨 Design System

### Colors
- **Primary**: Red (#dc2626)
- **Secondary**: Yellow (#eab308)
- **Gradient**: Red to Yellow (135deg)
- **Text**: Gray-900 (#111827)
- **Background**: White (#ffffff)

### Typography
- **Font**: System fonts (Tailwind default)
- **Headings**: Bold, responsive sizes
- **Body**: 16px base, 1.6 line-height

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🔧 Component System

Components are built using Handlebars partials and compiled during the build process.

### Handlebars Templating

```handlebars
<!-- Layout (views/layouts/main.handlebars) -->
<!DOCTYPE html>
<html lang="{{lang}}">
<head>
    {{> common/head}}
</head>
<body>
    {{> common/nav}}
    {{{body}}}
    {{> common/footer}}
</body>
</html>

<!-- Usage in templates with translation helper -->
<h1>{{t "hero.title"}}</h1>
<p>{{t "hero.subtitle"}}</p>
```

### Available Partials
- **common/** - Shared across all pages
  - `head.handlebars` - Meta tags, CSS, scripts
  - `nav.handlebars` - Navigation bar
  - `footer.handlebars` - Footer
- **home/** - Homepage sections
  - `hero.handlebars`
  - `how-it-works.handlebars`
  - `services.handlebars`
  - `stats.handlebars`
  - `success-stories.handlebars`
  - `why-germany.handlebars`
  - `cta.handlebars`
- **sections/** - Reusable sections for other pages

### Handlebars Helpers
- `{{t "key"}}` - Translation lookup from locales JSON
- `{{eq a b}}` - Equality comparison
- `{{unless condition}}` - Inverse if
- `{{add a b}}` - Addition helper

---

## 📊 Data Sources

### Anabin Database
- **Source**: Official German government database (anabin.kmk.org)
- **Coverage**: 4 countries (India, Ghana, Nigeria, Kenya)
- **Institutions**: 1,671 verified institutions
- **Degrees**: 639 degree classifications
- **Format**: JSON (compiled from CSV)
- **Update Frequency**: As needed from official source

### Recognition Status Codes
- **H+**: Fully recognized institution
- **H+/-**: Conditionally recognized
- **H-**: Not recognized
- **Degree Classes**: Varies by degree type

---

## 🧪 Testing

### Browser Support
- ✅ Chrome (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Edge (last 2 versions)

### Device Testing
- ✅ iPhone SE (375px)
- ✅ iPhone 12/13 (390px)
- ✅ iPad (768px)
- ✅ Desktop (1024px+)

### Test Checklist
- [ ] All navigation links work
- [ ] All footer links work
- [ ] All images load
- [ ] All CSS loads
- [ ] All JavaScript executes
- [ ] Forms submit correctly
- [ ] Mobile menu works
- [ ] Carousels rotate
- [ ] No console errors

---

## 🚀 Deployment

### Build Process

The site must be built before deployment:

```bash
# 1. Run the build
npm run build

# 2. The build process:
#    - Cleans the public/ directory
#    - Copies assets/ to public/assets/
#    - Compiles Handlebars templates with translations
#    - Generates HTML for each language (en, de)
#    - Creates root index.html with language detection

# 3. Output is in public/ directory
```

### Static Hosting Options

**Option 1: Netlify** (Recommended)
```bash
# netlify.toml configuration
[build]
  command = "npm run build"
  publish = "public"

# Build settings in Netlify UI:
# - Build command: npm run build
# - Publish directory: public
```

**Option 2: Vercel**
```bash
# vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "public"
}
```

**Option 3: GitHub Pages**
```bash
# .github/workflows/deploy.yml
- run: npm install
- run: npm run build
- uses: peaceiris/actions-gh-pages@v3
  with:
    publish_dir: ./public
```

**Option 4: Traditional Hosting**
- Run `npm run build` locally
- Upload contents of `public/` directory via FTP/SFTP
- Ensure server serves index.html as default
- Configure correct MIME types for .json files

### Pre-Deployment Checklist
- [ ] Run `npm run build` successfully
- [ ] Test all pages locally in both languages (/en/ and /de/)
- [ ] Verify language switching works
- [ ] Check browser language detection
- [ ] Verify all links work in both languages
- [ ] Check console for errors
- [ ] Test on mobile devices
- [ ] Verify external links (Google Forms, etc.)
- [ ] Test contact form
- [ ] Verify data files load correctly (anabin-data.json, degrees-data.json)
- [ ] Verify all images and assets load from /assets/

---

## 📝 Content Management

### Adding/Editing Translations

All content text is in JSON files under `locales/`:

```bash
# 1. Edit translation files
locales/en/hero.json       # English hero section
locales/de/hero.json       # German hero section

# 2. Rebuild the site
npm run build

# 3. Test both languages
# Visit /en/ and /de/ to verify changes
```

### Adding New Pages

```bash
# 1. Create Handlebars template
views/pages/new-page.handlebars

# 2. Create translation files
locales/en/new-page.json
locales/de/new-page.json

# 3. Build automatically picks up new pages
npm run build

# Output: public/en/new-page.html and public/de/new-page.html
```

### Adding New Testimonials

1. Add image to `assets/images/`
2. Edit translation files:
   - `locales/en/success-stories.json`
   - `locales/de/success-stories.json`
3. Edit partial if needed: `views/partials/home/success-stories.handlebars`
4. Rebuild: `npm run build`

### Updating Institution Data

1. Download latest CSV from anabin.kmk.org
2. Place in `assets/csv/`
3. Run data conversion script (if needed)
4. Update `assets/json/anabin-data.json`
5. Rebuild: `npm run build`
6. Test degree checker functionality in both languages

### Modifying Navigation

1. Edit partial: `views/partials/common/nav.handlebars`
2. Edit translations:
   - `locales/en/nav.json`
   - `locales/de/nav.json`
3. Rebuild: `npm run build`
4. Changes reflect on all pages automatically

### Updating Footer

1. Edit partial: `views/partials/common/footer.handlebars`
2. Edit translations:
   - `locales/en/footer.json`
   - `locales/de/footer.json`
3. Rebuild: `npm run build`
4. Verify all links still work

---

## 🐛 Known Issues & Improvements

### Current State
✅ **Resolved Issues (v2.0)**:
- Component architecture implemented with Handlebars partials
- Path references standardized with build system
- Internationalization fully functional
- Build process automated

### Future Improvements
- [ ] Mobile CSS refactoring (reduce `!important` usage)
- [ ] Add more languages (French, Spanish, etc.)
- [ ] Implement CSS/JS minification in build
- [ ] Add automated testing
- [ ] Optimize image loading (lazy loading, WebP format)

---

## 📚 Documentation

### Available Docs
- **README.md** (this file) - Project overview and setup
- **RULES.md** - Development standards and best practices
- **RESOURCE-PATHS.md** - Resource path reference guide

### Code Documentation
- Build script (`scripts/build.js`) fully commented
- Handlebars helpers documented
- Translation system explained
- Component structure documented in partials

---

## 🤝 Contributing

### Development Workflow
1. Read `docs/RULES.md` for coding standards
2. Create feature branch from `main`
3. Make changes in `views/`, `locales/`, or `assets/`
4. Run `npm run build` to generate output
5. Test thoroughly:
   - Both languages (/en/, /de/)
   - All browsers
   - Mobile devices
6. Commit only source files (never commit `public/`)
7. Submit pull request
8. Deploy after approval

### Key Principles
- Handlebars-based component architecture
- All text content in `locales/` JSON files
- Never edit `public/` directory directly
- Always rebuild after changes
- Test both language versions
- See `docs/RULES.md` for full guidelines

### Important Files to Never Edit Directly
- ❌ `public/**` - Generated by build script
- ❌ `package-lock.json` - Managed by npm
- ✅ `views/**` - Source templates
- ✅ `locales/**` - Translations
- ✅ `assets/**` - Static files

---

## 📞 Support

### Contact Information
- **Email**: migreatgermany@gmail.com
- **WhatsApp**: +49 123 456 7890
- **Office**: Friedrichstraße 123, 10117 Berlin, Germany
- **Hours**: Mon-Fri 9:00-18:00 CET, Sat 10:00-14:00 CET

### For Technical Issues
- Check browser console for errors
- Verify all files uploaded correctly
- Ensure MIME types configured properly
- Test in different browsers
- Check mobile responsiveness

---

## 📈 Analytics & Performance

### Performance Metrics
- **Page Load**: < 3 seconds (target)
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 3 seconds
- **Total Page Size**: ~2-5 MB (with images)

### Optimization
- Images compressed and optimized
- CSS/JS loaded efficiently
- CDN usage for libraries
- Lazy loading for images (can be added)

---

## 🔐 Security

### Best Practices
- External links use `rel="noopener noreferrer"`
- No sensitive data in client-side code
- Form submissions go to Google Forms (secure)
- HTTPS enforced (hosting provider)

### Privacy
- No user tracking without consent
- Data collection via Google Forms only
- Transparent privacy policy (add if needed)

---

## 📋 Changelog Highlights

### Version 2.0 (2025-11-05)
- ✅ **Multilingual Support**: English and German versions
- ✅ **Build System**: Handlebars-based static site generation
- ✅ **i18n Architecture**: JSON-based translations
- ✅ **Component System**: Handlebars partials for reusable components
- ✅ **Language Detection**: Automatic browser language routing
- ✅ **SEO**: Language-specific URLs (/en/, /de/)
- ✅ **Build Automation**: Single command deployment

### Version 1.0 (2025-10-23)
- ✅ Complete website with all pages
- ✅ Degree recognition tool (1,671 institutions)
- ✅ Visa eligibility checker
- ✅ 14 comprehensive testimonials
- ✅ Mobile responsive design
- ✅ Contact page and forms

---

## 🎯 Roadmap

### Short Term (Weeks 1-2)
- [ ] Mobile CSS refactoring (reduce `!important` usage)
- [ ] Add CSS/JS minification to build process
- [ ] Implement lazy loading for images
- [ ] Add automated tests for build process
- [ ] Create deployment CI/CD pipeline

### Medium Term (Month 1-2)
- [ ] Add more languages (French, Spanish, Arabic)
- [ ] User testimonial submission form
- [ ] Newsletter signup integration
- [ ] Blog/news section with CMS
- [ ] Enhanced SEO optimization (structured data)

### Long Term (Quarter 1-2)
- [ ] User dashboard for tracking applications
- [ ] Integration with partner services
- [ ] Automated degree recognition updates (API integration)
- [ ] Progressive Web App (PWA) features
- [ ] Advanced analytics and A/B testing

---

## ⚖️ License

**Copyright © 2024 MiGreat Germany. All rights reserved.**

This is proprietary software. Unauthorized copying, distribution, or modification is prohibited.

---

## 🙏 Acknowledgments

- Anabin database (KMK Germany) for institution data
- Target country communities for testimonials
- Development team for implementation
- Users for feedback and support

---

**For questions or support**: migreatgermany@gmail.com

**Last Updated**: 2025-11-05
**Version**: 2.0
