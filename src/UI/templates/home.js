
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
<h6 class="text-create-new-post"> Crear nuevo post </h6>
<input type="text" class="campo-de-texto" placeholder="¿Que hay de nuevo?></input>
<img src="photoUrl.user">
</div>
<div class="container-of-posts>
</div>`;
div.innerHTML=divContent;

}