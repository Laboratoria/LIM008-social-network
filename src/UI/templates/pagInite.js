import { authenticateFacebook, authenticateGoogle } from '../../lib/auth/authenticateFaceGoogle.js';

export default () => {
  const div = document.createElement('div');
  const divContent = `
    <h2 class="logo-in-main">communitytech</h2>
  <h3 class="slogan">entérate de lo último en tecnología</h3>
  <div class="ways-of-inite">
    <button id="buttonRegister" class="btn-register"><span><a href="#/pagRegister">Registrate</a></span></button>
    <p>-o-</p>
    <button id="buttonFacebook" class="btn-continue-with-fb">Continuar con Facebook</button>
    <button id="butttonGoogle" class="btn-continue-with-google">Continuar con Google</button>
    <h4 class="final-phrase"> ¡Descubre nuestra comunidad! </h4>
  </div>
  </div>
` ;
  div.innerHTML = divContent;

  // dom de los botones continuar con Facebook y Google
  const buttonFacebook = document.querySelector('#buttonFacebook');
  const butttonGoogle = document.querySelector('buttonGoogle');

  buttonFacebook.addEventListener('click', authenticateFacebook);
  butttonGoogle.addEventListener('click', authenticateGoogle);
  return div;
};  