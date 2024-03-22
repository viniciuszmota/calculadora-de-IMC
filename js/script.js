import { modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notANumber } from "./utils.js"

// Variables

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

// const modalWrapper = document.querySelector(".modal-wrapper")
// const modalMessage = document.querySelector(".modal .title span")
// const modalBtnClose = document.querySelector(".modal button.close")

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  // modalWrapper.classList.add("open")
  modal.open()
}
