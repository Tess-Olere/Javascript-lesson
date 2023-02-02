import { DATA, PEOPLE } from "./e.js";
console.log(DATA);
console.log(PEOPLE);

//VARIABLES, VALUES AND DECLARATORS
//Variables are storage facility for storing data or values.
//Values are just pieces of data
//Declarators are used in declaring variables(let,const,var)

let name = "Nathan";
let age = "21";
console.log(name);
console.log(age);
//Var
var country = "Nigeria";
console.log(country);
var tribe = "Yoruba";
console.log(tribe);
//Const
const PIE = 3.142;
console.log(PIE);

//let vs cconst vs var
//var --declare, redeclare and re-assign

var gender = "male"; //declare
var gender = "female"; //re-declare
gender = "transgender"; //re-assign
console.log(gender);

//let --declare and re-assign
let state = "Lagos";
state = "Delta";
console.log(state);

//const --declare
const FULLNAME = "Chris";
console.log(FULLNAME);

//constrains in Variable meaning
//--- variable names can only contain letters, numbers, underscore, dollar sign but cannot start with a number
//--Don't give spaces between variable names, use carmel casing
//--Reserved names cant be used as a variable name, since it's reserved
//--Please when naming a variable, use meaningful names(be descriptive)
//--By convention don't start variable names with uppercase except for const

//  DATA TYPES
//  Strings-- used for storing letters and they are denoted by a single or double quote
//  numbers--used for numbers
//  booleans-- used for true or false statement
//  null--empty
//  undefined
//  object(arrays,dates)-- used for holding more than one value and donated by {}
//  symbols
//  bigInt

//strings
let continent = "Africa";
console.log(continent);
let firstName = "Sandra";
let lastName = "Lekan";
let fullName = firstName + " " + lastName;

console.log(firstName);
console.log(lastName);
console.log(fullName);

//strings properties and methods
// length starts counding from 1
let email = "askme@gmail.com";
console.log(email);
console.log(email.length);
// getting positions
let city = "Surulere";
console.log(city[1]);

//string methods
let trainee = "damilare";
console.log(trainee);
// to upper case
let traineeUpperCase = trainee.toUpperCase();
console.log(traineeUpperCase);
// to lower case
let newTrainee = "EMMANUEL";
console.log(newTrainee);
let newTraineeLowerCase = trainee.toLowerCase();
console.log(newTraineeLowerCase);
// indexof()
// indexof starts counting from 0
let newEmail = "techstudio@gmail.com";
console.log(newEmail);
let newEmailIndexof = newEmail.indexOf("t");
console.log(newEmailIndexof);
// lastindexof
let applicant = "Rapheal";
console.log(applicant);
let lastIndexOfApplicant = applicant.lastIndexOf("a");
console.log(lastIndexOfApplicant);
//slice()
let religion = "Christainity";
console.log(religion);
let sliceReligion = religion.slice(0, 6);
console.log(sliceReligion);
// replace()
let profession = "developer";
console.log(profession);
let replaceProfession = profession.replace("d", "z");
console.log(replaceProfession);

const Country = "Ghana";
console.log(Country);

let State = "Accra";
console.log(State);

let Continent = "Africa";
console.log(Continent);

// number
let year = 2022;
console.log(year);
let score = 100;
console.log(score);
let score2 = 200;
console.log(score2);
// math operators
// +, -, *, **, %
let finalScore = score + score2;
console.log(finalScore);

let minus = score - score2;
console.log(minus);

let multiply = score * score2;
console.log(multiply);
let divide = score2 / score;
console.log(divide);

console.log(200 ** 4);

let num = 20;
console.log(num);
let num2 = 3;
console.log(num2);
let indices = num ** num2;
console.log(indices);

let modulus = num % num2;
console.log(modulus);

//ASSIGNMENT
// to upper case
let animal = "Hippopotamus";
console.log(animal);
let animalA = animal.toUpperCase();
console.log(animalA);

//  to lower case
let newAnimalA = animal.toLowerCase();
console.log(newAnimalA);

// to get position of t
let animalAb = "Hippopotamus";
console.log(animalAb);
let newAnimalAb = animalAb.indexOf("t");
console.log(newAnimalAb);

// to get the position of the last o
let animalC = "Hippopotamus";
console.log(animalC);
let newAnimalC = animalC.lastIndexOf("o");
console.log(newAnimalC);

// get pot to show from Hippopotamus
let animalD = "Hippopotamus";
console.log(animalD);
let sliceAnimalD = animalD.slice(5, 8);
console.log(sliceAnimalD);

let animalE = "hippopotamus";
console.log(animalE);
let replaceAnimalE = animalE.replace("h", "b");
console.log(replaceAnimalE);

