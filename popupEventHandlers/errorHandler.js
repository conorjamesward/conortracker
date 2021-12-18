export const errorHandler = (errMsg) => {
  const errorMessage = document.getElementById('errorMessage')
  errorMessage.style="display:block"
  
  if(errorMessage.firstChild) errorMessage.removeChild(errorMessage.firstChild)

  const newMessage = document.createTextNode(errMsg)
  errorMessage.appendChild(newMessage)
  
  setTimeout(()=>{
    errorMessage.style="display:none"
  }, 5000)
}