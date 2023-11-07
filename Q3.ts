// 3.	Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


const personName1: string = "Shariq Raza";

const lowercaseName: string = personName1.toLowerCase();
const uppercaseName: string = personName1.toUpperCase();
const titlecaseName: string = personName1.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

console.log("Typed/Input Name: " + personName);
console.log("Lowercase Name: " + lowercaseName);
console.log("Uppercase Name: " + uppercaseName);
console.log("Titlecase Name: " + titlecaseName);
