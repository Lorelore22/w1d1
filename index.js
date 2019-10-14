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

let x = 0;

// add 1
x = x + 1;
// same as
x += 1;

// subtract 2
x = x - 2;
// same as
x -= 2;

// multiply by -3
x = x * -3;
x *= -3;

// divide by 4
x = x / 4;
x /= 4;

// to the power of 5
x = x ** 5;
x **= 5;

// remainder of the division by 6
x = x % 6;
x %= 6;

// String

// const greeting = Hello; ❌
const greeting = "Hello";
// prettier-ignore
const lastName = 'Weiler';
const campus = `Berlin`;

// backticks `` can be useful for multiline strings
const text = `this
is
a
multiline
string`;

let customGreeting = greeting + " " + lastName + " from " + campus;

// customGreeting = customGreeting + "!"
customGreeting += "!"; // shorthand operator

const name = "Svenja";

const initials = name[0] + lastName[0];

// the .length property of strings gives us the count of characters in a string
// customGreeting.length; // 25
const exclamationMark = customGreeting[customGreeting.length - 1];

// indexOf returns the index of the first occurrence of a string in a given string, case sensitive

"Hello".indexOf("H"); // 0;
"Hello".indexOf("l"); // 2;
greeting.indexOf("ello"); // 1;

// if no occurence was found, the index that will be returned is -1
greeting.indexOf("x"); // -1
greeting.indexOf("ello!"); // -1

// lastIndexOf returns the index of the last occurrence
greeting.lastIndexOf("l"); // 3

// slice returns a substring from a string with a given range that can be specified as arguments

// the first parameter is the position where the substring should start (included)
firstName.slice(0, 3); // "Mon"

firstName.slice(3); // "tasar"

// toLowerCase() and toUpperCase() return the lowercase/uppercase version of a string
customGreeting.toUpperCase(); // "HELLO WEILER FROM BERLIN!"

"Hello!".toLowerCase();
// "hello!"

// Immutability

// customGreeting =
customGreeting.toUpperCase();

// immutability means a value cannot be altered
city; // "Lisbon"
city[0] = "l";

city; // "Lisbon"

city = "lisbon";

city; // "lisbon"

city[0]; // 'l'
// reassigning `city` by concatenating the first character uppercased and the remainder of the string
city = city[0].toUpperCase() + city.slice(1);

// Strings and all the primitives are immutable
