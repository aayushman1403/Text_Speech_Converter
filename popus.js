let enabled = true;

document.getElementById("toggle").addEventListener("click", () => {
    enabled = !enabled;
    chrome.storage.local.set({ enabled });
});

chrome.storage.local.get("enabled", (data) => {
    enabled = data.enabled ?? true;
});
