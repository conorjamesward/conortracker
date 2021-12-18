export const newTaskElementsVisibility = (e) => {
  const newTaskElements = document.getElementById('newTaskElements')
  const visibilityButton = document.getElementById('newTaskElementsButton')
  chrome.storage.sync.get('newTaskElementsVisibile', (current) => {
    //invert selection because that is being changed, e makes sure the event is comming from the button, not the window opening - the default should be no display
    if(current.newTaskElementsVisibile && e){
      newTaskElements.style="display:block"

      const minimize = document.createTextNode("-")

      visibilityButton.removeChild(visibilityButton.firstChild)
      visibilityButton.appendChild(minimize)

      document.getElementById("newTaskName").focus()
    } else {
      newTaskElements.style="display:none"

      const maximize = document.createTextNode("+")
      
      visibilityButton.removeChild(visibilityButton.firstChild)
      visibilityButton.appendChild(maximize)
    }
    //new selection
    chrome.storage.sync.set(
      {'newTaskElementsVisibile': 
      !current.newTaskElementsVisibile})
  })

}