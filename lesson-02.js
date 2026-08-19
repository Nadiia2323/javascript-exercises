"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const brandName = "Johnny's Bakery"; // The brand name cannot change, so I used const.
const location = "Bakery Street, 12"; // The location is fixed, so I used const.
let dayOff = "Saturday"; // The day off could change according to the company's needs.
let numberOfEmployees = 12; // The number of employees can change over time.
const owner = "Johnny Smith"; // The owner's name stays the same, so I used const.

// console.log(brandName);
// console.log(location);
// console.log(dayOff);
// console.log(numberOfEmployees);
// console.log(owner);

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
// console.log(typeof brandName);
// console.log(typeof location);
// console.log(typeof dayOff);
// console.log(typeof numberOfEmployees);
// console.log(typeof owner);
// console.log(typeof null); // typeof null returns "object", which is a famous historical bug in JavaScript.
// console.log(typeof undefined);

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.

// let age;
// const email = null;
// console.log(age);
// console.log(typeof age);
// console.log(email);
// console.log(typeof email);
// undefined means a variable has been declared but not assigned a value,
// while null means an empty value was assigned intentionally.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

const price = Number(priceText);
const count = Number(countText);
const flag = Boolean(flagText);
const orderNumber = String(23);
const number = Number("abc");

// console.log(price, typeof price);
// console.log(count, typeof count);
// console.log(flag, typeof flag);
// console.log(orderNumber, typeof orderNumber);
// console.log(number, typeof number); // Number() would produce NaN if the string were not a valid number, for example "abc".

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery"; // Changed const to let because the bakery name is reassigned.
const openingHour = 7; // Declared openingHour with const before assigning a value.
let loafCount = 12;
console.log(loafCount); // Moved the loafCount declaration before console.log() so it is defined before use.

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = "step 1";
let b = "step 2";
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
