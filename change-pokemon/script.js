const pokemonWrap = document.querySelector("#pokemonWrap");
const inputRow = document.querySelector("#inputRow");
const inputColumn = document.querySelector("#inputColumn");

function render() {
  const inputColumnValue = parseInt(inputColumn.value, 10);
  const inputRowValue = parseInt(inputRow.value, 10);

  if (inputColumnValue - pokemonWrap.childElementCount > 0) {
    const textElements = `<div>${`<img src="./image/pikachu.png" />`.repeat(inputRowValue)}</div>`.repeat(inputColumnValue - pokemonWrap.childElementCount);
    pokemonWrap.innerHTML += textElements;
  } else if (inputColumnValue - pokemonWrap.childElementCount < 0) {
    while (inputColumnValue - pokemonWrap.childElementCount < 0) {
      pokemonWrap.removeChild(pokemonWrap.lastChild)
    }
  }

  if (inputRowValue > document.querySelector("#pokemonWrap > div")?.childElementCount || 0) {
    for (const element of document.querySelectorAll("#pokemonWrap > div")) {
      element.insertAdjacentHTML("beforeend", `<img src="./image/pikachu.png" />`.repeat(inputRowValue - element.childElementCount || 0))
    }
  } else if (inputRowValue < document.querySelector("#pokemonWrap > div")?.childElementCount || 0) {
    for (const element of document.querySelectorAll("#pokemonWrap > div")) {
      while (element.childElementCount - inputRowValue > 0) {
        element.removeChild(element.lastChild)
      }
    }
  }
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