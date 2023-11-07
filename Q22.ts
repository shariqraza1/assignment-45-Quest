// 22.	Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const fruits1: string[] = ["apple", "banana", "cherry"];

const indexWithError = 3;
console.log(fruits1[indexWithError]); // This line will produce an "index out of range" error

// Correcting the error by accessing a valid index
const validIndex = 1; // this will show banana as apple is 0
console.log(fruits1[validIndex]); // This line will not show an error
