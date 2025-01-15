const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");
const randomColorBtn = document.getElementById("randomColor");
const blackColorBtn = document.getElementById("blackColor");
const resetBtn = document.getElementById("reset");
const etchASketchArray = [];
let gridSize = 16;

window.onload = () => changeGridSize(gridSize);

resizeButton.addEventListener("click", () => {
  container.innerHTML = "";
  etchASketchArray.length = 0;
  gridSize = parseInt(prompt("Enter the size of the grid (1-100)"));
  if (gridSize > 1 && gridSize <= 100) {
    changeGridSize(gridSize);
  } else {
    alert("Please enter a number between 1 and 100");
    gridSize = 16;
    changeGridSize(gridSize);
  }
});

function changeGridSize(size) {
  document.documentElement.style.setProperty("--grid-size", size);

  const Container = document.querySelector(".container");
  Container.innerHTML = "";

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    Container.appendChild(div);
  }
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
}


