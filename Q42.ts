// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function make_great(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magician_names: string[] = ["David Copperfield", "Jadugar 420", "Jadugar 007", "Samri jadugar"];
const great_magicians = make_great(magician_names);

// console.log("\n Magicians:");
// show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians1(great_magicians);