//================================================================
//Decremental and Incremental

let newYear = year + 1;
console.log(newYear);

//or

year++;
year--;
year += 2;
year *= 2;
console.log(year);

let continent1 = "Africa";
console.log(continent);

let language = "Pigin";
let language2 = " ENGLISH";
console.log(language + "" + language2);

let ghanaPopulation = 500;
console.log(ghanaPopulation);
let finLandPopulation = 800;
console.log(finLandPopulation);

let country1 = "Nigeria";
console.log(country);

let nigeriaPopulation = 1000;
console.log(nigeriaPopulation);

let halfNigeria = nigeriaPopulation / 2;
console.log(halfNigeria);

nigeriaPopulation++;
console.log(nigeriaPopulation);

console.log(nigeriaPopulation > finLandPopulation);

console.log(ghanaPopulation < finLandPopulation);

let description =
  country +
  " is in " +
  continent1 +
  " and it's " +
  nigeriaPopulation +
  " people speaks" +
  language;
console.log(description);

//concatinating variable with strings
let blog = 50;
let statements = "the blog has " + blog + " likes";
console.log(statements);

let traineeScore = 90;
let traineeName = "Sandra";
let school = "Aguda grammer school";
let response =
  "Theresa did you know " +
  traineeName +
  " attends " +
  school +
  "and scored " +
  traineeScore +
  "in her test";
console.log(response);

let newResponse = `Theresa did you know ${traineeName} attends ${school} and scored
${traineeScore} in her test`;
console.log(newResponse);

//=====================================================
let classAvailabe = "Javascript fullstack course";
let bootCamp = "Techstudio Academy";
let stateLocation = "Lagos";
let regFeeInNaira = 300;
let prospectiveTrainee = "Lekan";

let adminSay =
  "Hello " +
  prospectiveTrainee +
  " " +
  bootCamp +
  " offers " +
  classAvailabe +
  " in " +
  stateLocation +
  " and the registration fee in naira is " +
  regFeeInNaira;
console.log(adminSay);
// Template literals
let newAdminSay = `Hello ${prospectiveTrainee} ${bootCamp} offers ${classAvailabe} in ${stateLocation}
 and the registration fee in naira is ${regFeeInNaira}`;
console.log(newAdminSay);

//ARRAYS
// these are used for storing collections of strings,numbers, booleans and other data types and are represented by square brackets[]

let lekanFavFoods = ["beans", "banga-soup", "yam", "agbado"];
console.log(lekanFavFoods);

//Array properties
let lengthOfLekanFavFoods = lekanFavFoods.length;
console.log(lengthOfLekanFavFoods);

console.log(lekanFavFoods[0]);
lekanFavFoods[0] = "Plantain";
console.log(lekanFavFoods);

//Array methods
let includes = lekanFavFoods.includes("corn"); // boolean response
console.log(includes);
//join()
let join = lekanFavFoods.join("-");
console.log(join);
//concat()
let concat = lekanFavFoods.concat(["Egusi", "Ogbono"]);
console.log(concat);
//push
let push = lekanFavFoods.push("efo-riro");
console.log(push);
console.log(lekanFavFoods);
//pop()
let pop = lekanFavFoods.pop();
console.log(lekanFavFoods);
let pop1 = lekanFavFoods.pop();
console.log(pop1);

let colors = [];
colors.push("pink");
// or colors[0] = 'pink';
colors.push("orange");
colors[1] = "black";
console.log(colors);

//spread operator and destructuring
let numbers = [1, 2, 3, 4, 5, 6];
let newNumbers = [7, 8, 9, 10];
let allNumbers = numbers.concat(newNumbers);
console.log(allNumbers);
// with spread operator
let newCon = [...numbers, ...newNumbers];
console.log(newCon);
let number2 = numbers[0];
let number3 = numbers[1];
console.log(number2);
console.log(number3);

//destructuring
let names = [
  "Emma",
  "Theresa",
  "Lekan",
  "Sandra",
  "Iyamu",
  "Rapheal",
  "Wisdom",
  "Abubakar",
];
// console.log(names[0]);
// console.log(names[5]);
let [zero, second, third, Nigeria, ...rest] = names;
console.log(zero);
console.log(Nigeria);
console.log(third);
console.log(...rest);

//TYPEOF
let scoresss = 50;
console.log(scoresss);
console.log(typeof scoresss);
let pikinName = "Akin";
console.log(pikinName);
console.log(typeof pikinName);
let PC = ["dell", "macbook", "Hp", "Asus"];
console.log(PC);
console.log(typeof PC);
let cart = null;
console.log(cart);
console.log(typeof cart);
let destination;
console.log(destination);
console.log(typeof destination);

