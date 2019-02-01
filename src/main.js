import { myFunction } from './lib/index.js';
import { configBD } from './lib/configBD/configFireBase.js';
import { logOutUser } from './lib/auth/logOutUser.js';
import { logInUser } from './lib/auth/logInUser.js';
import { createUser } from './lib/auth/createUser.js';
import { authenticateFacebook , authenticateGoogle } from './lib/auth/authenticateFaceGoogle.js';


window.onload = () => {
    // INI FIREBASE    
    configBD();

    //INI PAGE
    const buttonLogin = document.getElementById('buttonLogin');
    const buttonLogOut = document.getElementById('buttonLogOut');
    const buttonRegister = document.getElementById('buttonRegister');
    const buttonGoogle = document.getElementById('buttonGoogle');
    const buttonFacebook = document.getElementById('buttonFacebook');

    //Login
    const inputEmail= document.getElementById('inputEmail');
    const inputPassword = document.getElementById('inputPassword');
    const buttonAcceptLogin = document.getElementById('buttonAcceptLogin');

    //createUser
    const createUsername = document.getElementById('createUsername');
    const createEmail = document.getElementById('createEmail');
    const createPassword= document.getElementById('createPassword');
    const buttonCreateUser = document.getElementById('buttonAcceptRegister');

    buttonLogOut.style.display = 'none';

    buttonAcceptLogin.addEventListener('click', () => {
        const saveobj = logInUser(inputEmail.value, inputPassword.value);
        console.log(saveobj);
        buttonLogin.style.display = 'none';
        buttonLogOut.style.display = 'block';
    });

    buttonLogOut.addEventListener('click', () => {
        logOutUser();
        buttonLogin.style.display = 'block';
        buttonLogOut.style.display = 'none';
    });

    buttonCreateUser.addEventListener('click', () => {
        createUser(createEmail.value, createPassword.value);
    });

    buttonGoogle.addEventListener('click', () => {
        const saveobj = authenticateGoogle();
        console.log(saveobj);
    });

    buttonFacebook.addEventListener('click', () => {
        const saveobj = authenticateFacebook();
        console.log(saveobj);
    });
}
