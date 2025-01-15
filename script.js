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

  // Create the grid items
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    Container.appendChild(div);
  }

  // Re-query grid items after they are created
  const gridItems = document.querySelectorAll(".grid-item");

  // Add event listeners to each grid item
  gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black"; // Default color (black)
    });
  });
}

randomColorBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = getRandomColor();
    });
  });
});

function getRandomColor() {
  const r = Math.floor( Math.random() * 255);
  const g = Math.floor( Math.random() * 255);
  const b = Math.floor( Math.random() * 255);
  const a = Math.random() * 1.05;
  const rounded = a.toFixed(1);
  let color = "rgba(" + r + "," + g + "," + b + "," + rounded + ")";
  return color;
}

blackColorBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
});

resetBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "transparent";
    });
  });
})