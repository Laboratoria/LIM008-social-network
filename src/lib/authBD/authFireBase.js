// variables locales
let provider;

export const createUser = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const logInUser = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const authenticateFacebook = () => {
  provider = new firebase.auth.FacebookAuthProvider(); 
  return firebase.auth().signInWithPopup(provider);
};

export const authenticateGoogle = () => {
  provider = new firebase.auth.GoogleAuthProvider(); 
  return firebase.auth().signInWithPopup(provider);
};

export const logOutUser = () => {
  return firebase.auth().signOut();
};

export const sendEmail = () => {

};

export const passwordReset = () => {

};