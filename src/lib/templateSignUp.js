<<<<<<< HEAD
import { signUp } from './firebase.js';

export const pageSignUp = () => {
    const template = `<form class="register">
                      <img src="imgs/logo.png" alt="pets">
                      <input class= "space" id="usser" type="text" placeholder="Elige tu usuario" required>
                      <input class= "space" id="email" type="email" placeholder="Ingresa e-mail" required>
                      <input class= "space" id="password" type="password" placeholder="Ingresa contraseña" required>
                      <div id="message2"><P>No se ingreso usuario, e-mail o contraseña</P></div>
                      <button class="button space" id= "btn-sign-up">Registrar</button>
                      <img src="imgs/pets.png" alt="pets">
                      </form>`
    const element2 = document.createElement('div');
    element2.innerHTML = template;

    element2 
     .querySelector('#btn-sign-up')
     .addEventListener('click', event => {
           event.preventDefault();
          const email = document.querySelector("#email").value;
          const password = document.querySelector("#password").value;
            signUp(email, password);
         });

      return element2;
=======
import { signUpOnSubmit } from './view-controller.js';

export const pageSignUp = () => {
    const formElemt2 = document.createElement('form');
    const template = `<form class="register">
                        <img src="imgs/mini-logo.png" alt="pets">
                        <div class="inputs-buttons">
                              <h2>Crea tu cuenta</h2>
                              <input class= "space" id="usser" type="text" placeholder="Elige tu usuario" required>
                              <input class= "space" id="email" type="email" placeholder="Ingresa e-mail" required>
                              <input class= "space" id="password" type="password" placeholder="Ingresa contraseña" required>
                              <div id="message2"><P>No se ingreso usuario, e-mail o contraseña</P></div>
                              <button class="button space" id= "btn-sign-up">Registrar</button>
                        </div>
                  </form>`
    
      formElemt2.classList.add('register')
      formElemt2.innerHTML = template;
      const btnRegister = formElemt2.querySelector('#btn-sign-up');
      btnRegister.addEventListener( 'click', e => {
      e.preventDefault();
      signUpOnSubmit()});
      return formElemt2;
>>>>>>> 4bcdf4163204e3badc7653a6ed5b541701a65cf5
};