// 18.	Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


const placesToVisit: string[] = [
    "Paris",
    "Tokyo",
    "New York",
    "Rome",
    "Bora Bora"
];

// Print the original order
console.log("Original Order:");
console.log(placesToVisit);

// Print in alphabetical order without modifying the original list
console.log("\nAlphabetical Order (not modifying original list):");
console.log([...placesToVisit].sort());

// Show that the original order is still intact
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

// Print in reverse alphabetical order without modifying the original list
console.log("\nReverse Alphabetical Order (not modifying original list):");
console.log([...placesToVisit].sort().reverse());

// Show that the original order is still intact
console.log("\nOriginal Order (still intact):");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("\nOriginal Order (reversed back):");
console.log(placesToVisit);

// Sort the list in alphabetical order (modifies the original list)
placesToVisit.sort();
console.log("\nAlphabetical Order (modified original list):");
console.log(placesToVisit);

// Sort the list in reverse alphabetical order (modifies the original list)
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order (modified original list):");
console.log(placesToVisit);

