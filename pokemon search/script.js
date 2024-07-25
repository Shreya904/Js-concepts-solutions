const input = document.querySelector("#search-input");
const btn = document.querySelector("#search-button");
const img1 = document.querySelector("#main-img");
const BASE_URL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

btn.addEventListener("click", async (evt) =>{
    evt.preventDefault();
    const val = input.value.toLowerCase();
    const URL = `${BASE_URL}/${val}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    function imageChange() {
        let newSrc = data.sprites.front_default;
        img1.src = newSrc;
    }
    imageChange();
    document.querySelector("#pokemon-name").textContent = data.name.toUpperCase();
    document.querySelector("#pokemon-id").textContent = ` #${data.id}`;
    document.querySelector("#weight").textContent = `${data.weight}   `;
    document.querySelector('#height').textContent = data.height;
    document.querySelector("#attack").textContent = data.stats[1].base_stat;
    document.querySelector("#defense").textContent = data.stats[2].base_stat;
    document.querySelector("#special-attack").textContent = data.stats[3].base_stat;
    document.querySelector("#special-defense").textContent = data.stats[4].base_stat;
    document.querySelector("#speed").textContent = data.stats[5].base_stat;
    document.querySelector("#hp").textContent = data.stats[0].base_stat;
    let type = document.querySelector("#type");
    if(data.types[0] && data.types[1]) {
        type.textContent =`${data.types[0].type.name} & ${data.types[1].type.name}`;
    } else if(data.types[0]){
        type.textContent = data.types[0].type.name;
    }
    
})

