export default () => {
    const header = document.createElement('header');
    const headerHTML = `
<div class="header">
          <h1 class="logo">
              <span>
                  <a href="#/inite">communitytech</a>
              </span>
          </h1>
          <div class="header-right">
              <button class="btn-inite-sesion inite-text" id="buttonLogin">
                  <span>
                      <a href="#/pagIniteSesion">Iniciar Sesión</a>
                  </span>
              </button>
              <button class="btn-register register-text" id="buttonRegister">
              <span>
              <a href="#/pagRegister">Registrar</a>
              </span>
              </button>
              <nav>
              <a href="#/misPosts">Mis Posts</a>
          </div>
    </div>
`;
header.innerHTML= headerHTML;
return header;
}