//ASSIGNMENT
let trainEE = [
  "Abubakar",
  "Nathan",
  "Jeje",
  "Damilare-F",
  "Shola",
  "Wisdom",
  "Akin",
  "Chris",
  "Theresa",
  "Sandra",
  "Illias",
  "Segun",
  "Rapheal",
  "Emma",
  "Lekan",
  "Iyanu",
  "Damilare-B",
  "Wahab",
];
console.log(trainEE);
trainEE[0] = "Pappi";
console.log(trainEE);

let add = trainEE.push("Amos", "Mike");
// console.log(add);
console.log(trainEE);

let popTrainee = trainEE.pop();
console.log(trainEE);

let add4 = ["Zack", "Bobby"];
let allTrainees = add4.concat(trainEE);
console.log(allTrainees);
//or
let allTraineEs = trainEE.unshift("Zack", "Bobby");
console.log(trainEE);

let shift = trainEE.shift();
console.log(trainEE);

// let trainees = ['Queen', 'Segun', 'Pius', 'Emeka'];
// console.log(trainees);

//================================================================
//Type conversion and coercion -- conversion is when we manually convert from one data type to
//another but coercion is when javascript does the conversion behind the scene for us.

//conversion
// let inputYear = '1985'; // this shows string
// console.log(inputYear);

let inputYear = Number("1985");
console.log(inputYear);
console.log(typeof inputYear);

let newNumber = Number("1986");
let addedNumber = newNumber + 18;
console.log(addedNumber);

//lets convert something thats not a number

let personName = Number("Eggy");
console.log(personName);

//coercion
console.log("I am 22 years old");
console.log("I am " + String(22) + " years old");
console.log("22" * 3);
console.log("22" > "2");
let z = Number("1") + 1;
let w = z - 1;
console.log(w);

let x = "1" + 1;
let y = x - 1;
console.log(y);

// Comparism operators
//>, <, ==, ===, !=, <=, <=
let YEAR = 2023;
console.log(YEAR > 2000);
console.log(YEAR < 2000);
console.log(YEAR >= 2000);
console.log(YEAR <= 2000);
console.log(YEAR != 2000);

//LOOSE COMPARISM OPERATOR ==, only checks for value and not data type
let SCORE = "100";
let SCORE2 = SCORE == 100;
let SCORE3 = SCORE != 100;
console.log(SCORE2);
console.log(SCORE3);

// strict comparism operator ===, checks for both value and data type
let SCORE4 = SCORE === 100;
let SCORE5 = SCORE !== 100;
console.log(SCORE4);
console.log(SCORE5);

//CONTROL FLOW - LOOPS AND CONDITIONAL STATEMENT

console.log("Lifting weight repeatition 1  🏋️‍♂️");
console.log("Lifting weight repeatition 2  🏋️‍♂️");
console.log("Lifting weight repeatition 3  🏋️‍♂️");
console.log("Lifting weight repeatition 4  🏋️‍♂️");
console.log("Lifting weight repeatition 5  🏋️‍♂️");
console.log("Lifting weight repeatition 6  🏋️‍♂️");
console.log("Lifting weight repeatition 7  🏋️‍♂️");
console.log("Lifting weight repeatition 8  🏋️‍♂️");
console.log("Lifting weight repeatition 9  🏋️‍♂️");
console.log("Lifting weight repeatition 10  🏋️‍♂️");

// for loop uses for-keyword, initializer, condition, final expression
for (let i = 0; i < 10; i++) {
  console.log("lifting weight repeatition" + i + " 🏋️‍♂️");
}

let guys = ["Emma", "Lekan", "Akin", "Iyanu", "Raphael", "Nathan"];
console.log(guys.length);
for (let i = 0; i < guys.length; i++) {
  console.log(guys[i].toUpperCase());
}

// while loop
let i = 0;
while (i < guys.length) {
  console.log(guys[i]);
  i++;
}

// for in loop
let babes = ["Sandra", "Theresa", "Fatima", "ada"];
for (let p in babes) {
  console.log(babes[p]);
}

// for of
for (let b of babes) {
  console.log(b.toLocaleUpperCase());
}

// CONDITIONAL STATEMENTS if, else, else if
let AGE = 50;
if (AGE === 50) {
  console.log("you don get am");
} else {
  console.log("invalid");
}

let password = "pas";
console.log(password.length);
if (password.length >= 12) {
  console.log("that's a very strong password");
} else if (password.length >= 8) {
  console.log("password is good");
} else if (password.length >= 4) {
  console.log("password is weak");
} else {
  console.log("Please password should be greater than 4 characters long");
}

