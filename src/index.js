import './sass/main.scss';




const div = document.querySelector('.for-pokemons');

const form = document.querySelector('.input');



form.addEventListener('submit', (e) => {
    e.preventDefault();

    let id = form.elements.poketId.value;
    finderPokemon(id).then(createMarkup)







    form.reset()
})



function finderPokemon(id) {
      
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then(res => res.json());
}



function createMarkup({name, height, weight, abilities, sprites }) {



    return div.innerHTML =
`<div class="poket-card"><img src="${sprites.front_default}" alt="pokemon photo" class="poket-card__img">

<h3 class="poket-card__name">Имя: ${name}</h3>

<p class="poket-card__heigth">Рост: ${height} см</p>
<p class="poket-card__weight">Вес: ${weight}  кг</p>

<ul class="poket-card__ability">ability:
  <li class="poket-card__ability-li">${abilities[0].ability.name}</li>

</ul>
</div>`




}





