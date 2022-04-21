document.querySelector("#app").innerHTML = `
    <header>
    <section>
      <div>
        <span>가로</span>
        <input type="number" name="row" id="inputRow" value="10" onkeyup="render()">
      </div>
      <div>
        <span>세로</span>
        <input type="number" name="column" id="inputColumn" value="10" onkeyup="render()">
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

function render() {
  pokemonWrap.innerHTML = `<div>${`<img src="./image/pikachu.png" />`.repeat(inputRow.value)}</div>`.repeat(inputColumn.value)
}

function setRow(fn) {
  inputRow.value = fn(parseInt(inputRow.value, 10));
}

function setColumn(fn) {
  inputColumn.value = fn(parseInt(inputColumn.value, 10));
}

