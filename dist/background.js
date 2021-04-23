chrome.webNavigation.onCommitted.addListener(function (tab) {
    chrome.scripting.insertCSS({ files: ['/css/darkstrava.min.css'], target: { tabId: tab.tabId } });
});