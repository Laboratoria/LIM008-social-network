import { registerOnSubmit } from '../view-controller.js';

export default () => {
  const div = document.createElement('div');
  const divContent = `
  <h2 class="text-center">únete a nuestra comunidad</h2>
  <form>
    <input type="text" id="createUsername" class="username" placeholder="nombre de usuario">
    <input type="text" id="createEmail"  class="correo" placeholder="correo">
    <input type="password" id="createPassword" class="password" placeholder="constraseña">
    <button class="btn-register" id="buttonAcceptRegister">
    <span>
    <a href="#/post">
    Registrar
    </a>
    </span>
    </button>
  </form>
</div>`;
  div.innerHTML = divContent;
  // capturando acciones del DOM
  const btnRegister = document.querySelector('#buttonAcceptRegister');
  btnRegister.addEventListener('click', registerOnSubmit);
  return div;
};