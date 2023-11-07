// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


function make_great01(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (const magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magician_names2: string[] = ["David Copperfield", "Jadugar 420", "Jadugar 007", "Samri jadugar"];

const great_magicians2 = make_great01([...magician_names2]); // Create a copy of the array

console.log("Original Magicians:");
show_magicians(magician_names2);

console.log("\nGreat Magicians (Separate Array):");
show_magicians(great_magicians2);
