var plusAdults = document.querySelector(".plus-adults");
var minusAdults = document.querySelector(".minus-adults");
var adults = document.querySelector(".adults-num");
let numberAdults = 0;

var plusChildren = document.querySelector(".plus-children");
var minusChildren = document.querySelector(".minus-children");
var children = document.querySelector(".children-num");
let numberChildren = 0;

plusAdults.addEventListener("click", function () {
  numberAdults += 1;
  adults.value = numberAdults;
});

minusAdults.addEventListener("click", function () {
  numberAdults -= 1;
  adults.value = numberAdults;
});

plusChildren.addEventListener("click", function () {
  numberChildren += 1;
  children.value = numberChildren;
});

minusChildren.addEventListener("click", function () {
  numberChildren -= 1;
  children.value = numberChildren;
});
