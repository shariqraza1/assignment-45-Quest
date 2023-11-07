// 36.	T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

function make_shirt1(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized T-shirt with the message: "${message}".`);
}

// Call the function with a specific size and message
make_shirt1("Large", "Hello, World!");


