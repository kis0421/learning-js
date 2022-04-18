const pokemonWrap = document.querySelector("#pokemonWrap");
const inputRow = document.querySelector("#inputRow");
const inputColumn = document.querySelector("#inputColumn");

function render() {
  pokemonWrap.innerHTML = `<div>${`<img src="./image/pikachu.png" />`.repeat(inputRow.value)}</div>`.repeat(inputColumn.value)
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