//ASSIGNMENT
let Colors = ["blue", "pink", "black", "red"];

// for loop
for (let c = 0; c < Colors.length; c++) {
  console.log(Colors[c]);
}
// while loop
let c = 0;
while (c < Colors.length) {
  console.log(Colors[c]);
  c++;
}
// for in loop
for (let c in Colors) {
  console.log(Colors[c]);
}

// for of loop
for (let c of Colors) {
  console.log(c);
}

//==========================================================================================

// Logical Operators
// ||(double pipe) means logical or
// &&(ampersand) means logical and

// FOR LOGICAL AND
// True && True = True
// True && False = False
// False && True = False
// False && False = False

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// FOR LOGICAL OR
// True || True = True
// True || False = True
// False || True = True
// False || False = False

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

let PASSWORD = "pass@";
if (PASSWORD.length >= 7 && PASSWORD.includes("@")) {
  console.log("super strong password");
} else if (PASSWORD.length >= 5 || PASSWORD.includes("-")) {
  console.log("password is good");
} else {
  console.log("Password is'nt good");
}

// let newPassword = prompt("type a password");
// if (newPassword.length >= 12 && newPassword.includes("@")) {
//   alert("Very strong password");
// } else {
//   alert("password is'nt good");
// }

//Break and continue

let Result = [20, 40, 0, 50, 100, 15, 1, 5, 8, 9, 11];

for (let i = 0; i < Result.length; i++) {
  if (Result[i] === 50) {
    continue;
  }
  console.log(Result[i]);
}

for (let i = 0; i < Result.length; i++) {
  if (Result[i] === 0 || Result[i] === 50) {
    continue;
  }
  if (Result[i] === 15) {
    break;
  }
  console.log(Result[i]);
} // the result broke 0 and 50 out because we broke it initially

// EXERCISE
// Task
// Given an interger, n, perform the following conditional actions:

// if n is odd, print odd
// if n is even print even

// let n = prompt("Please type a number");
// if (n % 2 === 0) {
//   alert("even");
// } else {
//   alert("odd");
// }

//switch statement-- does thesame thing as the if statement
let points = "A";
if (points === "f") {
  console.log("You got a");
} else if (points === "B") {
  console.log("You got B");
} else if (points === "C") {
  console.log("You got C");
} else if (points === "D") {
  console.log("You got D");
} else {
  console.log("You don fail");
}

// SWITCH
let GRADE = "A";
switch (points) {
  case "A":
    console.log("You got A");
    break;
  case "B":
    console.log("You got B");
    break;
  case "C":
    console.log("You got c");
    break;
  case "D":
    console.log("You got D");
}

//EXERCISE
let SandraWeight = 60;
let SandraHeight = 10;
let EmmaWeight = 70;
let EmmaHeight = 9;

let SandraBmI = SandraWeight / SandraHeight ** 2;
console.log(SandraBmI);

let EmmaBmI = EmmaWeight / EmmaHeight ** 2;
console.log(EmmaBmI);

if (SandraBmI > EmmaBmI) {
  console.log("Sandra BmI is greater");
} else {
  console.log("Emma's BmI is greater than Sandra's BmI");
}

// Global scope,block and function scope
let AGES = 1000;
if (true) {
  console.log("inside 1st code block: " + AGES);
}
console.log("outside block of code: " + AGES);

let AGESs = 1000; // global scope
if (true) {
  let AGESs = 2000;
  console.log("inside 1st code block: " + AGESs); // block scope
  if (true) {
    let AGESs = 3000;
    console.log("inside 1st code block: " + AGESs);
  }
}
console.log("outside block of code: " + AGESs);

// ASSIGNMENT

let spartansFirstScore = 60;
let spartansSecondScore = 70;
let spartansThirdScore = 80;

let alphaFirstScore = 88;
let alphaSecondScore = 91;
let alphaThirdScore = 120;

let totalSpartans =
  spartansFirstScore + spartansSecondScore + spartansThirdScore;
console.log(totalSpartans);

let totalAlpha = alphaFirstScore + alphaSecondScore + alphaThirdScore;
console.log(totalAlpha);

let averageSpartans = totalSpartans / 3;
console.log(averageSpartans);

let averageAlpha = totalAlpha / 3;
console.log(averageAlpha);

if (averageSpartans > averageAlpha) {
  console.log("Spartans are the winners of the competition");
} else {
  console.log("Alphas are the winners of the competition");
}

