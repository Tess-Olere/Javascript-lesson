// // when we write our html and view it on the browser, the browser views it as DOM(DOCUMENT OBJECT MODEL)
// // To get a visual representation of a DOM, type on the brower and choose any of the images
// // Js is similar to css
// // - select the element pr group of element you want to affect
// // - Decide the effect you want to apply to the selection
// // There are very different ways to apply the effect
// //===========================================================================================
// //example
// // document.body.style.background = "blue";
// // document.body.style.color = "white";
// // document.getElementById("btn").style.color = "red";
// //========================================================================================
// // lets assign to a variableif there are difffernt things/multiple things on the element to avaoid writing document. Avoid dry0out(dont repeat yourself)

// // let btn = document.getElementById("btn").style;
// // btn.color = "red";
// // btn.backgroundColor = "green";

// // So lets dive into it proper
// //The process of reaching and selecting elements is called querrying the DOM(document object model), and we ave diff methods of querying d DOM,please see below

// //==================== getElementById('element'=========================
// // ---- getElementById('element') -- make sure d id matches
// // ---- We can assign 2a variable or jux go straight using document.getElementById continuosly
// // ---- Lets do basic tins, so we understand cox we wud go in2 complex situations wich wud inturn need d basic tins u learnt

// // lets select d h1 tag
// // document.getElementById("title").style.color = "yellow";
// let h1 = document.getElementById("title").style;
// h1.color = "green";
// // lets select the button
// let btn = document.getElementById("btn").style;
// btn.backgroundColor = "red";
// btn.color = "white";

// //============================getElementsByTagName('element')========================
// // HTML-Collection = array-like object
// // index, length properties but not all the array method would work on(cannot use forEach)

// let Header = document.getElementsByTagName("h2");
// // console.log(Header);
// // Header[1].style.color = "blue";
// // Header.forEach((singleHeader) => {
// //   singleHeader.style.color = "indigo";
// // });

// let newHeader = [...Header];
// newHeader.forEach((singleHeader) => (singleHeader.style.color = "indigo"));

// //===========================================getElementsByClassName('element')================================
// // - with ClassName we can select multiple elements, we would need HTML collection
// // - select the elementsor group of element you want
// // - Decide the effect you want to the selection

// let itemsListed = document.getElementsByClassName("special");
// console.log(itemsListed);
// itemsListed[0].style.color = "grey";

// // querySelector and querySelectorAll
// // querrySelector('any css selector) ---- selects single element
// // select the element or group of elements you want
// // Decide the effect you want to apply to the selection

// let para = document.querySelector(".para");
// console.log((para.style.color = "pink"));

// // querselectorAll()---select all, forEach world work
// const li = document.querySelectorAll(".special");
// console.log(li);
// li.forEach((singleli) => (singleli.style.color = "orange"));

// //===============================================================================================
// //INNERTEXT
// let pTag = document.querySelector(".theresa");
// console.log(pTag.innerText);
// pTag.innerText += " and she is a senior Dev";

// let h3 = document.querySelector("h3");
// console.log(h3);
// console.log(h3.innerText);
// // document.write(h3.textContent);
// console.log(h3.textContent);

// // innerHTML
// let html = document.querySelector(".html");
// console.log(html);
// html.innerHTML = "<h1> We go change am</h1>";

// // changing attribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "http://www.facebook.com");
// link.innerText = "link to facebook";
// //or
// // let a = document.querySelector("a");
// // console.log(a);
// // a.innerText = "link to facebook";

// //ClassName
// //classList
// const first = document.querySelector("#first");
// const second = document.querySelector("#second");
// const third = document.querySelector("#third");
// const classValue = first.className;
// console.log(classValue);

// // lets check if an element has a class using contain
// let result = second.classList.contains("colors");
// console.log(result);
// if (result) {
//   console.log("it has a class of colors");
// } else {
//   console.log("E no get am o!");
// }

// Events
// Select elements
// addEventListener()
// what event, what to do
const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changeColor() {
  let hasClass = heading.classList.contains("red");
  console.log(hasClass);
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}
btn.addEventListener("click", changeColor);
