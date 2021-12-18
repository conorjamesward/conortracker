export const setTheme = () => {
  chrome.storage.sync.get('theme', (current) => {
    let newTheme = ''
    if(current.theme === 'light'){
      newTheme = 'dark'
    } else newTheme = 'light'
    chrome.storage.sync.set({'theme':newTheme})
  })
}