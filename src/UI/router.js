import Inite from './templates/pagInite.js';
import Login from './templates/pagLogin.js';
import Register from './templates/pagRegister.js';
import Home from './templates/home.js';
// import { accesWithFbOrGoogle, btnAcceptLoginAndSendToHome
//   , btnAcceptRegisterAndSendToHome } from './view-controller.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/inite');
  } else if (hash === '#/pagIniteSesion' || hash === '#/pagRegister' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/inite');
  }
};

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
  case 'inite':
    Inite();
    break;
  case 'pagIniteSesion':
    Login();
    // btnAcceptLoginAndSendToHome();
    break;
  case 'pagRegister':
    Register();
    // btnAcceptRegisterAndSendToHome();
    break;
  case 'home':
    Home();
    // statusUserController();
    break;
  default:
    Inite();
    break;
  }
};

export const initRouter = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};