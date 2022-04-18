const pokemonWrap = document.querySelector("#pokemonWrap");
const inputRow = document.querySelector("#inputRow");
const inputColumn = document.querySelector("#inputColumn");

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

function changeInput(target, fn) {
  if (target === "row") {
    inputRow.value = fn(parseInt(inputRow.value, 10));
  } else {
    inputColumn.value = fn(parseInt(inputColumn.value, 10));
  }
  render()
}

render();