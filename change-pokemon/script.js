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
  const inputColumnValue = parseInt(inputColumn.value, 10);
  const inputRowValue = parseInt(inputRow.value, 10);

  // 입력된 열의 값이 실제 divelement.length 보다 클 경우
  if (inputColumnValue - pokemonWrap.childElementCount > 0) {
    // column.value - div element.length (input값과 실제 보이는 개수의 차이) 만큼 element를 만들어 열을 추가해줌.
    const textElements = `<div>${`<img src="./image/pikachu.png" />`.repeat(inputRowValue)}</div>`.repeat(inputColumnValue - pokemonWrap.childElementCount);
    pokemonWrap.innerHTML += textElements;
    // 입력된 열의 값이 실제 div element보다 클 경우    
  } else if (inputColumnValue - pokemonWrap.childElementCount < 0) {
    // input value 값과 element길이가 동일할때까지 열을 지워줌
    while (inputColumnValue - pokemonWrap.childElementCount < 0) {
      pokemonWrap.removeChild(pokemonWrap.lastChild)
    }
  }

  // 입력된 행의 값이 실제 div.img.length 보다 클 경우
  if (inputRowValue > document.querySelector("#pokemonWrap > div")?.childElementCount || 0) {
    // 모든 div에 img를 차이값 만큼 추가해줌
    for (const element of document.querySelectorAll("#pokemonWrap > div")) {
      element.insertAdjacentHTML("beforeend", `<img src="./image/pikachu.png" />`.repeat(inputRowValue - element.childElementCount || 0))
    }
    // 입력 된 행의 값이 div.img.length보다 작을 경우
  } else if (inputRowValue < document.querySelector("#pokemonWrap > div")?.childElementCount || 0) {
    // 모든 div에 img를 차이값 만큼 제거해줌
    for (const element of document.querySelectorAll("#pokemonWrap > div")) {
      while (element.childElementCount - inputRowValue > 0) {
        element.removeChild(element.lastChild)
      }
    }
  }
}

function setRow(fn) {
  inputRow.value = fn(parseInt(inputRow.value, 10));
}

function setColumn(fn) {
  inputColumn.value = fn(parseInt(inputColumn.value, 10));
}

render();