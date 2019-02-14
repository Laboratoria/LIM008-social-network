import {registerOnSubmit, accesWithFbOrGoogle, loginUser} from '../view-controller.js';

export default () => {
  const container = document.getElementById('container');
  const divContent = `
    <h2 class="logo-in-main">communitytech</h2>
    <div class="header-right">
      <button class="btn-inite-sesion inite-text" id="buttonLogin">Iniciar session</button>
    </div>
    <h3 class="slogan">entérate de lo último en tecnología</h3>
    <div class="ways-of-inite">
      <button id="buttonRegister" class="btn-register">Registrate</button>
      <p>-o-</p>
      <button id="buttonFacebook" class="btn-continue-with-fb">Continuar con Facebook</button>
      <button id="buttonGoogle" class="btn-continue-with-google">Continuar con Google</button>
      <h4 class="final-phrase"> ¡Descubre nuestra comunidad! </h4>
    </div>
` ;
  container.innerHTML = divContent;
  // Login
  const buttonLogin = document.getElementById('buttonLogin');

  // Registrar a usuario
  const buttonRegister = document.getElementById('buttonRegister');

  // Login Facebook and Google
  const buttonFacebook = document.getElementById('buttonFacebook');
  const buttonGoogle = document.getElementById('buttonGoogle');


  loginUser(buttonLogin);
  registerOnSubmit(buttonRegister);
  accesWithFbOrGoogle(buttonFacebook, buttonGoogle);

  return 1;
};  