// let winner =
//   averageAlpha > averageSpartans
//     ? "Alphas are the winners of the competition"
//     : "Spartans are the winners of the competition";
// console.log(winner);
// OR TERNARY OPERATOR
// let winners =
//   avaerageSpartans > averageAlpha
//     ? "Alphas are the winners of the competition"
//     : "Spartans are the winners of the competition";
// console.log(winners);

//===================================================================

// FUNCTIONS these are lines of code that performs a given task
// It's only when you call, invoke or run the function would work
// Three types of functions, declaration, expression and arrow function
// Function's are usable
// The keywork for function is function keyword, function name and a block of code

//FUNCTION DECLARATION
// it accepts hoisting(means a function can be invoke before writing the code)
function team() {
  let name = "Sandra";
  console.log(name + " is Theresa's Aunty");
}
team();

// Function expression
// it doesn't accept hoisting
let speak = function () {
  let name = "Illias";
  console.log(`${name}  didn't come today`);
};
speak();

// arrow function
// it doesn't accept hoisting
let color = () => {
  let myColor = "Yellow";
  console.log(myColor);
};
color();

// Parameters and arguments

function trainer(name) {
  let person = `Hi my name is ${name}`;
  console.log(person);
}

trainer("Eggy");

let surname = function (name) {
  let lastNaMe = "My name is " + name;
  console.log(lastNaMe);
};
surname("Tessy");

let greet = (greetings, name) => {
  let personName = `${greetings} Hi Theresa my name is ${name}`;
  console.log(personName);
};
greet("Good morning", "Emma");

// these can be used to calculate multiple users where each person needs to input their name
let calcAge = (name, age) => {
  let DOB = `${name} is ${2022 - age} years old`;
  console.log(DOB);
};
calcAge("Ralph", 1982);

// RETURNING VARIABLE FROM A FUNCTION
let programme = () => {
  let stack = "Javascript fullstack";
  console.log(stack);
  // note return keyword means that is the end of a function or code. it is usually the last thing in a code
  return stack;
};
let stack = programme();

let newApplicant = "Hi Chijioke did you know that tech-studio offers " + stack;
console.log(newApplicant);

let fees = [60, 80, 0, 120];
let peeps = ["Akin", "Chris", "Sandra", "Theresa"];
let setOfScores = [1, 0, 200];

// function details(sth) {
//   for (i = 0; i < sth.length; i++) {
//     console.log(sth[i]);
//   }
// }
// details(fees);

function details(sth, newSth) {
  for (i = 0; i < sth.length; i++) {
    if (sth[i] === 0) {
      continue;
    }
    console.log(sth[i]);
  }
  for (let i = 0; i < newSth.length; i++) {
    console.log(newSth[i].toUpperCase());
  }
}
details(fees, peeps);

//ASSIGNMENT

// team a

let calcAverage1a = (score1, score2, score3) => {
  let averageAlPha = score1 + score2 + score3;
  console.log(averageAlPha);
  let averageAlPhaScore = averageAlPha / 3;
  console.log(averageAlPhaScore);

  console.log(averageAlPha);
};
calcAverage1a(43, 21, 73);

let calcAverage1b = (sCore1, sCore2, sCore3) => {
  let averageSParTans = sCore1 + sCore2 + sCore3;
  console.log(averageSParTans);
  let averageSParTansScore = averageSParTans / 3;
  console.log(averageSParTansScore);
};
calcAverage1b(63, 55, 47);

function checkwinner(aveAlPha, aveSParTans) {
  if (aveAlPha >= 2 * aveSParTans) {
    console.log(`Alphas win (${aveAlPha} vs ${aveSParTans}) `);
  } else if (aveSParTans >= 2 * aveAlPha) {
    console.log(`Spartans win (${aveSParTans} vs ${aveAlPha}) `);
  } else {
    console.log("No team win");
  }
}

checkwinner(45.6, 55);

// team b

let calcAverage2a = (score1, score2, score3) => {
  let averageAlPha1 = score1 + score2 + score3;
  console.log(averageAlPha1);
  let averageAlPhaScore = averageAlPha1 / 3;
  console.log(averageAlPhaScore);
};
calcAverage2a(87, 55, 39);

let calcAverage2b = (sCore1, sCore2, sCore3) => {
  let averageSParTans1 = sCore1 + sCore2 + sCore3;
  console.log(averageSParTans1);
  let averageSParTansScore1 = averageSParTans1 / 3;
  console.log(averageSParTansScore1);
};
calcAverage2b(21, 33, 2);

function checkWiNner(aveAlPha1, aveSParTans1) {
  if (aveAlPha1 >= 2 * aveSParTans1) {
    console.log(`Alphas win (${aveAlPha1} vs ${aveSParTans1}) `);
  } else if (aveSParTans1 >= 2 * aveAlPha1) {
    console.log(`Spartans win (${aveSParTans1} vs ${aveAlPha1}) `);
  } else {
    console.log("No team win");
  }
}

