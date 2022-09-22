let boxes = document.getElementsByClassName("box");

// convert html colllect ^ to an array
console.log(Array.isArray(boxes)); // F
console.log(Array.isArray(Array.from(boxes))); // T
Array.from(boxes).forEach((box) => {
  console.log(box);
});

let divs = document.getElementsByTagName("div");
console.log(divs);
console.log(boxes[1]);
