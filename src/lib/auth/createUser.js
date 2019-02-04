export const createUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};