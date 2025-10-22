const HIDE_SHORTS_STYLE_ID = 'hide-shorts-style';

// This function creates and injects a style sheet to hide Shorts elements.
// Using a CSS-in-JS approach is more performant than constantly querying the DOM.
const injectCss = () => {
  if (document.getElementById(HIDE_SHORTS_STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = HIDE_SHORTS_STYLE_ID;
  style.textContent = `
    /* Hide Shorts link in the main navigation menu */
    ytd-guide-entry-renderer a[href="/shorts"],
    ytd-mini-guide-entry-renderer[aria-label="Shorts"] {
      display: none !important;
    }

    /* Hide Shorts sections on the homepage and other feeds */
    ytd-rich-section-renderer:has(ytd-rich-shelf-renderer[is-shorts]),
    [is-shorts] {
      display: none !important;
    }

    /* Hide the "Shorts" tab on channel pages */
     yt-tab-shape[tab-title="Shorts"] {
        display: none !important;
     }
  `;
  document.head.appendChild(style);
};

// Initial injection
injectCss();

// YouTube is a Single Page App (SPA), so content changes without full page reloads.
// We use a MutationObserver to ensure our styles are always present,
// especially if the <head> is ever re-rendered.
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    // If the head's children change and our style is gone, re-inject it.
    if (mutation.target === document.head) {
       if (!document.getElementById(HIDE_SHORTS_STYLE_ID)) {
          injectCss();
       }
    }
  }
});

// Start observing the document head for changes.
observer.observe(document.head, { childList: true });

// Also observe the whole body for subtree mutations, as a fallback for dynamic content loading.
const bodyObserver = new MutationObserver(injectCss);
bodyObserver.observe(document.body, { childList: true, subtree: true });

// Fix: Convert the file into a module to scope its variables and prevent redeclaration errors.
export {};
