import { themeHandler } from "../eventHandlers/themeHandler.js";
import { setTheme } from '../optionsEventHandlers/setTheme.js'

themeHandler('options')

document.getElementById("switch").addEventListener('click', setTheme)

chrome.storage.onChanged.addListener(() => {
  themeHandler('options')
})