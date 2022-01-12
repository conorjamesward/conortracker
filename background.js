chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({'tasks': []})
  chrome.storage.sync.set({'newTaskElementsVisible': false})
  chrome.storage.sync.set({'theme':'dark'})
})