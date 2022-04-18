const pokemonWrap = document.querySelector("#pokemonWrap");
const inputRow = document.querySelector("#inputRow");
const inputColumn = document.querySelector("#inputColumn");

let width, height

function render() {
  width = inputRow.value;
  height = inputColumn.value;

  let targetElements = "";
  for (let column = 0; column < height; column++) {
    let columnChildElement = "";
    for (let row = 0; row < width; row++) {
      columnChildElement += `<img src="./image/pikachu.png" />`;
    }
    targetElements += `<div>${columnChildElement}</div>`;
  }

  pokemonWrap.innerHTML = targetElements
}
function changeInput(target, fn) {
  if (target === "row") {
    inputRow.value = fn(parseInt(inputRow.value, 10));
  } else {
    inputColumn.value = fn(parseInt(inputColumn.value, 10));
  }
  render()
}

render();