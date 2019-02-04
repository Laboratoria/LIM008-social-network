let provider;

 const saveDataUser = (inputProvider) =>{
    const objDataUser = {}; 
    firebase.auth().signInWithPopup(inputProvider)
    .then((result) => {
      const dataUser = result.user;
      objDataUser.nameUser = dataUser.displayName;
      objDataUser.email = dataUser.email;
      objDataUser.photoUser = dataUser.photoURL;
    })
    .catch((err) => {
      alert(err.code);
      alert(err.message);
      alert(err.email);
      alert(err.credential);
    });    
  return objDataUser;
};

export const authenticateFacebook = () => {
  provider = new firebase.auth.FacebookAuthProvider(); 
  return saveDataUser(provider);
};

export const authenticateGoogle = () => {
  provider = new firebase.auth.GoogleAuthProvider(); 
  return saveDataUser(provider);
};
