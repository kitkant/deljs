const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector('.button-auth'),
    modalAuth = document.querySelector('.modal-auth'),
    closeAuth = document.querySelector('.close-auth'),
    logInForm = document.querySelector('#logInForm'),
    logInInput = document.querySelector('#login')


let login = ''

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open')
}

//слушатель события


function authorized() {
  console.log('Авторизован')

}

function notAuthorized() {
  console.log('Не авторизован')
  function logIn(event) {
  event.preventDefault();
  login = logInInput.value
    toogleModalAuth()
  }

  buttonAuth.addEventListener('click',  toogleModalAuth)
  closeAuth.addEventListener('click', toogleModalAuth)
  logInForm.addEventListener('submit', logIn)
}

if(login){
  authorized()
} else {
  notAuthorized()
}