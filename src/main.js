import { initRouterPetbook } from './route.js';

const inicializa = () => {
  var config = {
    apiKey: "AIzaSyCaSZCOTrO0WcdvI7sCVPNE5p6eiGj7tB4",
    authDomain: "petbook-cbdd2.firebaseapp.com",
    databaseURL: "https://petbook-cbdd2.firebaseio.com",
    projectId: "petbook-cbdd2",
    storageBucket: "petbook-cbdd2.appspot.com",
    messagingSenderId: "158794772915"
  };
  firebase.initializeApp(config);
  initRouterPetbook();
}

window.addEventListener('load', inicializa)
