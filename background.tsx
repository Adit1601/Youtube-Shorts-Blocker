// Fix: Declare chrome as a global variable to fix TypeScript errors related to missing type definitions for the chrome extension API.
declare const chrome: any;

// This script runs in the background of the browser.
// It listens for updates to any tab.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Check if the tab's URL is a YouTube Shorts URL.
  if (tab.url && tab.url.includes("youtube.com/shorts/")) {
    // If it is, redirect the tab to the YouTube homepage.
    chrome.tabs.update(tabId, { url: "https://www.youtube.com" });
  }
});
