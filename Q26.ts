// 26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.


// Version where the alien's color is 'green' (if block)
const alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    console.log("The player just earned 10 points for shooting the alien.");
}

// Version where the alien's color is 'yellow' (else block)
const alien_color_yellow: string = 'yellow';

if (alien_color_yellow === 'green') {
    console.log("The player just earned 5 points for shooting the green alien.");
} else {
    console.log("The player just earned 10 points for shooting the alien.");
}