checkWiNner(60.3, 18.6);

// CORRECTION TO THE ASSIGNMENT ABOVE

let calcAverage3 = (sCOre1, sCore2, sCore3) => (sCOre1 + sCore2 + sCore3) / 3;

let teamAlphA = calcAverage3(43, 21, 73);
let teamSpartaNs = calcAverage3(63, 55, 47);

console.log(teamAlphA);
console.log(teamSpartaNs);

function checkWinner(aveAlphA, aveSpartaNs) {
  if (aveAlphA >= 2 * aveSpartaNs) {
    console.log(`Alphas win ${aveAlphA} vs ${aveSpartaNs} `);
  } else if (aveSpartaNs >= 2 * aveAlphA) {
    console.log(`Spartans wins ${aveSpartaNs} vs ${aveAlphA}`);
  } else {
    console.log("No team wins");
  }
}

checkWinner(teamAlphA, teamSpartaNs);

// Higher order functions and call back functions
// Higher order functions accepts another function as an arguement or returns another function as a result
// Call back functions are functions passed to another function as an arguement and executed inside that function.

function sayHello() {
  let newGreet = "Hi";
  return newGreet;
}
let talking = sayHello();

let report = (talk) => {
  console.log(talk);
  let state = `${talk} Emma hope you are good?`;
  console.log(state);
};
report(talking);

// Object--- object literals, Math object, Dates
// Higher order function(forEach, map, filter,find,findIndex,reduce)
// DOM(Document object model)

// object, key and value pairs,denoted by curly braces

let client = [
  "Raphal",
  "Dayo",
  "black",
  "5",
  "developer",
  2022 - 1981,
  ["Nathan", "Emma", "Segun"],
];
console.log(client);

let customer = {
  firstName: "Raphael",
  lastName: "Dayo",
  complexions: "black",
  height: 5,
  occupation: "Developer",
  canDrive: true,
  friends: ["Nathan", "Emma", "Segun"],
  age: 2022 - 1981,
  date: Date(),
};
console.log(customer);
console.log(typeof customer);

let newCustomer = {
  country: "Nigeria",
  state: "Lagos",
};
console.log(newCustomer);

let allCustomers = { ...customer, ...[client] };
console.log(allCustomers);

// Dot vs Bracket notation
let latestApplicant = {
  firstName: "Emma",
  lastName: "Oseni",
  skinColor: "dark",
  tribe: "Esan",
  age: 40,
  address: {
    stateOfOrigin: "Edo",
    stateOfResidence: "Lagos",
    lga: "surulere",
  },
  favFood: ["banga", "egusi", "rice", "amala"],
  canDrive: true,
  profession: "Senior front-end dev",
};

// Dot notation [it is used to target anything inside an object]
let latestApplicantFirstName = latestApplicant.firstName.toLocaleUpperCase();
console.log(latestApplicantFirstName);
// accessing favfoods

let latestApplicantFavFood = latestApplicant.favFood.pop();
console.log(latestApplicantFavFood);
console.log(latestApplicant.favFood);
// accessing stateOfResidence in address
let latesApplicantAddress =
  latestApplicant.address.stateOfResidence.toUpperCase();
console.log(latesApplicantAddress);

// Bracket
let bracketsApplicantFirstName = latestApplicant["firstName"].toUpperCase();
console.log(bracketsApplicantFirstName);
// Accessing address
let bracketApplicantAddress =
  latestApplicant["address"]["stateOfResidence"].toUpperCase();
console.log(bracketApplicantAddress);

// Accessing favFood
let bracketApllicantFavFood = latestApplicant["favFood"][2];
console.log(bracketApllicantFavFood);

// Destructing objects
let account = {
  namess: "object",
  agess: 50,
  colorss: "black",
};

console.log(account);
let nameInAccount = account.namess;
console.log(nameInAccount);
let ageInAge = account.agess;
console.log(ageInAge);

let { namess, agess, colorss } = account;

console.log(namess);
console.log(agess);
console.log(colorss);
let remove = delete account.agess;
console.log(remove);
console.log(account);

// object method {they can have a function inside}
let passenger = {
  firstName: "Bayo",
  lastName: "Onyeka",
  year: 2022,
  busFareInNaire: 200,
  pocketMoneyInNaira: 1000,
  currentDate: Date(),

  calcBal: function () {
    let statement = `${passenger.firstName} has ${
      passenger.pocketMoneyInNaira - passenger.busFareInNaire
    } naira`;
    return statement;
  },
};

