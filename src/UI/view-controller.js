import { logInUser } from '../lib/auth/logInUser.js';
import { createUser } from '../lib/auth/createUser.js';

const changeHash = (hash) => {
 location.hash= hash;
}
export const logInOnSubmit = () => {
  event.preventDefault();
  const currentEmail = document.querySelector('#inputEmail').value;
  const currentPassword = document.querySelector('#inputPassword').value;
  logInUser(currentEmail,currentPassword)
  .then(() => changeHash('/home'))
  .catch(() => {})
}

export const registerOnSubmit = () => {
  event.preventDefault();
  const emailForCreateNewUser = document.querySelector('#createEmail').value;
  const passwordForCreateNewUser = document.querySelector('#createPassword').value;
  createUser(emailForCreateNewUser, passwordForCreateNewUser)
  .then(() => changeHash('home'))
  .catch(() => {})
}