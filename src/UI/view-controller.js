import itemPost from './templates/itemPost.js';
import { createUser, authenticateFacebook, authenticateGoogle, logInUser, logOutUser,
  sendEmail, userStateChange, dataConnectUser, passwordReset} 
  from '../lib/authBD/authFireBase.js';

import { createBDFireStore, readBDFireStore, readDocBDFireStore,
  updateBDFireStore, deleteUserFireStore, deleteDocFireStore, sendImagePost}
  from '../lib/crudBD/crudUser/crudUser.js';


// import {createPostFireStore, readPostFireStore, readDocPostFireStore, deletePostFireStore, updatePostFireStore} from '../lib/crudBD/crudPost/crudPost.js';

export let photoUserGlobal, nameUserGlobal;
let contPost = 0;

const changeHash = (hash) => {
  location.hash = hash;
};

const getDayAndHour = () => {
  let h, m, s; 

  const checkTime = (i) => {
    if (i < 10) i = '0' + i;
    return i;
  };
  
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo',
    'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  
  const date = new Date();
  
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const yy = date.getFullYear();
  
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  
  const fechaYhora = day + ' ' + months[month] + ' ' + yy + ' a las ' + h + ':' + m + ':' + s;
  return fechaYhora;
};
  
const objectCreateUserProfile = (usuario, correo, foto, userCreateDay) => {
  const objectUserProfile = {};
  objectUserProfile.fecha = userCreateDay;
  objectUserProfile.usuario = usuario;
  objectUserProfile.correo = correo;
  objectUserProfile.foto = foto;
  objectUserProfile.estado = '';
  objectUserProfile.edad = '';
  return objectUserProfile;
};

const objectCreatePost = (idPost, correoUsuario, fotoUsuario, nombreUsuario, fechaCreacion, privacidad, categoria, titulo, descripcion, multimedia) => {
  const objectPost = {};
  objectPost.id = idPost;
  objectPost.correoUsuario = correoUsuario;
  objectPost.fotoUsuario = fotoUsuario;
  objectPost.nombreUsuario = nombreUsuario;
  objectPost.fecha = fechaCreacion;
  objectPost.privacidad = privacidad;
  objectPost.categoria = categoria;
  objectPost.titulo = titulo;
  objectPost.contenido = {
    descripcion: descripcion,
    multimedia: multimedia,
  };
  objectPost.likes = 0;
  objectPost.comentarios = {
    quienComento: '',
    likes: 0,
  };
  return objectPost;
};

export const createPost = (userPhoto, userName, postType, titlePost,
  descriptionPost, multimedia, postPrivacy, savePublicPost, closePost) => {
  const userConnect = dataConnectUser().email;
  console.log('Usuario conectado es: ' + userConnect);

  savePublicPost.addEventListener('click', () => {
    let objDataUser = {};

    const postPrivacyValue = postPrivacy.options[postPrivacy.selectedIndex].value;
    const postTypeValue = postType.options[postType.selectedIndex].value;

    console.log('postPrivacyValue: ' + postPrivacyValue + '; postTypeValue: ' + postTypeValue);
        
    let file = multimedia.files[0];
    // Subimos el archivo a firebase
    sendImagePost(file)
      .then((snapshot) => {
      // getURL lo usaremos al registrar
        snapshot.ref.getDownloadURL()
          .then((getURL) => {
            objDataUser = objectCreatePost(contPost, userConnect, userPhoto, userName,
              getDayAndHour(), postPrivacyValue, postTypeValue, titlePost.value, descriptionPost.value, getURL); 
            console.log(objDataUser);
            
            createBDFireStore('Post', contPost, objDataUser)
              .then(() => console.log('documento se escribio correctamente en post'))
              .catch((err) => console.log(err.message));            
          });
      });
      
    // createBDFireStore('Post', contPost, objDataUser)
    // .then(() => console.log('documento se escribio correctamente en post'))
    // .catch(() => console.log(err.message));

    changeHash('/home') ;  
  });

  closePost.addEventListener('click', () => {
    changeHash('/home');
  });
};

export const mainRedSocial = (userPhoto, userName, buttonDeleteUser, buttonLogOut, createPost, postWall) => {
  let stateUser = [];
  stateUser = userStateChange(stateUser);
  if (stateUser) {
    // Evaluar estado del usuario

    let userConnect = dataConnectUser().email;
    
    console.log('Usuario conectado es: ' + userConnect);

    readDocBDFireStore('Users', userConnect)
      .then((respDoc) => {
        const saveDocumentUser = respDoc.data();
        if (saveDocumentUser !== undefined) {
          userPhoto.src = saveDocumentUser.foto;
          userName.innerHTML = saveDocumentUser.usuario;
        }
      });

    viewAllPost(postWall);

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

    createPost.addEventListener('click', () => {
      nameUserGlobal = userName.innerHTML;
      photoUserGlobal = userPhoto.getAttribute('src');
      changeHash('/createPost');
    });
  } else {
    console.log('Usuario No conectado');
  }
  return 1;
};

