import { errorHandler } from "./errorHandler.js"

export const addNewTask = () => {
  chrome.storage.sync.get('tasks', (current) => {
    const newTask = document.getElementById("newTaskName")
    if(newTaskName.value.length === 0){
      errorHandler('no task name')
    } else if(current.tasks.find(task => task === newTask.value)) {
      errorHandler('task already exists')
    } else {
      let updated = current
      updated.tasks.push(newTask.value)
      chrome.storage.sync.set({'tasks':updated.tasks})
    }
    newTask.value = ''
  })
}