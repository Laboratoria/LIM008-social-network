// import { logInUser } from '../lib/auth/logInUser.js';

import { createUser, authenticateFacebook, authenticateGoogle, logInUser, logOutUser} 
  from '../lib/authBD/authFireBase.js';

import { createUserFireStore, readUserFireStore, updateUserFireStore, deleteUserFireStore}
  from '../lib/crudBD/crudUser/crudUser.js';

const changeHash = (hash) => {
  location.hash = hash;
};
  
export const statusUserController = () => {
  let state;
  let i = 0;
  const buttonLogOut = document.getElementById('buttonLogOut');
  // Eliminar usuario por completo de la BD
  const buttonDeleteUser = document.getElementById('buttonDeleteUser');

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      state = true;

      buttonLogOut.addEventListener('click', () => {
        logOutUser()
          .then((result) => {
            console.log('Usuario fuera de session');
            changeHash('/inite') ;
          })
          .catch((err) => {
            console.log(err.message);
          }); 
      });

      buttonDeleteUser.addEventListener('click', () => {
        if (firebase.auth().currentUser.email) {
          deleteUserFireStore('Users', firebase.auth().currentUser.email);
          changeHash('/inite') ;
        }
      });
    } else {
      i++;
      console.log('Usuario desconectado: ' + i);
      state = false;
    }
  });
  return state;
};

const detectPromisesCreateUser = (funct) => {
  funct
    .then((result) => {
      readUserFireStore('Users', result.user.email)
        .then((respDoc) => {
          if (respDoc.data() === undefined) {
            console.log('No encontro documento');
            const objDataUser = {};
            const dataUser = result.user;
            objDataUser.correo = dataUser.email;
            objDataUser.usuario = dataUser.displayName;
            objDataUser.foto = dataUser.photoURL;
            
            console.log(objDataUser);
            
            Object.keys(objDataUser).forEach((ele) => {
              createUserFireStore('Users', objDataUser.correo, ele, objDataUser[ele])
                .then(() => console.log('documento se escribio correctamente'))
                .catch(() => console.log(err.message));                
            }); 
          } else console.log('Usuario ya existe en la BD');
        })
        .catch((err) => {
          console.log(err.message);
        });
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.credential);
      console.log('cayo en error: detectPromisesCreateUser');
      
      alert(err.message !== undefined ? err.message : err.email);
    });
};


// const logInOnSubmit = () => {
//   event.preventDefault();
//   const currentEmail = document.querySelector('#inputEmail').value;
//   const currentPassword = document.querySelector('#inputPassword').value;
//   logInUser(currentEmail, currentPassword)
//     .then(() => changeHash('/home'))
//     .catch(() => { })
// }

const registerOnSubmit = () => {
  event.preventDefault();
  const usernameForCreateNewUser = document.querySelector('#createUsername').value; 
  const emailForCreateNewUser = document.querySelector('#createEmail').value;
  const passwordForCreateNewUser = document.querySelector('#createPassword').value;
  createUser(emailForCreateNewUser, passwordForCreateNewUser)
    .then((result) => {
      const objctCreate = {
        Usuario: usernameForCreateNewUser,
        Correo: result.user.email,
      };

      alert(`Se te ha enviado un mensaje de correo electronico:${result.user.email}
          Por favor de verificarlo para terminar con el proceso! Gracias`);

      const configuracion = {
        url: 'http://localhost:8887/src'
      };
      result.user.sendEmailVerification(configuracion).catch((err) => {
        alert(err.message);
      });

      Object.keys(objctCreate).forEach((ele) => {
        createUserFireStore('Users', result.user.email, ele, objctCreate[ele])
          .then(() => console.log('documento se escribio correctamente'))
          .catch(() => console.log(err.message));
      });
      changeHash('/home') ;
    })
    .catch((err) => {
      console.log(err.code);
      console.log(err.credential);
      alert(err.message !== undefined ? err.message : err.email);  
    });
};

export const accesWithFbOrGoogle = () => {
  const buttonFacebook = document.querySelector('#buttonFacebook');
  const butttonGoogle = document.querySelector('#buttonGoogle');

  buttonFacebook.addEventListener('click', () => {
    detectPromisesCreateUser(authenticateFacebook());
    changeHash('/home') ;
  });
  butttonGoogle.addEventListener('click', () => {
    detectPromisesCreateUser(authenticateGoogle());
    changeHash('/home') ;
  });
};

export const btnAcceptRegisterAndSendToHome = () => {
  const btnRegister = document.querySelector('#buttonAcceptRegister');
  btnRegister.addEventListener('click', registerOnSubmit);
};

export const btnAcceptLoginAndSendToHome = () => {
  const btnSignIn = div.querySelector('#buttonAcceptLogin');
  btnSignIn.addEventListener('click', logInOnSubmit);
};