const detectPromisesCreateUser = (funct) => {
  funct
    .then((result) => {
      readDocBDFireStore('Users', result.user.email)
        .then((respDoc) => {
          if (respDoc.data() === undefined) {
            console.log('No encontro documento');
            let objDataUser = {};
            const dataUser = result.user;

            objDataUser = objectCreateUserProfile(dataUser.displayName, dataUser.email, dataUser.photoURL, getDayAndHour());
            
            console.log(objDataUser);
            
            createBDFireStore('Users', objDataUser.correo, objDataUser)
              .then(() => console.log('documento se escribio correctamente'))
              .catch(() => console.log(err.message));                
          } else console.log('Usuario ya existe en la BD');

          changeHash('/home') ;
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
  buttonAcept.addEventListener('click', () => {
    createUser(userEmail.value, userPassword.value)
      .then((result) => {
        let objctCreate = objectCreateUserProfile(userName.value, result.user.email, '', getDayAndHour());

        alert(`Se te ha enviado un mensaje de correo electronico:${result.user.email}
          Por favor de verificarlo para terminar con el proceso! Gracias`);

        const config = {
          url: 'http://localhost:8887/src'
        };
        // sendEmail(config)
        result.user.sendEmailVerification(config)
          .catch((err) => {
            alert(err.message);
          });

        createBDFireStore('Users', result.user.email, objctCreate)
          .then(() => console.log('documento se escribio correctamente'))
          .catch(() => console.log(err.message));

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

export const btnAcceptLoginAndSendToHome = (inputEmail, inputPassword, buttonAcceptLogin, missedPassword) => {
  buttonAcceptLogin.addEventListener('click', () => {
    logInUser(inputEmail.value, inputPassword.value)
      .then(() => {
        changeHash('/home') ;
      })
      .catch((err) => {
        console.log(err.message);
      });    
  });

  missedPassword.addEventListener('click', () => {
    passwordReset(inputEmail.value)
      .then(() => {
        alert('Se te envió un correo para la recuperación de tu contraseña,sigue los pasos');        
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

const viewAllPost = (postWall) => {
  let arrayItemPost = [];
  readBDFireStore('Post')
    .onSnapshot((doc) => {
      contPost = '#' + (doc.size + 1).toString();
      doc.forEach((post) => {
        const dataPost = post.data();
        arrayItemPost.push(itemPost(dataPost.id, dataPost.fotoUsuario, dataPost.nombreUsuario, dataPost.fecha,
          dataPost.titulo, dataPost.contenido.multimedia, dataPost.contenido.descripcion));
      });

      postWall.innerHTML = arrayItemPost.join('');
    });
};

export const itemViewPost = (idPost, likes, comment, share, editPost, deletePost) => {
  // editPost.addEventListener('click', () => {
  //     changeHash('/createPost');
  // });

  // deletePost.addEventListener('click', () => {
  //   deleteDocFireStore('Post', idPost);
  // });
};

// const pruebasPost () =>{

// borrar todos los elementos de una coleccion

// firebase.firestore().collection('Users').get()
//   .then((doc) => {
//     doc.forEach((data) => {
//       console.log(data.id, ' => ', data.data());

//       firebase.firestore().collection('Users').doc(data.id).delete()
//         .catch((err) => {
//           console.log(err.message);
//         });
//     });
//   })
//   .catch((err) => console.log(err.message));

// // Ejemplo Eliminando Post
// deletePostFireStore('Users', 'Post', 'jmpc2305@gmail.com', '#2');

// // Obteniendo datos especificos de un post
// readDocPostFireStore('Users', 'Post', 'jmpc2305@gmail.com', '#1')
// .then((result)=>{
//   if(result.data() !== undefined)
//   console.log('ES: '+ Object.keys(result.data()));
//   else
//   console.log('No existe Post');
// })
// .catch((err)=>{
//   console.log('ERR: '+err.message);
// })

// // Editando Post
// updatePostFireStore('Users', 'Post', 'jmpc2305@gmail.com', '#1', 'categoria', 'terror')
// .catch((err) =>{
//   console.log(err.message);
// })
// }


// pruebasPost();