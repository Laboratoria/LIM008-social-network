// import { logInUser } from '../lib/auth/logInUser.js';

import { createUser, authenticateFacebook, authenticateGoogle, logInUser, logOutUser} 
  from '../lib/authBD/authFireBase.js';

import { createUserFireStore, readUserFireStore, updateUserFireStore, deleteUserFireStore}
  from '../lib/crudBD/crudUser/crudUser.js';

const changeHash = (hash) => {
  location.hash = hash;
};
  
export const mainRedSocial = (buttonDeleteUser, buttonLogOut) => {
  let state;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      state = true;
      const userConnect = firebase.auth().currentUser.email;
      console.log('Usuario conectado es: ' + userConnect);

      buttonLogOut.addEventListener('click', () => {
        logOutUser()
          .then(() => {
            console.log('Usuario fuera de session');
            changeHash('/inite') ;
          })
          .catch((err) => {
            console.log(err.message);
          }); 
      });

      buttonDeleteUser.addEventListener('click', () => {
        deleteUserFireStore('Users', userConnect);
        changeHash('/inite') ;
      });
    } else {
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

          changeHash('/home') ;
          // Evaluar estado del usuario
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

export const registerOnSubmit = (buttonRegister) => {
  buttonRegister.addEventListener('click', () => {
    changeHash('/pagRegister') ;
  });
};
export const btnAcceptRegisterAndSendToHome = (userName, userEmail, userPassword, buttonAcept) => {
  // event.preventDefault();

  buttonAcept.addEventListener('click', () => {
    createUser(userEmail.value, userPassword.value)
      .then((result) => {
        const objctCreate = {
          Usuario: userName.value,
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
        changeHash('/inite') ;
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.credential);
        alert(err.message !== undefined ? err.message : err.email);  
      });  
  });
};

export const loginUser = (buttonLogin) => {
  buttonLogin.addEventListener('click', () => {
    changeHash('/pagIniteSesion');
  });
};
export const btnAcceptLoginAndSendToHome = (inputEmail, inputPassword, buttonAcceptLogin) => {
  buttonAcceptLogin.addEventListener('click', () => {
    logInUser(inputEmail.value, inputPassword.value)
      .then(() => {
        changeHash('/home') ;        
      })
      .catch((err) => {
        console.log(err.message);
      });    
  });
};

export const accesWithFbOrGoogle = (buttonFacebook, buttonGoogle) => {
  buttonFacebook.addEventListener('click', () => {
    detectPromisesCreateUser(authenticateFacebook());
  });
  buttonGoogle.addEventListener('click', () => {
    detectPromisesCreateUser(authenticateGoogle());
  });
};


