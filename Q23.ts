// 23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


let number: number = 5;
console.log("Is number == 5? I predict True.");
console.log(number == 5); // True

console.log("Is number === '5'? I predict False.");
console.log(number === 5); // False

let x: number = 10;
let y: number = 20;

console.log("Is x < y? I predict True.");
console.log(x < y); // True

console.log("Is x > y? I predict False.");
console.log(x > y); // False

let isSunny: boolean = true;
let isRainy: boolean = false;

console.log("Is it sunny and not rainy? I predict True.");
console.log(isSunny && !isRainy); // True

let fruit: string = 'apple';

console.log("Is fruit equal to 'banana' or 'cherry'? I predict False.");
console.log(fruit === 'banana' || fruit === 'cherry'); // False

let age: number = 18;

console.log("Is age less than 21 and not equal to 18? I predict False.");
console.log(age < 21 && age !== 18); // False

console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18); // True

let hasPermission: boolean = true;
let isLoggedIn: boolean = false;

console.log("Is the user logged in and has permission? I predict False.");
console.log(isLoggedIn && hasPermission); // False

console.log("Is either the user logged in or has permission? I predict True.");
console.log(isLoggedIn || hasPermission); // True

