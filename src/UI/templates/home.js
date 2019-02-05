
export default () => {
    const div = document.createElement('div');
    const divContent = `
    <div class="buttonsOfCategories">
    <button>Inteligencia artificial</button>
    <button>Realidad virtual</button>
    <button>Robótica</button>
    <button>Ciberseguridad</button>
    <button>Dispositivos móviles</button>
    <button>Curiosidades(ciencias)</button>
</div>
<div class="section-of-new-post">
<button class="crear-nuevo-post">Crear nuevo post</button>
</div>
<div class="container-of-posts>
<h6 class="post-tittle-categoria">Categoría<h6>
<h7 class="tittle-of-post">Titulo</h7>
<p>DESCRIPCION</p>
<button class="like"><3</button>
<button class="coment">comment</button>
<button class="share">share</button>
</div>`;
div.innerHTML=divContent;
return div;
}