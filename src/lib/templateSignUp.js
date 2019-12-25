import { signUpOnSubmit } from './view-controller.js';

export const pageSignUp = () => {
    const formElemt2 = document.createElement('form');
    const template = `
                        <img src="imgs/mini-logo.png" alt="pets">
                        <div class="inputs-buttons">
                              <h2>Crea tu cuenta</h2>
                              <input class= "space" id="name" type="text" placeholder="Elige tu usuario" required>
                              <input class= "space" id="email" type="email" placeholder="Ingresa e-mail" required>
                              <input class= "space" id="password" type="password" placeholder="Ingresa contraseña" required>
                              <div id="message2"><P>No se ingreso usuario, e-mail o contraseña</P></div>
                              <button class="button sign-post-btn color-white space" id="btn-sign-up">Registrar</button>
                        </div>
                  `;
    
      formElemt2.classList.add('register')
      formElemt2.innerHTML = template;
      const btnRegister = formElemt2.querySelector('#btn-sign-up');
      btnRegister.addEventListener( 'click', () => {
      signUpOnSubmit()});
      return formElemt2;
};