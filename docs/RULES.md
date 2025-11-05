# MiGreat Website - Development Rules & Standards

**Purpose**: Maintain clean, simple, maintainable code with multilingual support and automated builds.

**Version**: 2.0 - Updated for Handlebars + i18n architecture
**Last Updated**: 2025-11-05

---

## 🎯 Core Principles

### 1. **Simplicity Over Complexity**
- Write code that's easy to read and understand
- If you can't explain it in one sentence, simplify it
- Use Handlebars for templating - simple and powerful
- Build system automates repetitive tasks

### 2. **Component-Based Architecture with Handlebars**
- **DRY** (Don't Repeat Yourself) - write once, use everywhere
- Every reusable element gets its own partial
- Partials live in `views/partials/`
- Components compiled at build time (not runtime)

### 3. **Zero Duplication**
- Never copy-paste code between files
- One source of truth for every piece of content
- If it exists twice, make it a partial
- All text content in `locales/` JSON files (never hardcoded)

### 4. **Multilingual First**
- All user-facing text goes in `locales/` JSON files
- Never hardcode text strings in templates
- Use `{{t "key"}}` helper for all translations
- Test both English and German versions after changes

### 5. **Build-Aware Development**
- Never edit `public/` directory - it's generated
- Always run `npm run build` after changes
- Test the built output, not source files
- Commit source files, not generated output

### 6. **No Over-Engineering**
- Don't add features "just in case"
- Don't optimize prematurely
- Don't use complex patterns when simple ones work
- Ship working code, iterate later

---

## 📁 File Structure

```
migreat-website/
├── views/               # SOURCE: Handlebars templates
│   ├── layouts/
│   │   └── main.handlebars        # Main layout wrapper
│   ├── pages/
│   │   ├── home.handlebars        # Homepage
│   │   ├── contact.handlebars
│   │   ├── degree-check.handlebars
│   │   └── visa-check.handlebars
│   └── partials/                  # Reusable components
│       ├── common/                # Shared (nav, footer, head)
│       ├── home/                  # Homepage sections
│       └── sections/              # Other sections
├── locales/             # SOURCE: Translations
│   ├── en/             # English translations
│   │   ├── meta.json
│   │   ├── nav.json
│   │   ├── hero.json
│   │   └── [others].json
│   └── de/             # German translations
│       └── [same structure]
├── assets/              # SOURCE: Static files (copied to public/)
│   ├── css/
│   ├── js/
│   ├── json/           # Data (anabin, degrees)
│   ├── images/
│   └── csv/
├── src/                 # SOURCE: Build inputs
│   ├── js/
│   └── styles/
├── scripts/
│   └── build.js        # Build script
├── public/              # GENERATED: Do not edit!
│   ├── index.html      # Root redirect
│   ├── en/             # English pages
│   ├── de/             # German pages
│   └── assets/         # Copied from /assets
└── docs/                # Documentation
    ├── README.md
    ├── RULES.md
    └── RESOURCE-PATHS.md
```

### File Naming Rules
- **Handlebars**: `kebab-case.handlebars` (e.g., `degree-check.handlebars`)
- **CSS**: `kebab-case.css` (e.g., `mobile-only.css`)
- **JavaScript**: `kebab-case.js` (e.g., `main.js`)
- **Images**: `kebab-case.jpg/png/webp` (e.g., `priya-sharma-new.jpg`)
- **Translations**: `section-name.json` (e.g., `hero.json`, `nav.json`)
- **Partials**: `component-name.handlebars` (e.g., `nav.handlebars`)

### What Goes Where
- **Page templates**: `views/pages/` (Handlebars)
- **Reusable partials**: `views/partials/` (Handlebars)
- **Layout wrapper**: `views/layouts/` (Handlebars)
- **All text content**: `locales/{lang}/` (JSON)
- **Stylesheets**: `assets/css/` or `src/styles/`
- **Scripts**: `assets/js/` or `src/js/`
- **Images**: `assets/images/`
- **Data**: `assets/json/` or `assets/csv/`
- **Documentation**: `docs/` (markdown ONLY)
- **Generated output**: `public/` (NEVER EDIT!)

---

## 🧩 Component Rules (Handlebars Partials)

### When to Create a Partial
✅ **Create partial if**:
- Code appears on 2+ pages
- Code is likely to be reused
- Code is self-contained (nav, footer, sections)
- Code is complex and benefits from isolation

❌ **Don't create partial if**:
- Used only once and page-specific
- Would be more complex than inline
- Content varies significantly between uses

### Partial Structure
```handlebars
{{!-- views/partials/common/nav.handlebars --}}
{{!--
  PURPOSE: Main navigation bar
  USED ON: All pages via main layout
  DEPENDENCIES: Lucide icons, Alpine.js
  UPDATED: 2025-11-05
--}}
<nav class="bg-white shadow-sm sticky top-0 z-50" x-data="{ mobileMenuOpen: false }">
    <div class="max-w-7xl mx-auto px-4">
        <a href="/{{lang}}/">
            <img src="/assets/images/logo.png" alt="{{t 'nav.logoAlt'}}">
        </a>
        <a href="/{{lang}}/#services">{{t 'nav.services'}}</a>
        {{!-- More nav items --}}
    </div>
</nav>
```

### Using Partials
```handlebars
{{!-- In layout or page --}}
{{> common/nav}}           <!-- Include nav partial -->
{{> home/hero}}           <!-- Include hero section -->
{{> common/footer}}       <!-- Include footer -->

{{!-- Pass data to partials --}}
{{> common/card title="My Title" description="My Description"}}
```

### Translation Helper
```handlebars
{{!-- Lookup translation key in locales/{lang}/*.json --}}
<h1>{{t "hero.title"}}</h1>
<p>{{t "hero.subtitle"}}</p>

{{!-- Translation files --}}
{{!-- locales/en/hero.json --}}
{
  "hero.title": "Welcome to MiGreat Germany",
  "hero.subtitle": "Your companion for migration"
}
```

---

## 🎨 CSS Rules

### Structure
1. **Global styles**: Base typography, colors, resets
2. **Component styles**: Specific to components
3. **Page styles**: Specific to individual pages
4. **Utility overrides**: Mobile, print, etc.

### Best Practices
```css
/* ✅ GOOD - Specific, clear, no !important */
.nav-link {
    color: #374151;
    font-weight: 500;
}

.nav-link:hover {
    color: #dc2626;
}

.nav-link.active {
    color: #dc2626;
    font-weight: 600;
}

/* ❌ BAD - Over-specific, !important abuse */
nav div ul li a.link.active.current {
    color: #dc2626 !important !important;
}
```

### !important Usage
- **Avoid !important** except for:
  - Utility classes (Tailwind overrides)
  - True emergency overrides (document why!)
- Never use multiple `!important` in mobile CSS
- If you need `!important`, your selectors aren't specific enough

### Mobile-First Approach
```css
/* Base styles - mobile */
.hero-section {
    padding: 20px;
    font-size: 18px;
}

/* Desktop overrides */
@media (min-width: 768px) {
    .hero-section {
        padding: 80px;
        font-size: 24px;
    }
}
```

---

## 📝 Handlebars & HTML Rules

### Semantic HTML with Handlebars
```handlebars
<!-- ✅ GOOD - Semantic, accessible, translated -->
<nav>
    <ul>
        <li><a href="/{{lang}}/">{{t 'nav.home'}}</a></li>
        <li><a href="/{{lang}}/contact.html">{{t 'nav.contact'}}</a></li>
    </ul>
</nav>

<section class="hero">
    <h1>{{t 'hero.title'}}</h1>
    <p>{{t 'hero.subtitle'}}</p>
</section>

<footer>
    <p>&copy; 2024 {{t 'footer.company'}}</p>
</footer>

<!-- ❌ BAD - Hardcoded text, no translation -->
<nav>
    <ul>
        <li><a href="/en/">Home</a></li>
    </ul>
</nav>

<!-- ❌ BAD - Div soup, no semantics -->
<div class="nav">
    <div class="nav-list">
        <div class="nav-item">
            <div class="nav-link">Home</div>
        </div>
    </div>
</div>
```

### Handlebars Best Practices
```handlebars
<!-- ✅ GOOD - Use helpers for logic -->
{{#if (eq page 'home')}}
    <h1>{{t 'home.welcome'}}</h1>
{{/if}}

<!-- ✅ GOOD - Language-aware URLs -->
<a href="/{{lang}}/contact.html">{{t 'nav.contact'}}</a>

<!-- ✅ GOOD - Use triple braces for HTML content -->
<div>{{{body}}}</div>

<!-- ❌ BAD - Hardcoded language -->
<a href="/en/contact.html">Contact</a>

<!-- ❌ BAD - Hardcoded text -->
<h1>Welcome to MiGreat</h1>
```

### Accessibility
- Every `<img>` needs descriptive `alt` text
- Links should have meaningful text (not "click here")
- Forms need `<label>` elements
- Buttons need descriptive text or `aria-label`
- Maintain color contrast ratios (4.5:1 minimum)

### Consistency
- Use Tailwind CSS utility classes
- Keep class order consistent: `layout positioning size colors typography`
  ```html
  <div class="flex items-center justify-center w-full p-4 bg-white text-gray-900 font-semibold">
  ```
- Always use double quotes for attributes
- Self-closing tags: `<img />` `<br />` `<meta />`

---

## 💻 JavaScript Rules

### Vanilla First
```javascript
// ✅ GOOD - Simple vanilla JavaScript
document.getElementById('btn').addEventListener('click', function() {
    console.log('Clicked!');
});

// ❌ BAD - Unnecessary framework for simple task
import { createApp } from 'vue';
const app = createApp({
    methods: {
        handleClick() { console.log('Clicked!'); }
    }
});
```

### When to Use Libraries
- **Alpine.js**: For reactive UI (dropdowns, modals, forms)
- **Lucide**: For consistent icons
- **Tailwind**: For utility-first styling
- **Nothing else** unless absolutely necessary

### Code Organization
```javascript
// ✅ GOOD - Clear, documented functions
/**
 * Loads a reusable HTML component
 * @param {string} elementId - Container element ID
 * @param {string} componentPath - Path to component HTML file
 */
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        lucide.createIcons();
    } catch (error) {
        console.error('Component loading error:', error);
    }
}

// ❌ BAD - Unclear, no error handling
async function lc(e,p){const r=await fetch(p);document.getElementById(e).innerHTML=await r.text();}
```

### Performance
- Load scripts at bottom of `<body>` or use `defer`
- Minimize DOM queries (cache selectors)
- Debounce expensive operations (scroll, resize)
- Use event delegation for dynamic elements

---

## 🌍 Internationalization (i18n) Workflow

### Adding New Translations

```bash
# 1. Add keys to both language files
# locales/en/nav.json
{
  "nav.newItem": "New Item",
  "nav.newDescription": "Description here"
}

# locales/de/nav.json
{
  "nav.newItem": "Neuer Artikel",
  "nav.newDescription": "Beschreibung hier"
}

# 2. Use in template
{{t 'nav.newItem'}}

# 3. Rebuild
npm run build
```

### Translation File Organization
```
locales/
├── en/
│   ├── meta.json          # SEO, titles, descriptions
│   ├── nav.json           # Navigation
│   ├── footer.json        # Footer
│   ├── hero.json          # Hero section
│   ├── how-it-works.json  # How it works section
│   ├── services.json      # Services
│   ├── stats.json         # Statistics
│   ├── success-stories.json
│   ├── why-germany.json
│   ├── cta.json           # Call to action
│   ├── contact.json       # Contact page
│   ├── degree-check.json  # Degree checker
│   └── visa-check.json    # Visa checker
└── de/
    └── [same structure]
```

### Translation Best Practices
- ✅ Use descriptive keys: `hero.title`, `nav.services`
- ✅ Group by section/page in separate JSON files
- ✅ Keep keys consistent across languages
- ❌ Never hardcode text in templates
- ❌ Don't create overly nested keys
- ❌ Don't duplicate keys across files

---

## 🔨 Build System Workflow

### Development Cycle
```bash
# 1. Make changes to source files
#    - Edit views/*.handlebars
#    - Edit locales/*.json
#    - Edit assets/*

# 2. Build the site
npm run build

# 3. Test locally
npm run serve
# Visit http://localhost:8000

# 4. Check both languages
# - http://localhost:8000/en/
# - http://localhost:8000/de/

# 5. Commit source files only
git add views/ locales/ assets/ scripts/
git commit -m "Your message"
# Do NOT commit public/
```

### What the Build Does
1. **Cleans** `public/` directory
2. **Copies** `assets/` to `public/assets/`
3. **Registers** all Handlebars partials from `views/partials/`
4. **Loads** translations for each language
5. **Compiles** each page template with translations
6. **Generates** HTML for English (`/en/`) and German (`/de/`)
7. **Creates** root `index.html` with language detection

### Build Script Location
- **File**: `scripts/build.js`
- **Run**: `npm run build`
- **Package.json**: `"build": "node scripts/build.js"`

### Files to NEVER Edit
- ❌ `public/**` - Completely generated
- ❌ `package-lock.json` - Managed by npm
- ❌ Built HTML files - Generated from templates

### Files to ALWAYS Edit
- ✅ `views/**` - All templates
- ✅ `locales/**` - All translations
- ✅ `assets/**` - Static files
- ✅ `scripts/build.js` - If modifying build

---

## 🔗 Linking & Paths

### Internal Links (Language-Aware)
```handlebars
<!-- ✅ GOOD - Language-aware paths -->
<a href="/{{lang}}/">{{t 'nav.home'}}</a>
<a href="/{{lang}}/degree-check.html">{{t 'nav.degreeCheck'}}</a>
<a href="/{{lang}}/visa-check.html">{{t 'nav.visaCheck'}}</a>
<a href="/{{lang}}/contact.html">{{t 'nav.contact'}}</a>

<!-- ✅ GOOD - Section anchors with language -->
<a href="/{{lang}}/#services">{{t 'nav.services'}}</a>
<a href="/{{lang}}/#why-germany">{{t 'nav.whyGermany'}}</a>

<!-- ❌ BAD - Hardcoded language -->
<a href="/en/contact.html">Contact</a>

<!-- ❌ BAD - Missing language path -->
<a href="/contact.html">Contact</a>
```

### Asset Paths (Absolute from Root)
```handlebars
<!-- ✅ GOOD - Absolute paths from root -->
<link rel="stylesheet" href="/assets/css/animations.css">
<script src="/assets/js/main.js"></script>
<img src="/assets/images/logo.png" alt="{{t 'nav.logoAlt'}}">

<!-- ❌ BAD - Relative paths (break in subfolders) -->
<link rel="stylesheet" href="assets/css/animations.css">
<img src="assets/images/logo.png" alt="Logo">
```

### External Links
```html
<!-- ✅ GOOD - Opens in new tab, secure -->
<a href="https://docs.google.com/forms/..." target="_blank" rel="noopener noreferrer">
    Get Started
</a>

<!-- ❌ BAD - Opens in same tab, security risk -->
<a href="https://docs.google.com/forms/...">Get Started</a>
```

---

## 🧪 Testing Rules

### Before Every Commit
- [ ] Run `npm run build` successfully
- [ ] Test English version (`/en/`)
  - [ ] All pages load
  - [ ] All translations appear
  - [ ] All links work
  - [ ] No console errors
- [ ] Test German version (`/de/`)
  - [ ] All pages load
  - [ ] All translations appear
  - [ ] All links work
  - [ ] No console errors
- [ ] Test language detection (root `/`)
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on mobile (375px, 768px, 1024px)
- [ ] Verify all images load from `/assets/`
- [ ] Check for broken links

### Multilingual Testing Checklist
- [ ] All text is translated (no English in German pages)
- [ ] Language-specific URLs work (`/en/`, `/de/`)
- [ ] Navigation links include language prefix
- [ ] Forms submit correctly in both languages
- [ ] Meta tags (title, description) are translated
- [ ] Error messages appear in correct language

### Cross-Browser Compatibility
- Support last 2 versions of major browsers
- Graceful degradation for older browsers
- Test JavaScript features for browser support
- Test language detection script

### Mobile Testing
- Test on real devices when possible
- Use Chrome DevTools device emulation
- Check touch target sizes (min 44×44px)
- Verify no horizontal scrolling
- Test landscape and portrait
- Test language switching on mobile

---

## 🚫 Code Smells to Avoid

### Duplication
```javascript
// ❌ BAD - Duplicated code
function saveUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    fetch('/api/user', { method: 'POST', body: JSON.stringify({ name, email }) });
}

function updateUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    fetch('/api/user', { method: 'PUT', body: JSON.stringify({ name, email }) });
}

// ✅ GOOD - Reusable function
function sendUserData(method) {
    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };
    return fetch('/api/user', {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    });
}

function saveUser() { return sendUserData('POST'); }
function updateUser() { return sendUserData('PUT'); }
```

### Over-Engineering
```javascript
// ❌ BAD - Over-engineered for simple task
class NavigationManager {
    constructor(config) {
        this.config = config;
        this.state = new Map();
        this.observers = [];
    }

    registerObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(o => o.update(this.state));
    }
    // ... 200 more lines
}

// ✅ GOOD - Simple solution
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
```

### Magic Numbers
```javascript
// ❌ BAD - What does 86400000 mean?
setTimeout(resetCache, 86400000);

// ✅ GOOD - Clear constants
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
setTimeout(resetCache, ONE_DAY_MS);
```

### Unclear Naming
```javascript
// ❌ BAD - Unclear names
function p(d) {
    return d.map(x => x.n);
}

// ✅ GOOD - Descriptive names
function extractDegreeNames(degrees) {
    return degrees.map(degree => degree.name);
}
```

---

## 📋 Code Review Checklist

Before merging/deploying, verify:

### Functionality
- [ ] All features work as expected
- [ ] No console errors or warnings
- [ ] All forms submit correctly
- [ ] All links navigate correctly
- [ ] All images display correctly

### Code Quality
- [ ] No code duplication
- [ ] Functions are small and focused
- [ ] Variables have clear names
- [ ] Complex logic has comments
- [ ] No unused code or files

### Performance
- [ ] Images are optimized
- [ ] CSS/JS files are minified (production)
- [ ] No unnecessary network requests
- [ ] Page loads in < 3 seconds

### Accessibility
- [ ] All images have alt text
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

### Mobile
- [ ] Responsive on all screen sizes
- [ ] Touch targets are large enough
- [ ] No horizontal scrolling
- [ ] Text is readable (min 16px)

### Documentation
- [ ] README.md is up to date
- [ ] Complex code has comments
- [ ] Component headers describe purpose
- [ ] Breaking changes are documented

---

## 🎯 Best Practices Summary

### DO ✅
- Write simple, readable code
- Use components for reusable elements
- Keep files organized by type
- Test on real devices
- Document complex logic
- Use semantic HTML
- Follow accessibility guidelines
- Cache API responses
- Handle errors gracefully
- Use meaningful variable names

### DON'T ❌
- Copy-paste code between files
- Use frameworks for simple tasks
- Over-engineer solutions
- Ignore console warnings
- Use `!important` excessively
- Leave unused code/files
- Hardcode values that might change
- Skip mobile testing
- Deploy without testing
- Write code without comments

---

## 🔄 Refactoring Guidelines

### When to Refactor
- Before adding new features
- When you notice duplication
- When code becomes hard to understand
- When performance degrades
- When fixing bugs (fix root cause, not symptom)

### How to Refactor
1. **Write tests first** (if possible)
2. **Make small changes** (one thing at a time)
3. **Test after each change**
4. **Keep git commits atomic**
5. **Document what changed and why**

### Refactoring Red Flags
- Changing multiple files at once
- No clear goal/outcome
- Breaking existing functionality
- Taking more than 1 day
- Rewriting instead of refactoring

---

## 📚 Learning Resources

### HTML/CSS
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

### JavaScript
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

### Tools
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Alpine.js Docs](https://alpinejs.dev/)
- [Lucide Icons](https://lucide.dev/)

### Accessibility
- [WebAIM](https://webaim.org/)
- [A11y Project](https://www.a11yproject.com/)

---

## 🚀 Quick Reference

### Starting New Feature
1. Plan partial/component structure
2. Create Handlebars template in `views/`
3. Add translations to `locales/en/` and `locales/de/`
4. Write minimal HTML/CSS/JS
5. Run `npm run build`
6. Test in both languages
7. Refine and optimize
8. Document usage
9. Commit source files (not public/)

### Fixing Bugs
1. Reproduce the bug in both languages
2. Identify root cause in source files
3. Write fix (edit views/, locales/, or assets/)
4. Run `npm run build`
5. Test fix thoroughly in both languages
6. Commit and deploy
7. Monitor for regressions

### Adding New Page
1. Create template: `views/pages/new-page.handlebars`
2. Add translations:
   - `locales/en/new-page.json`
   - `locales/de/new-page.json`
3. Build automatically generates pages
4. Update navigation in partials
5. Run `npm run build`
6. Test all links in both languages
7. Test mobile responsiveness
8. Commit and deploy

### Adding New Language
1. Create directory: `locales/fr/` (example: French)
2. Copy all JSON files from `locales/en/`
3. Translate all strings
4. Update `scripts/build.js`: Add 'fr' to languages array
5. Run `npm run build`
6. Test new language version
7. Update language detection in root index.html

### Editing Existing Content
1. Find translation in `locales/{lang}/*.json`
2. Edit the translation string
3. Run `npm run build`
4. Test the change in browser
5. Commit changes

---

**Last Updated**: 2025-11-05
**Version**: 2.0 - Multilingual Build System
**Maintainer**: MiGreat Germany Development Team

---

## 💡 Remember

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci

> "Make it work, make it right, make it fast — in that order." — Kent Beck

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler

**Keep it simple. Keep it clean. Keep it working.** 🚀
