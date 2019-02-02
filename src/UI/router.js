import Inite from '.UI/templates/pagInite.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/inite');
  } else if (hash === '#/pagIniteSesion' || hash === '#/pagRegister' || hash === '#/home') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/different');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const container = document.getElementById("container")
  container.innerHTML = templates[router];
}

export const initRouter = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
  }