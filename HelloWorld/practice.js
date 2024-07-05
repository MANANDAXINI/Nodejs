const fs = require("fs");

// Read a file asynchronously
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
    } else {
        console.log("File content:", data);
    }
});

// Write to a file asynchronously
fs.writeFile("example.txt", "Hello, world!", (err) => {
    if (err) {
        console.error("Error writing to the file:", err);
    } else {
        console.log("File written successfully!");
    }
});

// Log the fs module to see its methods
console.log(fs);
