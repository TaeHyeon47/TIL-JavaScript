// // let js = "amazing";
// // if (js === "amazing") alert("JavaScript is FUN!");

// // let years = 3;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);
// console.log(javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2020;

// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// console.log(ageJonas > ageSarah);

// const isFullage = ageSarah >= 18;
// console.log(isFullage);

// console.log(20 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
*/

// const MarkWeights = 78;
// const MarksHeight = 1.69;
// const JohnWeights = 92;
// const JohnsHeight = 1.95;

// const MarkBMI = MarkWeights / MarksHeight ** 2;
// const JohnBMI = JohnWeights / JohnsHeight ** 2;
// const markHigherBMI = MarkBMI > JohnBMI;

// console.log(MarkBMI, JohnBMI, markHigherBMI);

/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
*/

// Hint: Use an if/else statement

// if (MarkBMI > JohnBMI) {
//   console.log(`Mark's BMI (${MarkBMI.toFixed(1)}) is higher than John's!`);
// } else {
//   console.log(`John's BMI (${JohnBMI.toFixed(1)}) is higher than Mark's!`);
// }

//////////////////////////////////////////
///// type conversion and coercion ///////
//////////////////////////////////////////

// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear); // 1991 '1991'
// console.log(Number(inputYear) + 18); // 2009
// console.log(Number("Jonas")); // NaN
// console.log(typeof NaN); // number
// console.log(String(23), 23); // '23' 23

// // type coercion
// console.log("I am " + 23 + " years old"); // "I am 23 years old"
// console.log(2 + 3 + 4 + "5"); // "95"
// console.log("10" - "4" - "3" - 2 + "5"); // "15"
// console.log("23" - "10" - 3); // 10
// console.log("23" * "2"); // 46
// console.log("23" / "2"); // 11.5

// let n = "1" + 1; // '11'
// n = n - 1; // 10
// console.log(n); // 10

/////////////////////////////////////
///// Truthy and Falsy Values ///////
/////////////////////////////////////

// So, falsy values are values that are not exactly false,
// but will become false when we try to convert them into a boolean.
// 5 falsy values: 0, '', undefined, null, NaN

// Everything else are our so-called truthy values.
// So, values that will be converted to true, for example,

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 1;
// if (!money) {
//   console.log("Don't spend it all ;) ");
// } else {
//   console.log("You should get a job!");
// }

// let height;
// height = 1;
// if (height) {
//   console.log("YaY! Height is defined");
// } else {
//   console.log("Height is Undefined");
// }

// const age = 18;
// if (age === 18) console.log("You just beame an adult:D");

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 22 === 23 -> FALSE
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log("7 is also a cool number");
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log('Why not 23?')

// const hasDrivesLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDrivesLicense && hasGoodVision);
// console.log(hasDrivesLicense || hasGoodVision);
// console.log(!hasDrivesLicense);

// const shouldDrive = hasDrivesLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const isTired = false; // C
// console.log(hasDrivesLicense || hasGoodVision || isTired);

// if (hasDrivesLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

//////////////////////////////////
///// The Switch Statement ///////
//////////////////////////////////

// const day = "friday";
// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the Weekend");
//   default:
//     console.log("Not a valid Day!");
// }

// // And remember that this actually does a strict comparison.
// // This was really designed for equality and not for like comparing stuff.

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the Weekend");
// } else {
//   console.log("Not a valid Day!");
// }

////////////////////////////////////////
///// Statements and Expressions ///////
////////////////////////////////////////

// An Expression is a piece of code that produces a value.
// ex) 3 + 4, 1991, true && false && !false

// The Statement is like a bigger piece of code that is executed
// and which does not produce a value on itself.
// Basically we write our whole programs as a sequence of actions.
// And these actions are statements.
// ex) if/else Statement
// if (23 > 10) {
//  const str = '23 is bigger';
// }
// It performs some actions, in this case, declaring this variable, but it doesn't produce a value.
// Now the string itself, again is an expression.

// Basically, whenever something ends with a semicolon, that's then a statement.
// JavaScript expects statements and expressions in different places.
// In a template literal, we can only insert expressions, but not statements.
// ex) console.log(`I'm ${2037 - 1991} years old.)

///////////////////////////////////////////////
///// The Conditional (Ternary) Opeator ///////
///////////////////////////////////////////////

const age = 23;
age >= 18
  ? console.log('I like to drink wine')
  : console.log('I like to drink water');

//? Remember that an operator always produces a value.
//? So in other words an operator is an expression, right.
// If we have a value we can then assign that value to a variable.
// So with this we can make the ternary operator really useful
// to basically conditionally declare variables.

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine';
} else {
  drink2 = 'water';
}
console.log(drink2);

// The ternary operator is really an expression, we can now use it for in a template literal.

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);
