export const themeHandler = (currentFile) => {
  const theme = document.getElementById("theme")
  chrome.storage.sync.get('theme', (current) => {
    if(current.theme === 'dark'){
      theme.href=`${currentFile}-dark.css`
    }
  })
}