export const logInUser = (email, password) => {
    const objDataUser = {};
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((result) => {
        const dataUser = result.user;
        objDataUser.nameUser = dataUser.displayName;
        objDataUser.email = dataUser.email;
        objDataUser.photoUser = dataUser.photoURL;
    })
    .catch((err) =>{
        alert(err.code)
        alert(err.message);
        alert(err.email);
        alert(err.credential);
    });    
    return objDataUser;    
}