import { logInUser } from '../lib/auth/logInUser.js';

const changeHash = (hash) => {
 location.hash= hash;
}
export const logInOnSubmit = () => {
  event.preventDefault();
  const currentEmail = document.querySelector('#inputEmail').value;
  const currentPassword = document.querySelector('#inputPassword').value;
  logInUser(currentEmail,currentPassword)
  .then(() => changeHash(''))
}