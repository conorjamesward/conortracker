import {completeTask} from '../popupEventHandlers/completeTask.js'
export const taskElement = (task) => {

  const newTaskElement = document.createElement('div')
  newTaskElement.className = 'task'
  const taskLabel = document.createTextNode(task)
  newTaskElement.appendChild(taskLabel)

  const outerSwitch = document.createElement('label')
  outerSwitch.className="switch"
  outerSwitch.id=`${task}Switch`

  const innerSwitch = document.createElement('span')
  innerSwitch.className="slider"
  innerSwitch.id=`${task}Slider`

  const taskCheckBox = document.createElement('input')
  taskCheckBox.type = "checkbox"
  taskCheckBox.name = "completeTask"
  taskCheckBox.className = "switch"
  taskCheckBox.id = `${task}CheckBox`

  newTaskElement.appendChild(outerSwitch)
  outerSwitch.appendChild(innerSwitch)
  outerSwitch.appendChild(taskCheckBox)
  
  taskCheckBox.addEventListener('change', completeTask)
  
  return newTaskElement
}