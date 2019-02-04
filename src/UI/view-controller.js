import { logInUser } from '../lib/auth/logInUser.js';
import { createUser } from '../lib/auth/createUser.js';
import { authenticateFacebook, authenticateGoogle} from '../../src/lib/auth/authenticateFaceGoogle.js'

const changeHash = (hash) => {
  location.hash = hash;
}

const logInOnSubmit = () => {
  event.preventDefault();
  const currentEmail = document.querySelector('#inputEmail').value;
  const currentPassword = document.querySelector('#inputPassword').value;
  logInUser(currentEmail, currentPassword)
    .then(() => changeHash('/home'))
    .catch(() => { })
}

const registerOnSubmit = () => {
  event.preventDefault();
  const emailForCreateNewUser = document.querySelector('#createEmail').value;
  const passwordForCreateNewUser = document.querySelector('#createPassword').value;
  createUser(emailForCreateNewUser, passwordForCreateNewUser)
    .then(() => {
      alert(`Se te ha enviado un mensaje de correo electronico:${password}
      Por favor de verificarlo para terminar con el proceso! Gracias`);
    const configuracion = {
      url: 'http://localhost:8887/src'
    };
    result.user.sendEmailVerification(configuracion).catch((err) => {
      alert(err.message);
    });      
    changeHash('/home') })
    .catch((err) => {
      console.log(err.message);
     })
}

export const accesWithFbOrGoogle = () => {
  const buttonFacebook = document.querySelector('#buttonFacebook');
  const butttonGoogle = document.querySelector('#buttonGoogle');

  buttonFacebook.addEventListener('click', authenticateFacebook);
  butttonGoogle.addEventListener('click', authenticateGoogle);
}

export const btnAcceptRegisterAndSendToHome = () => {
  const btnRegister = document.querySelector('#buttonAcceptRegister');
  btnRegister.addEventListener('click', registerOnSubmit);
}

export const btnAcceptLoginAndSendToHome = () => {
  const btnSignIn = div.querySelector('#buttonAcceptLogin');
  btnSignIn.addEventListener('click', logInOnSubmit);
}