import { initRouter} from './UI/router.js';
import Header from './UI/templates/header.js';

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
//   initRouterHeader();
};

const viewHeader = (hash) => {
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = Header(hash);
}

window.onload = 
    init();
    viewHeader(window.location.hash);

