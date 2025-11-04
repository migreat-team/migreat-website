/**
 * Component Loader
 *
 * PURPOSE: Load reusable HTML components into pages
 * USAGE: Called automatically on DOMContentLoaded
 * DEPENDENCIES: None (vanilla JavaScript)
 *
 * RULES:
 * - Simple, no frameworks
 * - Error handling included
 * - Reinitializes icons after loading
 * - No duplicated code
 *
 * UPDATED: 2025-10-31
 */

/**
 * Loads an HTML component file into a container element
 * @param {string} elementId - ID of container element (without #)
 * @param {string} componentPath - Path to component HTML file
 * @returns {Promise<void>}
 */
async function loadComponent(elementId, componentPath) {
    const container = document.getElementById(elementId);

    if (!container) {
        console.warn(`Component container #${elementId} not found`);
        return;
    }

    try {
        const response = await fetch(componentPath);

        if (!response.ok) {
            throw new Error(`Failed to load component: ${componentPath} (${response.status})`);
        }

        const html = await response.text();
        container.innerHTML = html;

        // Reinitialize Alpine.js if it's already loaded
        if (window.Alpine && typeof window.Alpine.initTree === 'function') {
            window.Alpine.initTree(container);
        }

        // Reinitialize Lucide icons after component is loaded
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }

        console.log(`✅ Component loaded: ${componentPath}`);
    } catch (error) {
        console.error(`❌ Error loading component ${componentPath}:`, error);
        // Keep container empty on error (fail gracefully)
    }
}

/**
 * Loads multiple sections in order
 * @param {string} containerId - ID of container element for sections
 * @param {Array<string>} sectionPaths - Array of section file paths
 * @returns {Promise<void>}
 */
async function loadSections(containerId, sectionPaths) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.warn(`Sections container #${containerId} not found`);
        return;
    }

    try {
        // Load all sections in parallel
        const sectionPromises = sectionPaths.map(path =>
            fetch(path).then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load section: ${path} (${response.status})`);
                }
                return response.text();
            })
        );

        const sections = await Promise.all(sectionPromises);

        // Combine all sections into one HTML string
        container.innerHTML = sections.join('\n');

        // Reinitialize Alpine.js if it's already loaded
        if (window.Alpine && typeof window.Alpine.initTree === 'function') {
            window.Alpine.initTree(container);
        }

        // Reinitialize Lucide icons after sections are loaded
        if (window.lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }

        // Reinitialize animation observers for dynamically loaded content
        if (window.animationObserver) {
            // Observe all elements with animation classes in the newly loaded container
            container.querySelectorAll('.fade-in').forEach(el => {
                window.animationObserver.observe(el);
            });

            container.querySelectorAll('.slide-in-left, .slide-in-right').forEach(el => {
                window.animationObserver.observe(el);
            });

            container.querySelectorAll('.scale-in').forEach(el => {
                window.animationObserver.observe(el);
            });

            container.querySelectorAll('.counter').forEach(el => {
                window.animationObserver.observe(el);
            });
        }

        console.log(`✅ Loaded ${sections.length} sections`);
    } catch (error) {
        console.error(`❌ Error loading sections:`, error);
    }
}

/**
 * Loads all standard components for a page
 * Call this in DOMContentLoaded event
 */
function loadStandardComponents() {
    const componentsToLoad = [
        { id: 'nav-container', path: 'components/nav.html' },
        { id: 'footer-container', path: 'components/footer.html' }
    ];

    componentsToLoad.forEach(({ id, path }) => {
        loadComponent(id, path);
    });
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', loadStandardComponents);
