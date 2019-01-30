export const logOutUser = () => {
    console.log('Usuario fuera de session');
    firebase.auth().signOut();
    return 1;
}
