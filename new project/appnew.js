// document.body.style.backgroundColor ='yellow
// document.querySelector('h2').innerText = 'Tessy'

// change the name of the h2 element in our indexfile to my name
// const btn = document.querySelector(".res");
// const heading = document.querySelector("h2");

// function changeName() {
//   heading.innerText = "Tessy";
// }

// btn.addEventListener("click", changeName);

// to decrease the h2 number

const heading = document.querySelector("h2");
const btn = document.querySelector(".dec");
const btn3 = document.querySelector(".res");
const btn2 = document.querySelector(".inc");
const body = document.querySelector("body");

function Decrease() {
  heading.innerText--;
  if (heading.innerText < 0) {
    body.style.backgroundColor = "yellow";
  }
}
btn.addEventListener("click", Decrease);

function reset() {
  heading.innerText = 0;
  if (heading.innerText <= 0) {
    body.style.backgroundColor = "red";
  }
}
btn3.addEventListener("click", reset);

// // function to increase the h2 number

function increase() {
  heading.innerText++;
  if (heading.innerText++ > 0) {
    body.style.backgroundColor = "green";
  }
}
btn2.addEventListener("click", increase);
