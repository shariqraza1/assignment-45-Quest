// 32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.



// Create a list of current users and new users
const current_users: string[] = ['Junaid', 'Ali', 'Baber', 'Aisha', 'Maria'];
const new_users: string[] = ['Baber', 'Saira', 'Dawood', 'aisha', 'Farooq']; // Note that 'aisha' is repeated with different case

// Loop through the new_users list to check for unique usernames
for (const new_username of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    const new_usernameLower = new_username.toLowerCase();

    // Use a flag to track if the username is found
    let usernameFound = false;

    for (const current_username of current_users) {
        if (current_username.toLowerCase() === new_usernameLower) {
            usernameFound = true;
            break;
        }
    }

    if (usernameFound) {
        console.log(`Username '${new_username}' is not available. Please enter a new username.`);
    } else {
        console.log(`Username '${new_username}' is available.`);
    }
}
