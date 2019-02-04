export const createUser = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);

    // .then((result) => {
    // //   alert(`Se te ha enviado un mensaje de correo electronico:${password}
    // //     Por favor de verificarlo para terminar con el proceso! Gracias`);
    // //   const configuracion = {
    // //     url: 'http://localhost:8887/src'
    // //   };
    // //   result.user.sendEmailVerification(configuracion).catch((err) => {
    // //     alert(err.message);
    // //   });        
    // })
    // .catch((err) => {
    //   return err.message;
    //   // alert(err.code)
    //   // alert(err.message);
    //   // alert(err.email);
    //   // alert(err.credential);
    // });

};