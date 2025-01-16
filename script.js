// get elements from html
const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");
const randomColorBtn = document.getElementById("randomColor");
const blackColorBtn = document.getElementById("blackColor");
const EraserBtn = document.getElementById("Eraser");
const resetBtn = document.getElementById("reset");

// create array to store the items created
const etchASketchArray = [];

//default starting grid size
let gridSize = 16;

window.onload = () => changeGridSize(gridSize);

// eventlistener for resize button
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

// function to change the grid size
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

// eventlistener for random color button
randomColorBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = getRandomColor();
    });
  });
});


//function to generate random color
function getRandomColor() {
  const r = Math.floor( Math.random() * 255);
  const g = Math.floor( Math.random() * 255);
  const b = Math.floor( Math.random() * 255);
  const a = Math.random() * 1.05;
  const rounded = a.toFixed(1);
  let color = "rgba(" + r + "," + g + "," + b + "," + rounded + ")";
  return color;
}

//eventlistener for changing color back to black
blackColorBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "black";
    });
  });
});

//eventlistener for Eraser button
EraserBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "transparent";
    });
  });
})

//eventlistener for reset button
resetBtn.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach((item) => {
      item.style.backgroundColor = "transparent";
  });
})