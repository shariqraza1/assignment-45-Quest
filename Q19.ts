// 19.	Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const dinnerGuests4: string[] = ["Quaid e Azam", "Junaid Jamshed"];

// Calculate the number of guests
const numberOfGuests4: number = dinnerGuests4.length;

// Print the number of people you are inviting to dinner
console.log(`You are inviting ${numberOfGuests4} people to dinner.`);

// Print personalized invitation messages to each person
for (const guest of dinnerGuests4) {
    const invitationMessage: string = `Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us for a meal.`;
    console.log(invitationMessage);
}
