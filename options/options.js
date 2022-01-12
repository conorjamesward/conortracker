import { themeHandler } from "../eventHandlers/themeHandler.js";
import { setTheme } from '../optionsEventHandlers/setTheme.js'

themeHandler('options')

document.getElementById("switch").addEventListener('click', setTheme)

chrome.storage.sync.get('theme', (current) => {
  document.getElementById(current.theme).checked = true
})

chrome.storage.onChanged.addListener(() => {
  themeHandler('options')
})