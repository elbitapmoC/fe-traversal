// grandparent - getElementById
// let grandparent1 = document.getElementById("grandparent");
// console.log(grandparent1);

// grandparent - querySelector
// let grandparent2 = document.querySelector("#grandparent");
// console.log(grandparent2);

// parents - getElementsByClassName
let parents = document.getElementsByClassName("parent");
console.log(parents);

// iterate through each parent, change their background color (use function below)
// Array.from(parents).forEach((parent) => {
//   changeColor(parent);
// });

// parent - querySelector - returns a single element
// let parent = document.querySelector(".parent");
// changeColor(parent);

// parent - querySelectorAll
// let parents = document.querySelectorAll(".parent"); //nodeList
// console.log(parents);
// NOTICE - When using querySelector all. We did not have to CONVERT to an array.
// parents.forEach(changeColor);

// create a function to change bg color of the elements passed in
function changeColor(element) {
  element.style.backgroundColor = "#333";
}

// Selecting Children - TOP DOWN ----------------------------------------------------
// let parents = Array.from(grandparent.children);
// parentOne
// let parentOne = parents[0];
// childTwo
// let childTwoOfParentOne = parentOne.lastElementChild;
// changeColor(childTwoOfParentOne);

// let children = document.querySelectorAll(".child");
// changeColor(parentOne);

// let children = grandparent.querySelectorAll(".child");
// console.log(children);

// Selecting Cildren - BOTTOM UP ----------------------------------------------------
let childOne = document.querySelector(".child");
// let parent = childOne.parentElement;
// let grandparentAlt = parent.parentElement;
// changeColor(parent);
// changeColor(grandparentAlt);

let grandparentAltAlt = childOne.closest(".grandparent");
// console.log(grandparentAltAlt);
changeColor(grandparentAltAlt);

// Selecting Siblings ----------------------------------------------------
let secondParent = document.querySelector(".parent").nextElementSibling;
let secondChild = secondParent.querySelector(".child").nextElementSibling;
changeColor(secondParent);
changeColor(secondChild.previousElementSibling);
