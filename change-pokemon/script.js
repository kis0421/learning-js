const pokemonWrap = document.querySelector("#pokemonWrap");
const inputRow = document.querySelector("#inputRow");
const inputColumn = document.querySelector("#inputColumn");

let width = 10;
let height = 10;

function render() {
    inputRow.value = width;
    inputColumn.value = height;
    
    for (let column = 0; column < height; column++){
        for(let row = 0; row < width; row++){
         
        }
    }
}

render()