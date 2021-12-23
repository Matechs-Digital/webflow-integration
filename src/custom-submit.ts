const submit = document.getElementById("custom-form-submit")
const username = document.getElementById("custom-form-username")
const password = document.getElementById("custom-form-password")

const events = ["submit", "click"]

if (submit && username && password) {
  events.forEach((ev) => {
    submit.addEventListener(
      ev,
      (event) => {
        event.preventDefault()
        alert(
          `Hello: ${(username as HTMLInputElement).value} (${
            (password as HTMLInputElement).value
          })`
        )
      },
      false
    )
  })
}
