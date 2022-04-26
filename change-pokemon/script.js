document.querySelector("#app").innerHTML = `
    <header>
    <section>
      <div>
        <span>가로</span>
        <input type="number" name="row" id="inputRow" value="10">
      </div>
      <div>
        <span>세로</span>
        <input type="number" name="column" id="inputColumn" value="10">
      </div>
    </section>
    <br />
    <div id="buttonWrap">

      <button onclick="setRow((num) => num + 1);render();">가로 + 1</button>
      <button onclick="setRow((num) => num - 1);render();">가로 - 1</button>

      <button onclick="setColumn((num) => num + 1);render();">세로 + 1</button>
      <button onclick="setColumn((num) => num - 1);render();">세로 - 1</button>

      <button onclick="setRow((num) => num * 2 );render();">가로 * 2</button>
      <button onclick="setColumn((num) => num * 2);render();">세로 * 2</button>
    </div>
    <br />
  </header>
  <br />
  <section id="pokemonWrap"></section>`;

const pokemonWrap = document.querySelector("#pokemonWrap");
const inputRow = document.querySelector("#inputRow");
const inputColumn = document.querySelector("#inputColumn");

render();

function pokemon(props) {
  return `<img src="./image/${props.type}.png" />`;
}

function app() {
  const pokemons = new Array(row)
    .fill(false)
    .map((_, index) => pokemon({ type: index % 2 === 0 ? "squirtle" : "pikachu" }))
    .join("");

  return `<div>${pokemons}</div>`.repeat(column);
}

function render() {
  pokemonWrap.innerHTML = app();
}

let row = 1;
let column = 1;

function setRow(fn) {
  row = fn(row);
}


function setColumn(fn) {
  column = fn(column);
}

