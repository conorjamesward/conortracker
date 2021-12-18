export const completeTask = (e) => {
  const taskID = e.target.id.slice(0, e.target.id.length - 8)
  chrome.storage.sync.get('tasks', (current) => {
    const updatedTasks = current.tasks.filter(task => task !== taskID)

    const outerSwitch = document.getElementById(`${taskID}Switch`)
    const innerSwitch = document.getElementById(`${taskID}Slider`)

    outerSwitch.style="background-color: #5C5C5C"
    innerSwitch.style="transform: translateX(1.2em)"

    setTimeout(()=>{
      chrome.storage.sync.set({'tasks': updatedTasks})
    }, 300)
  })

}