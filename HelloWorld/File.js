const fs = require("fs");

// Synchronous file write
fs.writeFileSync('./manan.txt', "Heyy Manan");

// Asynchronous file write
fs.writeFile('./text.txt', "helllo", (err) => {
    if (err) {
        console.error("Error writing to file:", err);
    } else {
        console.log("Successfully wrote to text.txt");
    }
});

// Reading synchronous file
const result = fs.readFileSync('./manan.txt', 'utf-8');
console.log(result);

// Reading asynchronous file
fs.readFile('./manan.txt', 'utf-8', (error, result) => {
    if (error) {
        console.error("Error reading file:", error);
    } else {
        console.log("Result is:", result);
    }
});

// Append date to file
const currentDate = new Date().toLocaleString();
fs.appendFileSync('./text.txt', ` ${Date.now()}Hello There\n`);

// Delete file
fs.unlinkSync('./text.txt');

// Log file stats
console.log(fs.statSync('./manan.txt'));

// Create directory synchronously
fs.mkdirSync('my-docs/a', { recursive: true });