console.log(passenger.calcBal());

// Mr. Charles
// function sum(a, b) {
//   return a + b;
// }

// const numTotal = sum(2, 4);
// console.log(numTotal);

// //arrow function
// const sumArrowFunction = (a, b) => a + b;

// console.log("sumArrowFunction", sumArrowFunction(40, 70));

// function calcFoodTotal(food, tip) {
//   const tipPercent = tip / 100;
//   const tipAmount = food * tipPercent;
//   const total = sum(food, tipAmount);
//   console.log(total);
//   return total;
// }
// calcFoodTotal(600, 10);

// // loop
// // to get the index and the length
// const fruits = ["avaocado", "pineapple", "orange", "banana"];
// console.log(fruits[2]);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i, fruits[i]);
// }

// for (const fruit of fruits) {
//   console.log("new forloop", fruit);
// }

// let numbers2 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers2.length; i++) {
//   console.log(i, numbers2[i]);
// }

// for (const number of numbers2) {
//   console.log("numbers", number * 2);
// }
// // create a function that triples numbers and a loop inside
// const triple = (tripleNumber) => {
//   let tripleResult = [];
//   for (const tri of tripleNumber) {
//     tripleResult.push(tri * 3);
//   }
//   return tripleResult;
// };
// console.log("tri numbers", triple([1, 2, 3, 4, 5, 6]));

// // create a function that counts letter
// const letterCounter = (phrase) => {
//   let result = 0;
//   for (const letter in phrase) {
//     result = Number(letter) + 1;
//   }
//   // result.length will  still work
//   return result;
// };

// const phrase = "Today is thursday";
// console.log(letterCounter(phrase));

// const sumNumber = (numbers) => {
//   let result = 0;
//   for (const number of numbers) {
//     result = result + number;
//   }
//   return result;
// };
// let numb = [1, 2, 3, 4, 5, 6];
// console.log(sumNumber(numb));

// // letter frequency
// const letterFrequency = (phrase) => {
//   let frequency = {};
//   for (const letter of phrase) {
//     if (letter in frequency) {
//       frequency[letter]++;
//     } else {
//       frequency[letter] = 1;
//     }
//   }
//   return frequency;
// };
// console.log(letterFrequency("Today is a good day"));
// // map(higher order function)
// const number = [1, 2, 3, 4, 5, 6];
// const result = number.map((b) => console.log(b));

// const numberE = [4, 5, 6];
// const result1 = numberE.map((i) => i * 2);
// console.log(result1);

// const tripleH = (numbers) => {
//   return bn
// }

// ============================================================================
// This keyword
let person = {
  Segun: {
    firstName: "Segun",
    mass: 76,
    height: 1.99,
  },
  mariam: {
    firstName: "mariam",
    mass: 80,
    height: 2.1,
  },

  calcBMI: function () {
    let total = `${person.Segun.mass / person.Segun.height ** 2}`;
    return total;
  },

  calcBMI2: function () {
    let total = `${person.mariam.mass / person.mariam.height ** 2}`;
    return total;
  },
};

//   console.log(person.calcBMI());
//  console.log(person.calcBMI2());
//  console.log(person.calcBal3());

// CORRECTION
let segun = {
  firstName: "Segun",
  mass: 76,
  height: 1.99,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};
let ss = segun.calcBMI();
console.log(ss);

let mariam = {
  firstName: "mariam",
  mass: 80,
  height: 2.1,
  calcBMI2: function () {
    return this.mass / this.height ** 2;
  },
};
let mm = mariam.calcBMI2();
console.log(mm);

// HIGHER ORDER
// USING FOR LOOP

// for loop
for (let f = 0; f < DATA.length; f++) {
  console.log(DATA[f]);
}

// MAP METHOD
// It returns a new array
// It doesn't change the size of the original array
// Uses values from the original array
// It loops

let newData = DATA.map(function (datum) {
  return datum;
});
console.log(newData);

// forEach
// it doesn't return a new array
// it loops

PEOPLE.forEach(function (person) {
  console.log(person);
});
// or using a higher other function
let newPeople = function (singlePerson) {
  console.log(singlePerson);
};

PEOPLE.forEach(newPeople);

let anotherPerson = PEOPLE.map((nathan) => nathan);
console.log(anotherPerson);

// FILTER
//it loops
// it returns based on condition
for (let i = 0; i < PEOPLE.length; i++) {
  if (PEOPLE[i].name === "Simi") {
    console.log(PEOPLE[i]);
  }
}

let filteredPerson = PEOPLE.filter(function (p) {
  return p.name === "Simi";
});
console.log(filteredPerson);

