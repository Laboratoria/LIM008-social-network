import { signInOnSubmit, showUp, signGoogle, signFacebook } from '../lib/view-controller.js';
export default () => {
  const form = document.createElement('form');
  const formContent = `
  <div class="container">
  <div class="minimal-body">
    <div class="login-form gr27e">
      
      <div class="heading">
        <img id="logo" src="img/ecohack-logo.png">
      </div>
  
        
      <input id="in-email" type="email" placeholder="Correo electrónico" name="email" required>
      <input id="in-password" type="password" placeholder="Contraseña" name="psw" required>
      <button type="button" id = "btnSignIn" class="btn-sign">Iniciar sesión</button>
      
      <div class="center">---------------- o ----------------</div>
         
      <button type="button" id ="btn-google" class="google"><i class="fa fa-google fa-fw"></i>Iniciar sesión con  Google</button>
      <button type="button" id ="btn-facebook" class="facebook"><i class="fa fa-facebook fa-fw"></i>Iniciar sesión con  Facebook</button>
              
    </div> 
  
      <div class="contenxt-switch gr27e">
        <p class="izU2O">¿No tienes una cuenta? <a id="a-signUp">Regístrate</a></p>
      </div>
    
    </div>
  </div>
  `;
  form.innerHTML = formContent;
  
  const btnSignIn = form.querySelector('#btnSignIn');
  btnSignIn.addEventListener('click', signInOnSubmit);
  
  const enlace2 = form.querySelector('#a-signUp');
  enlace2.addEventListener('click', showUp);

  const btnGoogle = form.querySelector('#btn-google');
  btnGoogle.addEventListener('click', signGoogle);

  const btnFacebook = form.querySelector('#btn-facebook');
  btnFacebook.addEventListener('click', signFacebook);
  return form;
};
