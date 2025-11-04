# Resource Paths Reference

**Purpose**: Quick reference for all resource paths in the MiGreat website
**Updated**: 2025-10-31
**Status**: All paths verified and working ✅

---

## 📁 File Structure

```
migreat-website/
├── assets/
│   ├── css/
│   │   ├── animations.css
│   │   ├── carousel.css
│   │   └── mobile-only.css
│   ├── images/
│   │   ├── favicon.ico           ⭐ Favicon location
│   │   ├── logo.png              ⭐ Main logo
│   │   └── [testimonial photos]
│   ├── js/
│   │   ├── component-loader.js   ⭐ Component loader
│   │   ├── sections.js
│   │   └── animations.js
│   └── json/
│       ├── anabin-data.json      ⭐ Institution data
│       └── degrees-data.json     ⭐ Degree data
├── templates/
│   ├── components/
│   │   ├── nav.html              ⭐ Navigation component
│   │   └── footer.html           ⭐ Footer component
│   ├── index.html                ⭐ Homepage
│   ├── degree-check.html         ⭐ Degree checker
│   ├── visa-check.html           ⭐ Visa checker
│   └── contact.html              ⭐ Contact page
└── docs/
    └── [markdown documentation]
```

---

## 🔗 Resource Paths by Type

### Favicon
```html
<!-- All HTML pages -->
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
```

### CSS Files
```html
<!-- Only index.html needs these -->
<link rel="stylesheet" href="assets/css/animations.css">
<link rel="stylesheet" href="assets/css/mobile-only.css">
<link rel="stylesheet" href="assets/css/carousel.css">
```

### JavaScript Files
```html
<!-- Component loader (all pages) -->
<script src="assets/js/component-loader.js"></script>

<!-- Page-specific (index.html) -->
<script src="assets/js/sections.js"></script>
<script src="assets/js/animations.js"></script>
```

### Components
```javascript
// In component-loader.js
{ id: 'nav-container', path: 'templates/components/nav.html' }
{ id: 'footer-container', path: 'templates/components/footer.html' }
```

### Images
```html
<!-- Logo in nav component -->
<img src="assets/images/logo.png" alt="MiGreat Germany">

<!-- Testimonial photos in sections.js -->
<img src="assets/images/priya-sharma-new.jpg" alt="...">
<img src="assets/images/akosua-mensah-new.jpg" alt="...">
<img src="assets/images/chidinma-okafor-new.jpg" alt="...">
<img src="assets/images/wanjiru-kamau-new.jpg" alt="...">
```

### JSON Data
```javascript
// In degree-check.html
fetch('assets/json/anabin-data.json')
fetch('assets/json/degrees-data.json')
```

---

## 📄 Path Reference by Page

### index.html
```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
<link rel="stylesheet" href="assets/css/animations.css">
<link rel="stylesheet" href="assets/css/mobile-only.css">
<link rel="stylesheet" href="assets/css/carousel.css">
<script src="assets/js/component-loader.js"></script>
<script src="assets/js/sections.js"></script>
<script src="assets/js/animations.js"></script>
```

### degree-check.html
```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
<script src="assets/js/component-loader.js"></script>

<!-- In JavaScript -->
fetch('assets/json/anabin-data.json')
fetch('assets/json/degrees-data.json')
```

### visa-check.html
```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
<script src="assets/js/component-loader.js"></script>
```

### contact.html
```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
<script src="assets/js/component-loader.js"></script>
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

All resources verified working at:
- **Local Server**: http://localhost:8081/templates/index.html

### Checked Resources
- ✅ `templates/components/nav.html` - 200 OK
- ✅ `templates/components/footer.html` - 200 OK
- ✅ `assets/images/favicon.ico` - 200 OK
- ✅ `assets/images/logo.png` - 200 OK
- ✅ `assets/css/mobile-only.css` - 200 OK
- ✅ `assets/js/component-loader.js` - 200 OK
- ✅ `assets/json/anabin-data.json` - 200 OK
- ✅ `assets/json/degrees-data.json` - 200 OK

---

## 🔧 Common Issues & Solutions

### Issue: Components not loading
**Solution**: Check that component-loader.js has correct paths:
```javascript
{ id: 'nav-container', path: 'templates/components/nav.html' }
```

### Issue: Images not showing
**Solution**: All images must use `assets/images/` prefix:
```html
<img src="assets/images/logo.png">
```

### Issue: CSS not applying
**Solution**: Ensure CSS files use `assets/css/` prefix:
```html
<link rel="stylesheet" href="assets/css/mobile-only.css">
```

### Issue: Degree checker data not loading
**Solution**: Ensure JSON paths use `assets/json/` prefix:
```javascript
fetch('assets/json/anabin-data.json')
```

### Issue: Favicon not showing
**Solution**: All pages must reference:
```html
<link rel="icon" type="image/x-icon" href="assets/images/favicon.ico">
```

---

## 🚀 Deployment Notes

When deploying, ensure:
1. All paths are **relative** (no leading `/`)
2. File structure is preserved exactly as shown above
3. All files are uploaded to correct directories
4. Server has correct MIME types configured:
   - `.json` → `application/json`
   - `.css` → `text/css`
   - `.js` → `text/javascript`
   - `.html` → `text/html`

---

## 📝 Path Pattern Rules

Following `docs/RULES.md` standards:

1. **All paths are relative** (no absolute paths like `/assets/`)
2. **Assets organized by type**:
   - CSS → `assets/css/`
   - JS → `assets/js/`
   - Images → `assets/images/`
   - JSON → `assets/json/`
3. **Components in dedicated folder**: `templates/components/`
4. **Templates in root**: `templates/`
5. **Documentation separate**: `docs/`

---

**Last Verified**: 2025-10-31
**All Resources**: ✅ Working
**Server**: http://localhost:8081/templates/index.html
