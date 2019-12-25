import { signInOnSubmit, signInWithGoogle } from './view-controller.js';

export const pageSignIn = () => {
    const formElem = document.createElement('div');
    const formSignIn = `
                        <img class="logo" src="imgs/Logo.png" alt="pets">
                        <section class="inputs-buttons-img">
                        <div class="inputs-buttons">
                            <input class= "space" id="email2" type="email" placeholder="Correo electrónico" required>
                            <input class= "space" id="password2" type="password" placeholder="Contraseña" required>
                            <div id="message"><P>Usuario o contraseña incorrectos</P></div>
                            <button class="button sign-post-btn space color-white" id= "btn-log-in">Iniciar sesión</button>
                            <button class="button google space" id= "google-button"><img src="imgs/google-logo.png" alt="Google">Iniciar sesión con Google</button>
                        </div>
                        <div class="pets-signup">
                            <img class="pets" src="imgs/pets.png" alt="pets">
                            <p>¿No tienes cuenta? <a id="registrate" href="#/signup">Regístrate</a></p>  
                        </div>
                        </section>
                    `;
    
    formElem.classList.add('login')
    formElem.innerHTML = formSignIn;
    const btnSignIn = formElem.querySelector('#btn-log-in');
    const btnSignInWithGoogle = formElem.querySelector('#google-button');
    btnSignIn.addEventListener( 'click', () => {
        signInOnSubmit()});
    btnSignInWithGoogle.addEventListener( 'click', () => {
        signInWithGoogle()});
     return formElem; 
  };
