import { logInOnSubmit } from "../view-controller.js";

export default () => {
    const div = document.createElement('div');
    const divContent = `
     <form >
    <h2 class="text-center">communitytech</h2>
    <input type="text" id="inputEmail" class="username-o-correo" placeholder="nombre de usuario o correo">
    <input type="password" id="inputPassword" class="password-enter" placeholder="contraseña">
    <h7 class="missed">¿Olvidaste tu cuenta?</h7>
    <button id="buttonAcceptLogin" class="btn-inite-sesion"><span><a href="#/home>Iniciar sesión</a></span></button>
  </form>
    `;
        div.innerHTML = divContent;
      // selecccionando elementos del DOM
      //capturando valor del email y password para realizar la función logInUser
     
    const btnSignIn = div.querySelector('#buttonAcceptLogin');
    btnSignIn.addEventListener('click', logInOnSubmit);
    return div;
  }