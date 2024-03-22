import { modal } from "./modal.js"
import { AlertError } from "./alert-error.js"

// Variables

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnClose = document.querySelector(".modal button.close")

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  // modalWrapper.classList.add("open")
  modal.open()
}

function notANumber(value) {
  return isNaN(value) || value == ""
}

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}
