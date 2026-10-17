// console.log("file runing script.js")
// // let boxes = document.getElementsByClassName("box")
// let boxes  = document.querySelector(".container").children
// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes)
// .forEach(e => {
//     e.style.backgroundColor = getRandomColor()
//     e.style.Color = getRandomColor()
// });

// Returns a random color like "rgb(120, 45, 200)"
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }

    // Select all boxes (returns a NodeList)
    const boxes = document.querySelectorAll(".box");

    // Loop through each box and assign random colors
    boxes.forEach((box) => {
      box.style.backgroundColor = randomColor();
      box.style.color = randomColor();
    });