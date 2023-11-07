// 12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const names1: string[] = ["Ali", "Baber", "Kashif", "Kiran"];

for (const name of names1) {
    const message: string = `Hello, ${name}! Have a great day!`;
    console.log(message);
}
