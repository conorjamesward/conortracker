import { taskElement } from "./taskElement.js"

export const updateTasks = () => {
  chrome.storage.sync.get('tasks', (current) => {
    const tasksElement = document.getElementById('tasks')
    //remove and re-attach tasks. This works for adding, or re-arranging tasks based on the stored array
    Array.from(tasksElement.childNodes).forEach(child => child.remove())

    current.tasks.forEach(task =>{
      tasksElement.appendChild(taskElement(task))
    })
  })
}