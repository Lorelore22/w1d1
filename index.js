console.log("Hello World!");

// variable declaration
let age;

// variable assignment
age = 28;

// variable initialization
const firstName = "Montasar";

// let `lets` us reassign a variable and also declare a variable without initializing it
let company,
  city = "Berlin";

city = "Lisbon";

// const creates a `constant` that we cannot reassign
const nationality = "French";
// nationality = "German"; ❌

// variables declared with let or const cannot be re-declared

const a = "Madhavi"; // ❌
const value = 28; // ❌
const something = "Berlin"; // ❌

// const ageValue = 28; ❌
// const age = 28; ✅ naming is ok but a variable was already declared with the same name ❌

/*
this
is 
a
multi-line
comment
*/

// any line that is commented will not be executed

// variables where the name contains more than one word can be camelCased

const phoneNumber = "+3312345678";
const imageURL = "http://imgur.com/foo";

// Numbers
// integers
const mileage = 160000;

// floats
const price = 14.99;

// NaN
const notANumber = 21 / "a";

// Expression operators
// addition
4 + 2; // 6
// subtraction
0 - 6; // -6
// multiplication
3 * 6; // 18
// division
7 / 2; // 3.5
// modulo (remainder)
4 % 2; // 0
// exponentiation
console.log(3 ** 3); // 27
