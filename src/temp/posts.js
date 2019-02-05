import { postContent, postContentLs } from '../viewController.js';
// import { postContentList } from '../services/FirebaseTools.js';

let posts = {
  render: async(postInputValue) => {
    let view = `<h1>Bienvenido </h1>
    <p>¡Eres nueva usuaria!</p>
    <input id="post-content" type="text" placeholder="¿En que estas pensado?"></input>
    <a id="btn-to-pots-content">Publicar</a>
    <button id="btn-Sign-Out">Cerrar sesión</button>
    <span id="post-content-list" type="text"></span>
    `;
    return view;
  },
  applyTemplate: (row) => {
    return `<li id= "${row.id}">${row.descripcion}</li>
    <a id="btn-to-delete-content">Eliminar</a>
    <a id="btn-to-edit-content">Editar</a>
    <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>`;
  },
  after_render: () => {
    // let test = postContentLs();
    /*test.forEach(row => {
      const html = posts.applyTemplate({id: row.id, ...row.data()});
      document.querySelector('#post-content-list').innerHTML += html;
    });*/
    const pintar = (arrPosts) => {
      document.querySelector('#post-content-list').innerHTML = '';
      arrPosts.forEach(row => {
        const html = posts.applyTemplate(row);
        document.querySelector('#post-content-list').innerHTML += html;
      });
    }
    postContentLs(pintar);
    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
      let postTxt = document.getElementById('post-content').value;
      postContent(postTxt);
      document.getElementById('post-content').value = '';
    });
  }
};

export default posts;

// export let postsList = {
//  render: async(postInputValue) => {
//    let view = `
//    <div>
//      <span id="post-content" type="text">${postInputValue}</span>
//      <a id="btn-to-delete-content">Eliminar</a>
//      <a id="btn-to-edit-content">Editar</a>
//      <a id="btn-to-like-content">Me gusta<span id="like-counter"></span></a>
//    </div>
//    `;
//    return view;
//  },
//  after_render: async() => {
//    document.getElementById('btn-to-pots-content').addEventListener('click', () => {
//      let postTxt = document.getElementById('post-content').value;
//      postContent(postTxt);
//    });
//  }
//        
// };
