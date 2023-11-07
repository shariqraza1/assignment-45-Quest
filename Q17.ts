// 17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


const dinnerGuests3: string[] = ["Junaid jamshed", "Quaid e Azam", "Newton", "Abdul Sattar Eidhi", "Charles Darwin", "Nikola Tesla", "Galileo Galilei"];

// Print that you can invite only two people for dinner
console.log("Due to a delay, we can now invite only two people for dinner.");

// Remove guests from the list and inform them
while (dinnerGuests3.length > 2) {
    const removedGuest = dinnerGuests3.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

// Print a message to the two people still on your list
for (const guest of dinnerGuests3) {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
}

// Remove the last two names to have an empty list
dinnerGuests3.pop();
dinnerGuests3.pop();

// Print the list to ensure it's empty
console.log("Remaining Guests: " + dinnerGuests3);



