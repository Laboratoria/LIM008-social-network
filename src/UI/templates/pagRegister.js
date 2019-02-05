export default () => {
  const div = document.createElement('div');
  const divContent = `
  <h2 class="text-center">únete a nuestra comunidad</h2>
  <form class="form-register">
    <input type="text" id="createUsername" class="input-username" placeholder="nombre de usuario">
    <input type="text" id="createEmail"  class="input-correo" placeholder="correo">
    <input type="password" id="createPassword" class="input-password" placeholder="constraseña">
    <button class="btn-register" id="buttonAcceptRegister">
    Registrar
    </button>
  </form>
</div>`;
    div.innerHTML = divContent;
    return div;
}
