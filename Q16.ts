// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list

const dinnerGuests2: string[] = ["Quaid e Azam", "Abdul Sattat Eidhi", "Junaid Jamshed", "Mirza Ghalib"];

// Print that you found a bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
dinnerGuests2.unshift("Isaac Newton");

// Add one new guest to the middle of the array
const newGuestInMiddle: string = "Galileo Galilei";
const insertIndex: number = Math.floor(dinnerGuests2.length / 2);
dinnerGuests2.splice(insertIndex, 0, newGuestInMiddle);

// Use push() to add one new guest to the end of the list
dinnerGuests2.push("Charles Darwin");

// Print a new set of invitation messages
for (const guest of dinnerGuests2) {
    const invitationMessage: string = `Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us for a meal.`;
    console.log(invitationMessage);
}
