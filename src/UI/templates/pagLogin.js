import { btnAcceptLoginAndSendToHome, getEmailAndSendEmailToRecoverPassword} from '../view-controller.js';

export default () => {
  const container = document.getElementById('container');
  const divContent = `
    <form>
      <h2 class="text-center">communitytech</h2>
      <input type="text" id="inputEmail" class="username-o-correo" placeholder="nombre de usuario o correo">
      <input type="password" id="inputPassword" class="password-enter" placeholder="contraseña">
      <button class="missed" id="missedPassword">¿Olvidaste tu contraseña?</button>
      <button id="buttonAcceptLogin" class="btn-inite-sesion">Iniciar sesion</button>
    </form>
    `;
  container.innerHTML = divContent;

  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');
  const buttonAcceptLogin = document.getElementById('buttonAcceptLogin');
  const buttonMissedPassword = document.getElementById('missedPassword');
  getEmailAndSendEmailToRecoverPassword(inputEmail, buttonMissedPassword);
  btnAcceptLoginAndSendToHome(inputEmail, inputPassword, buttonAcceptLogin);
  // selecccionando elementos del DOM
  return 1;
};