//==========DATA LOOPING============
let newDaTa = DATA.map(function (datum) {
  return datum;
});

console.log(newDaTa);

// filterData

let filteredData = DATA.filter((evenFiltered) => evenFiltered.id % 2 === 0);
console.log(filteredData);

// findindex
let itemidx = DATA.findIndex(function (idx) {
  return idx.id === 2;
});
console.log(itemidx);

// find
let item = DATA.find(function (item) {
  return item.id === 4;
});
console.log(item);

// reduce
// it returns a call back for each element of an array
// the difference here is that reduce passes the result of this callback (the accumulator) from one array element to another
// it adds all the figures together

const numbered = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = numbered.reduce((acc, item) => {
  return acc + item;
}, 0);
console.log(sum);

//ASSIGNMENT 2
// let value1 = 275;
// let tip = (50 / 100) * 275;
// console.log(tip);
// let tip2 = (300 / 100)
// console.log(tip2);

// if (value1 > 50 && value1 < 300) {
//   let tip = 50 / 100;
//   let value1 = 275 / 100;
// }
// console.log(value1 - tip);

const companies = [
  { name: "company One", category: "Finance", start: 1981, end: 2003 },
  { name: "company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "company Eight", category: "technology", start: 1981, end: 1989 },
];

companies.forEach(function (companies) {
  console.log(companies.name);
});

const cOmpanies = companies.filter(
  (companies) => companies.end - companies.start >= 10
);
console.log(cOmpanies);

// or
for (let i = 0; i < companies.length; i++) {
  if (companies[i].end - companies[i].start >= 10) {
    console.log(companies[i]);
  }
}

const aGe = [30, 15, 10, 5, 40, 80, 2, 20, 21, 25];

const agE = aGe.filter(function (aGe) {
  if (aGe >= 21) {
    return true;
  }
});

console.log(agE);

let value = 275;

// (not correct)

// function calcFoodTotal(food, tip) {
//   const tipPercent = tip / 100;
//   const tipAmount = food * tipPercent;
//   const total = sum(food, tipAmount);
//   console.log(total);
//   return total;
// }
// calcFoodTotal(600, 10);

let cartArray = [
  { name: "Tshirt", price: 300, quantity: 3 },
  { name: "Tshirt", price: 400, quantity: 2 },
  { name: "Tshirt", price: 500, quantity: 1 },
  { name: "Tshirt", price: 500, quantity: 2 },
  { name: "Tshirt", price: 700, quantity: 3 },
  { name: "Tshirt", price: 800, quantity: 1 },
  { name: "Tshirt", price: 900, quantity: 4 },
];

let toTal = cartArray.map((cartArray) => {
  return cartArray.price * cartArray.quantity;
});

console.log(toTal);

const TotalCart = toTal.reduce((price, quantity) => {
  return price + quantity;
}, 0);
console.log(TotalCart);

// CORRECTION
const bill = 430;
const tiP = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tiP);
const statement = ` Bill was ${bill}, tip was $(tiP), and total was ${
  bill + tiP
}`;
console.log(statement);

//MATH OBJECT
let floor = 4.96666;
let floorResult = Math.floor(floor);
console.log(floorResult);

// ceil
let ceil = 4.0001;
let ceilResult = Math.ceil(ceil);
console.log(ceilResult);

// Round
let nums = 2.5;
let numResult = Math.round(nums);
console.log(numResult);

//POW
let pow = Math.pow(2, 2);
console.log(pow);
//or
let raiseTo = 2 ** 2;
console.log(raiseTo);

// RANDOM
// let random = Math.random();
// console.log(random);

// you use this method if you want a randon number of more than one
let random = Math.ceil(Math.random() * 6);
console.log(random);

// DATE
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];
let date = new Date();
console.log(date);

const month = date.getMonth();
console.log(months[month]);
const day = date.getDay();
console.log(day);
let yeAr = date.getFullYear();
console.log(yeAr);

let STATEMENT = `${days[day]} ${
  months[month]
} 0${date.getDate()} ${date.getFullYear()}
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(STATEMENT);

//JAVASCRIPT IS SYNCHROMNOUS IN NATURE
// SET TIMEOUT IS ASYNCHROMNOUS IN NATURE-- ITS A DALAYED FUNCTION
// SET INTERVALS MEANS THAT A PARTICULAR TIME, ELEMENTS SHOW SHOW

let interval = setInterval(() => {
  let date = new Date();
  console.log(date);
}, 1000);

setTimeout(function () {
  let delay = `Hi I would take some seconds to display`;
  console.log(delay);

  clearInterval(interval);
}, 8000);

//=============================DOM========================================
