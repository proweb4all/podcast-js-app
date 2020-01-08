import { isValid } from './utils'
import { Question } from './question'
import './style.css'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const button = form.querySelector('#submit')

window.addEventListener('load', Question.renderList())
form.addEventListener('submit', onSubmitForm)
input.addEventListener('input', () => button.disabled = !isValid(input.value)) 

function onSubmitForm(e) {
  e.preventDefault()
  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    }
    console.log(question);
    button.disabled = true
    // Запрос на сохранение вопроса
    Question.create(question).then(() => {
      input.value = ''
      input.classList = ''
    })
    // button.disabled = false
  }
}

console.log('App.js')
