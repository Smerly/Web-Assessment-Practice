const inputWidth = document.querySelector("#width");
const inputHeight = document.querySelector("#height");
const inputColor = document.querySelector("#color");
const displayWidth = document.querySelector("#display-width");
const displayHeight = document.querySelector("#display-height");
const displayColor = document.querySelector("#display-color");
const visualHTML = document.querySelector("#visual-html");

inputWidth.addEventListener("input", display, displayVisual);
inputHeight.addEventListener("input", display, displayVisual);
inputColor.addEventListener("input", display, displayVisual);

function display(e) {
  const width = parseFloat(inputWidth.value);
  const height = parseFloat(inputHeight.value);
  const color = inputColor;

  displayWidth.innerHTML = width.toFixed(2);
  displayHeight.innerHTML = height.toFixed(2);
  displayColor.innerHTML = color.value;
}

function displayVisual(e) {
  //   border.style.width = `${inputWidth.value}px`;
  //   border.style.height = `${inputHeight.value}px`;
  //   border.style.color = `${inputColor.value}px`;

  const width = parseFloat(inputWidth.value);
  const height = parseFloat(inputHeight.value);
  const color = inputColor;

  const visual = `<div style='width: ${width}px;
                         height: ${height}px;
                         background-color: ${color};></div>`;
  visualHTML.innerHTML = visual;
}

display(e);
displayVisual(e);
