const container = document.getElementById("container");
const etchASketchArray = [];



function createGrid(){
    for (let i = 0; i < 14; i++) {
        for (let j = 0; j < 14; j++) {
          const etchASketch = document.createElement("div");
          etchASketch.style.width = "30px";
          etchASketch.style.height = "30px";
          etchASketch.style.border = "1px solid black";
          container.appendChild(etchASketch);
          etchASketchArray.push(etchASketch);
        }
      }
}


etchASketchArray.forEach((etchASketch) => {
    etchASketch.addEventListener("mouseover", () => {
        etchASketch.style.backgroundColor = "black";
    });
});




