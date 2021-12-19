import {newTaskElementsVisibility} from '../popupEventHandlers/newTaskElementsVisibility.js'
import {addNewTask} from '../popupEventHandlers/addNewTask.js'
import {updateTasks} from './updateTasks.js'
import {themeHandler} from '../eventHandlers/themeHandler.js'

updateTasks()
themeHandler('popup')

//make new task elements visbible when there are no tasks to display
chrome.storage.sync.get('tasks', (current) => {
  if(current.tasks.length === 0){
    chrome.storage.sync.set({'newTaskElementsVisible': true})
    newTaskElementsVisibility(true)
  } else {
    newTaskElementsVisibility(false)
  }
})

document.getElementById("newTaskElementsButton").addEventListener("click", newTaskElementsVisibility)
const addNewTaskButton = document.getElementById("addNewTaskButton")
addNewTaskButton.addEventListener("click", addNewTask)

//enter also adds a task
document.getElementById('newTaskName').addEventListener("keyup", (e) => {
  if(e.code === 'Enter'){
    e.preventDefault()
    addNewTaskButton.click()
  }
})

chrome.storage.onChanged.addListener(() => {
  //watches for a any change in the tasks (like if one is completed)
  updateTasks()
})

//TODO: light/dark theme https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#using-separate-stylesheets
