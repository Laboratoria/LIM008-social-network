const templates = {
  home: ` <div id="paginaIniSesionAndRegistrar">
  <header>
      <div class="header">
          <h1 class="logo">
              <span>
                  <a href="#/home">communitytech</a>
              </span>
          </h1>
          <div class="header-right">
              <button class="btn-inite-sesion inite-text" id="buttonLogin">
                  <span>
                      <a href="#/pagIniteSesion">Iniciar Sesión</a>
                  </span>
              </button>
          </div>
    </div>
  </header>
  <main>
  <h2 class="logo-in-main">communitytech</h2>
  <h3 class="slogan">entérate de lo último en tecnología</h3>
  <div class="ways-of-inite">
    <button id="buttonRegister" class="btn-register"><span><a href="#/pagRegister">Registrate</a></span></button>
    <p>-o-</p>
    <button id="buttonFacebook" class="btn-continue-with-fb">Continuar con Facebook</button>
    <button id="butttonGoogle" class="btn-continue-with-google">Continuar con Google</button>
    <h4 class="final-phrase"> ¡Descubre nuestra comunidad! </h4>
  </div>
  </div>`,
  pagIniteSesion: `
  <div id="open-modal-inite-setion"">
   <header>
      <div class="header">
          <h1 class="logo">
              <span>
                  <a href="#/home">communitytech</a>
              </span>
          </h1>
          <div class="header-right">
          <button id="buttonRegister" class="btn-register"><span><a href="#/pagRegister">Registrate</a></span></button>
                  <span>
                      <a href="#/pagRegister">Registrate</a>
                  </span>
              </button>
          </div>
      </div>
    </header>
   <main>
   <a href="#" title="Close" class="modal-close-inite-sesion">Cerrar</a>
    <form >
     <h2 class="text-center">communitytech</h2>
     <input type="text" id="inputEmail" class="username-o-correo" placeholder="nombre de usuario o correo">
    <input type="password" id="inputPassword" class="password-enter" placeholder="contraseña">
     <h7 class="missed">¿Olvidaste tu cuenta?</h7>
    </form>
   <button id="buttonAcceptLogin" class="btn-inite-sesion"><span><a href="#/post>Iniciar sesión</a></span></button>
   </main>
 </div>`,
  pagRegister: `<div class="pag-register">
  <header>
  <div class="header">
      <h1 class="logo">
          <span>
              <a href="#/home">communitytech</a>
          </span>
      </h1>
      <div class="header-right">
          <button class="btn-inite-sesion inite-text" id="buttonLogin">
              <span>
                  <a href="#/pagIniteSesion">Iniciar sesión</a>
              </span>
          </button>
      </div>
  </div>
</header>
  <a href="#" title="Close" class="modal-close-inite-sesion">Close</a>
  <h2 class="text-center">únete a nuestra comunidad</h2>
  <form>
    <input type="text" id="createUsername" class="username" placeholder="nombre de usuario">
    <input type="text" id="createEmail"  class="correo" placeholder="correo">
    <input type="password" id="createPassword" class="password" placeholder="constraseña">
  </form>
  <button class="btn-register" id="buttonAcceptRegister"><span><a href="#/post">Registrar</a></span></button>
</div>`,
  //     post: `<div id="paginaMuroPrincipalUser">

  //   </div>`,
  different: `<div id="message">
  <h2>404</h2>
  <h1>Página no encontrada</h1>
  <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
</div>`
}

export { templates }