import { objTemp } from './tempString.js';

export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') { 
    return viewTmp('#/home');
  } else if (hash === '#/nextPage') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/different');
  }
};

export const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = objTemp[router];
};
