// 41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians01(magicians1: string[]): void {
    for (const magician of magicians1) {
        console.log(magician);
    }
}

const magician_names1: string[] = ["David Copperfield", "Jadugar420", "Jadugar007", "Samri Jadugar"];

show_magicians01(magician_names1);

