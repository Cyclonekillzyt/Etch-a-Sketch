const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");
const randomColorBtn = document.getElementById("randomColor");
const blackColorBtn = document.getElementById("blackColor");
const resetBtn = document.getElementById("reset");
const containerWidth = container.offsetWidth;
const etchASketchArray = [];
let gridSize = 36;

document.onload = createGrid(gridSize);

resizeButton.addEventListener("click", () => {
  container.innerHTML = "";
  etchASketchArray.length = 0;
  gridSize = parseInt(prompt("Enter the size of the grid"));
  if (gridSize > 1 && gridSize < 100) {
    createGrid(gridSize);
  } else {
    alert("Please enter a number between 1 and 100");
    gridSize = 16;
    createGrid(gridSize);
  }
});

function createGrid(size) {
  let totalSize = size * size;
  for (let i = 0; i <= totalSize; i++) {
    const etchASketch = document.createElement("div");
    etchASketch.style.display = "flex";
    etchASketch.style.flex = `0 0 ${squareSize}px`;
    etchASketch.style.border = `1px solid`;
    etchASketch.style.boxSizing = "border-box";
    container.style.overflow = "hidden";

    container.appendChild(etchASketch);
    etchASketchArray.push(etchASketch);
  }
  etchASketchArray.forEach((etchASketch) => {
    etchASketch.addEventListener("mouseover", () => {
      etchASketch.style.backgroundColor = "black";
    });
  });
}
