chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({'tasks': []})
  chrome.storage.sync.set({'newTaskElementsVisibile': false})
  chrome.storage.sync.set({'theme':'light'})
})