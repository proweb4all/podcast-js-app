import { isValid, createModal } from './utils'
import { Question } from './question'
import { getAuthForm, authWithEmailAndPassword } from './auth'
import './style.css'

const form = document.getElementById('form')
const input = form.querySelector('#question-input')
const button = form.querySelector('#submit')
const modalBtn = document.getElementById('modal-btn')

window.addEventListener('load', Question.renderList())
form.addEventListener('submit', onSubmitForm)
modalBtn.addEventListener('click', openModal)
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

function openModal() {
  createModal('Авторизация', getAuthForm())
  document
    .getElementById('auth-form')
    .addEventListener('submit', authFormHandler, {once: true})
}

function authFormHandler(event) {
  event.preventDefault()
  const email = event.target.querySelector('#email').value
  const password = event.target.querySelector('#password').value
  authWithEmailAndPassword(email, password)
    .then(token => {
      
    })
}