import {itemViewPost} from '../view-controller.js';
import post from './post.js';

export default (idPost, dataPost, deleteEdit, postWall) => {

    const divContent = document.createElement('DIV');
    divContent.setAttribute('id', idPost);
    divContent.setAttribute('class','grid-item');

  const divContent_ = `
        <div>
            ${deleteEdit}
            <input id= "userPhoto" type="image" src="${dataPost.fotoUsuario}" width="80" height="100" alt="Login"></input><br>
            <label id= "userName">${dataPost.nombreUsuario}</label><br>
            <label id= "dateAndTimeCreate">${dataPost.fecha}</label><br>
            <label id= "postTitle">${dataPost.titulo}</label><br>
        </div>
        <div>
            <img id="multmediaImage" src="${dataPost.contenido.multimedia}" width="150" height="100"><br>
            <label id = "postInfo">${dataPost.contenido.descripcion}</label><br>
        </div>
        <div>
            <button id="likes">Likes</button>
            <button id="comment">Comentar</button>
            <button id="share">Compartir</button>
        </div>
    `;
    divContent.innerHTML = divContent_;
    postWall.appendChild(divContent);

    return 1;
};