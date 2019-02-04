import { initRouter } from './UI/router.js';

const init = () => {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyB6y4plbowLP3O7C8zj6jRwNOo2qt92Lkc',
    authDomain: 'myfirstbdsn.firebaseapp.com',
    databaseURL: 'https://myfirstbdsn.firebaseio.com',
    projectId: 'myfirstbdsn',
    storageBucket: 'myfirstbdsn.appspot.com',
    messagingSenderId: '768660542055'
  };

  firebase.initializeApp(config);
  
  initRouter();
};

window.onload = init();

// import { configBD } from './lib/configBD/configFireBase.js';
// import { createUser, logInUser, authenticateFacebook, authenticateGoogle, logOutUser} from './lib/authBD/authFireBase.js';

// import { createPostFireStore} from './lib/crudBD/crudPost/crudPost.js';
// import { createUserFireStore, readUserFireStore, updateUserFireStore, deleteUserFireStore} from './lib/crudBD/crudUser/crudUser.js';


// window.onload = () => {
//   // INI FIREBASE    
//   configBD();

//   // Eliminar usuario por completo de la BD
//   const buttonDeleteUser = document.getElementById('buttonDeleteUser');

//   // INI PAGE
//   const buttonLogin = document.getElementById('buttonLogin');
//   const buttonLogOut = document.getElementById('buttonLogOut');
//   const buttonRegister = document.getElementById('buttonRegister');
//   const buttonGoogle = document.getElementById('buttonGoogle');
//   const buttonFacebook = document.getElementById('buttonFacebook');

//   // Login
//   const inputEmail = document.getElementById('inputEmail');
//   const inputPassword = document.getElementById('inputPassword');
//   const buttonAcceptLogin = document.getElementById('buttonAcceptLogin');

//   // createUser
//   const createUsername = document.getElementById('createUsername');
//   const createEmail = document.getElementById('createEmail');
//   const createPassword = document.getElementById('createPassword');
//   const buttonCreateUser = document.getElementById('buttonAcceptRegister');

//   const statusUserController = () => {
//     let state;
//     let i = 0;
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         buttonLogin.style.display = 'none';
//         buttonLogOut.style.display = 'block';
//         buttonDeleteUser.style.display = 'block';

//         // alert('usuario = '+ user.email+ ' conectado');
//         state = true;
//         buttonDeleteUser.addEventListener('click', () => {
//           if (firebase.auth().currentUser.email) {
//             deleteUserFireStore('Users', firebase.auth().currentUser.email);
//           }
//         });
//       } else {
//         i++;
//         buttonLogin.style.display = 'block';
//         buttonLogOut.style.display = 'none';
//         buttonDeleteUser.style.display = 'none';
//         console.log('Usuario desconectado: ' + i);
//         // alert('Usuario desconectado');
//         state = false;
//       }
//     });
//     return state;
//   };  

//   statusUserController();

// /* Pruebas CRUD User  
//   const readUserDocument = (idCollection, idUser) => {
//     readUserFireStore(idCollection,idUser)
//       .then(respDoc => {
//         if (respDoc.data() !== undefined)
//           console.log(`Del  documento ${respDoc.data().correo} =>  El atributo usuario es ${respDoc.data().usuario}`);
//         else console.log('No encontro idUser');
//       })
//       .catch((err) => console.log('pruebas err= ' + err));
//   };

//   // readUserDocument('Users', 'jmpc2305@gmail.com');
//   // createUserFireStore('Users','jmpc2305@gmail.com','edad','27');
//   updateUserFireStore('Users','jmpc2305@gmail.com','edad','27')
//   .then(() => console.log('Udate= jmpc2305@gmail.com'))
//   .catch((err) => console.log(err.message));
// */

// /*Buscar informacion del blog publicado*/
// readUserFireStore('Usuarios', '01')
// .then((doc) => {
//   //console.log(Object.keys(doc.data()));
//   console.log('data= '+ doc.data());
  
// })
// .catch((err) => {
//   console.log('Pruebas blog err...' +err.message);
// })

//   const detectPromisesCreateUser = (funct) => {
//     funct
//       .then((result) => {

//         readUserFireStore('Users',result.user.email)
//           .then((respDoc) => {
//             if (respDoc.data() === undefined) {
//               console.log('No encontro documento');
//               const objDataUser = {};
//               const dataUser = result.user;
//               objDataUser.correo = dataUser.email;
//               objDataUser.usuario = dataUser.displayName;
//               objDataUser.foto = dataUser.photoURL;
              
//               console.log(objDataUser);
              
//               Object.keys(objDataUser).forEach((ele) => {
//                 createUserFireStore('Users', objDataUser.correo, ele, objDataUser[ele])
//                 .then(() => console.log('documento se escribio correctamente'))
//                 .catch(() => console.log(err.message));                
//               }); 
//             } else console.log('Usuario ya existe en la BD');
//           })
//           .catch((err) => {
//             console.log(err.message);
//           });
//       })
//       .catch((err) => {
//         console.log(err.code);
//         console.log(err.credential);
//         console.log('cayo en erro: detectPromisesCreateUser');
        
//         alert(err.message !== undefined ? err.message : err.email);
//       });
//   };

//   buttonAcceptLogin.addEventListener('click', () => {
//     logInUser(inputEmail.value, inputPassword.value)
//       .then((result) => {
//         statusUserController();
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   });

//   // async + await

//   buttonLogOut.addEventListener('click', () => {
//     logOutUser()
//       .then((result) => {
//         statusUserController();
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });  
//   });

//   buttonCreateUser.addEventListener('click', () => {
//     createUser(createEmail.value, createPassword.value)
//       .then((result) => {
//         const objctCreate = {
//           Usuario: createUsername.value,
//           Correo: result.user.email,
//         };

//         alert(`Se te ha enviado un mensaje de correo electronico:${result.user.email}
//             Por favor de verificarlo para terminar con el proceso! Gracias`);

//         const configuracion = {
//           url: 'http://localhost:8887/src'
//         };
//         result.user.sendEmailVerification(configuracion).catch((err) => {
//           alert(err.message);
//         });

//         Object.keys(objctCreate).forEach((ele) => {
//           createUserFireStore('Users', result.user.email, ele, objctCreate[ele])
//           .then(() => console.log('documento se escribio correctamente'))
//           .catch(() => console.log(err.message));
//         });
//       })
//       .catch((err) => {
//         console.log(err.code);
//         console.log(err.credential);
//         alert(err.message !== undefined ? err.message : err.email);
//       });
//   });

//   buttonGoogle.addEventListener('click', () => {
//     detectPromisesCreateUser(authenticateGoogle());    
//     statusUserController();
//   });

//   buttonFacebook.addEventListener('click', () => {
//     detectPromisesCreateUser(authenticateFacebook());   
//     statusUserController();
//   });
// };
