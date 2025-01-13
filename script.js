const container = document.getElementById("container");
const resizeButton = document.getElementById("resize");
const randomColorBtn = document.getElementById("randomColor");
const blackColorBtn = document.getElementById("blackColor");
const resetBtn = document.getElementById("reset");
const etchASketchArray = [];
let gridSize = 16;

document.addEventListener("DOMContentLoaded", () => {
    createGrid(gridSize);
});

resizeButton.addEventListener("click", () => {
    container.innerHTML = "";
    etchASketchArray.length = 0;
    gridSize = parseInt(prompt("Enter the size of the grid"));
    if(gridSize > 1 && gridSize < 100){
        createGrid(gridSize);
    }
    else{
        alert("Please enter a number between 1 and 100");
        gridSize = 16;
        createGrid(gridSize);
    }
});


function createGrid(size){
    const squareSize = Math.floor(500 / size);
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          const etchASketch = document.createElement("div");
          etchASketch.style.width = `${squareSize}px`;
          etchASketch.style.height = `${squareSize}px`;
          etchASketch.style.border = "1px solid black";
          etchASketch.style.overflowX = "hidden";
          container.appendChild(etchASketch);
          etchASketchArray.push(etchASketch);
        }
      }
      etchASketchArray.forEach((etchASketch) => {
        etchASketch.addEventListener("mouseover", () => {
            etchASketch.style.backgroundColor = "black";
        });
    });
};







