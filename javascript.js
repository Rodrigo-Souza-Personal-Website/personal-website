
function confirmation(){
    let pick = confirm("You are about to leave page, would you like to continue?");
    if(!pick) {
        return false
    }
}

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})