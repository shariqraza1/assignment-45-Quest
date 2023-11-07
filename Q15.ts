// // 15.	Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


const dinnerGuests1: string[] = ["Quaid e Azam", "Allama M Iqbal", "Mirza Ghalib"];

// Print the guest who can't make it
const guestWhoCantMakeIt: string = "Allama M Iqbal";
console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);

// Replace the guest who can't make it with a new person
const newGuest: string = "Abdul Sattat Eidhi";
const indexOfCanceledGuest: number = dinnerGuests1.indexOf(guestWhoCantMakeIt);

if (indexOfCanceledGuest !== -1) {
    dinnerGuests1[indexOfCanceledGuest] = newGuest;
}

// Print a second set of invitation messages
for (const guest of dinnerGuests1) {
    const invitationMessage: string = `Dear ${guest}, I would like to invite you to dinner. It would be an honor to have you join us for a meal.`;
    console.log(invitationMessage);
}

