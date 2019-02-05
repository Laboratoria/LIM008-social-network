export default () => {
    const div = document.createElement('div');
    const divContent = `
    <h6 class="post-tittle-categoria">Categoría</h6>
    <select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
    <h7 class="tittle-of-post">Titulo</h7>
    <button>+</button>
    <input placeholder="Escribe aquí" type="text"></input>
    <select>
    <option value="amigos">Amigos</option>
    <option value="público">Público</option>
    </select>
    <button>Publicar</publicar>
    <button>Cerrar</button>
    `
div.innerHTML= divContent;
    return div;
}