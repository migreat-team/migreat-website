# MiGreat Website - Development Rules & Standards

**Purpose**: Maintain clean, simple, maintainable code without duplication or over-engineering.

---

## 🎯 Core Principles

### 1. **Simplicity Over Complexity**
- Write code that's easy to read and understand
- If you can't explain it in one sentence, simplify it
- Prefer vanilla JavaScript over frameworks when possible
- No build systems, no bundlers - keep it simple

### 2. **Component-Based Architecture**
- **DRY** (Don't Repeat Yourself) - write once, use everywhere
- Every reusable element gets its own component
- Components live in `templates/components/`
- Load components with simple JavaScript fetch()

### 3. **Zero Duplication**
- Never copy-paste code between files
- One source of truth for every piece of content
- If it exists twice, make it a component
- Regular audits to catch duplication early

### 4. **No Over-Engineering**
- Don't add features "just in case"
- Don't optimize prematurely
- Don't use complex patterns when simple ones work
- Ship working code, iterate later

### 5. **No Overthinking**
- Make decisions quickly
- Perfect is the enemy of good
- If it works and it's clean, ship it
- Don't debate for hours what can be tested in minutes

---

## 📁 File Structure

```
migreat-website/
├── assets/
│   ├── css/          # All stylesheets
│   ├── csv/          # Data files (Anabin database)
│   ├── images/       # All images
│   ├── js/           # JavaScript files
│   └── json/         # JSON data files
├── docs/             # ALL documentation (markdown files ONLY)
│   ├── README.md
│   ├── RULES.md
│   └── REFACTORING-PLAN.md
└── templates/
    ├── components/   # Reusable HTML components
    │   ├── nav.html
    │   ├── footer.html
    │   ├── head.html
    │   └── scripts.html
    ├── index.html
    ├── degree-check.html
    ├── visa-check.html
    └── contact.html
```

### File Naming Rules
- HTML: `kebab-case.html` (e.g., `degree-check.html`)
- CSS: `kebab-case.css` (e.g., `mobile-only.css`)
- JavaScript: `kebab-case.js` (e.g., `component-loader.js`)
- Images: `kebab-case.jpg/png/webp` (e.g., `priya-sharma-new.jpg`)
- Components: `name.html` (e.g., `nav.html`, `footer.html`)

### What Goes Where
- **HTML pages**: `templates/`
- **Components**: `templates/components/`
- **Stylesheets**: `assets/css/`
- **Scripts**: `assets/js/`
- **Images**: `assets/images/`
- **Data**: `assets/json/` or `assets/csv/`
- **Documentation**: `docs/` (markdown ONLY)

---

## 🧩 Component Rules

### When to Create a Component
✅ **Create component if**:
- Code appears on 2+ pages
- Code is likely to be reused
- Code is self-contained (nav, footer, header)
- Code is complex and benefits from isolation

❌ **Don't create component if**:
- Used only once
- Highly page-specific
- Would be more complex than inline

### Component Structure
```html
<!-- templates/components/nav.html -->
<!--
  PURPOSE: Main navigation bar
  USED ON: All pages
  DEPENDENCIES: Lucide icons, Alpine.js
  UPDATED: 2025-10-31
-->
<nav class="bg-white shadow-sm sticky top-0 z-50" x-data="{ mobileMenuOpen: false }">
    <!-- Navigation content -->
</nav>
```

### Component Loading
```javascript
// Simple, no build system
async function loadComponent(elementId, componentPath) {
    const response = await fetch(componentPath);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
    // Re-initialize icons and Alpine if needed
    if (window.lucide) lucide.createIcons();
}

// Usage in HTML
<div id="nav-container"></div>
<script>
    loadComponent('nav-container', '/templates/components/nav.html');
</script>
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

## 📝 HTML Rules

### Semantic HTML
```html
<!-- ✅ GOOD - Semantic, accessible -->
<nav>
    <ul>
        <li><a href="/">Home</a></li>
    </ul>
</nav>

<section class="hero">
    <h1>Welcome</h1>
    <p>Description</p>
</section>

<footer>
    <p>&copy; 2024 MiGreat Germany</p>
</footer>

<!-- ❌ BAD - Div soup, no semantics -->
<div class="nav">
    <div class="nav-list">
        <div class="nav-item">
            <div class="nav-link">Home</div>
        </div>
    </div>
</div>
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

## 🔗 Linking & Paths

### Internal Links
```html
<!-- ✅ GOOD - Relative paths -->
<a href="degree-check.html">Degree Recognition</a>
<a href="visa-check.html">Visa Check</a>
<a href="contact.html">Contact</a>

<!-- ❌ BAD - Broken anchor links (not pages) -->
<a href="#degree-check">Degree Recognition</a>
```

### Asset Paths
```html
<!-- ✅ GOOD - Correct folder structure -->
<link rel="stylesheet" href="assets/css/styles.css">
<script src="assets/js/main.js"></script>
<img src="assets/images/logo.png" alt="MiGreat Germany Logo">

<!-- ❌ BAD - Old/incorrect paths -->
<link rel="stylesheet" href="assets/styles.css">
<script src="assets/main.js"></script>
<img src="images/logo.png" alt="Logo">
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
- [ ] Test all pages in Chrome
- [ ] Test all pages in Safari
- [ ] Test all pages in Firefox
- [ ] Test on mobile (375px, 768px, 1024px)
- [ ] Check console for errors
- [ ] Verify all links work
- [ ] Verify all images load

### Cross-Browser Compatibility
- Support last 2 versions of major browsers
- Graceful degradation for older browsers
- Test JavaScript features for browser support

### Mobile Testing
- Test on real devices when possible
- Use Chrome DevTools device emulation
- Check touch target sizes (min 44×44px)
- Verify no horizontal scrolling
- Test landscape and portrait

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
1. Plan component structure
2. Create component files
3. Write minimal HTML/CSS/JS
4. Test functionality
5. Refine and optimize
6. Document usage
7. Deploy

### Fixing Bugs
1. Reproduce the bug
2. Identify root cause
3. Write fix (minimal change)
4. Test fix thoroughly
5. Deploy
6. Monitor for regressions

### Adding New Page
1. Copy similar existing page
2. Replace page-specific content
3. Ensure components are loaded
4. Update navigation
5. Test all links
6. Test mobile responsiveness
7. Deploy

---

**Last Updated**: 2025-10-31
**Version**: 1.0
**Maintainer**: MiGreat Germany Development Team

---

## 💡 Remember

> "Simplicity is the ultimate sophistication." — Leonardo da Vinci

> "Make it work, make it right, make it fast — in that order." — Kent Beck

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler

**Keep it simple. Keep it clean. Keep it working.** 🚀
