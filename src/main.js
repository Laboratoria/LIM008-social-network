import { configBD } from './lib/configBD/configFireBase.js';
import { createUser, logInUser, authenticateFacebook, authenticateGoogle, logOutUser } from './lib/auth/authFireBase.js';

window.onload = () => {
  // INI FIREBASE    
  configBD();

  // INI PAGE
  const buttonLogin = document.getElementById('buttonLogin');
  const buttonLogOut = document.getElementById('buttonLogOut');
  const buttonRegister = document.getElementById('buttonRegister');
  const buttonGoogle = document.getElementById('buttonGoogle');
  const buttonFacebook = document.getElementById('buttonFacebook');

  // Login
  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');
  const buttonAcceptLogin = document.getElementById('buttonAcceptLogin');

  // createUser
  const createUsername = document.getElementById('createUsername');
  const createEmail = document.getElementById('createEmail');
  const createPassword = document.getElementById('createPassword');
  const buttonCreateUser = document.getElementById('buttonAcceptRegister');

  buttonLogOut.style.display = 'none';

  const detectPromises = (funct) => {
    funct
      .then((result) => {
        const objDataUser = {};
        const dataUser = result.user;
        objDataUser.nameUser = dataUser.displayName;
        objDataUser.email = dataUser.email;
        objDataUser.photoUser = dataUser.photoURL;
        console.log(objDataUser);
        return objDataUser;
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.credential);
        alert(err.message !== undefined ? err.message : err.email);
      });
  };

  buttonAcceptLogin.addEventListener('click', () => {
    detectPromises(logInUser(inputEmail.value, inputPassword.value));
    buttonLogin.style.display = 'none';
    buttonLogOut.style.display = 'block';
  });

  // async + await

  buttonLogOut.addEventListener('click', () => {
    logOutUser();
    console.log('usuario fuera de sesion');

    buttonLogin.style.display = 'block';
    buttonLogOut.style.display = 'none';
  });

  buttonCreateUser.addEventListener('click', () => {
    createUser(createEmail.value, createPassword.value)
      .then((result) => {
        alert(`Se te ha enviado un mensaje de correo electronico:${password}
            Por favor de verificarlo para terminar con el proceso! Gracias`);
        const configuracion = {
          url: 'http://localhost:8887/src'
        };
        result.user.sendEmailVerification(configuracion).catch((err) => {
          alert(err.message);
        });
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.credential);
        alert(err.message !== undefined ? err.message : err.email);
      });
  });

  buttonGoogle.addEventListener('click', () => {
    detectPromises(authenticateGoogle());
  });

  buttonFacebook.addEventListener('click', () => {
    detectPromises(authenticateFacebook());
  });
};
