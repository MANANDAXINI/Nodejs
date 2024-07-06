const fs = require("fs");
const os = require("os")

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

//Blocking 
console.log("1")
//in blocking that is synchronous request to server the server of nodejs will execute  1 first then it will execute to read contact.txt and then will print 2 since it is blocking it will block 2 until contact is read 
console.log(fs.readFileSync('./Contacts.txt','utf-8'))
console.log("2")

//non blocking

console.log("1")
// in non blocking it will execute  1 then wll execute 2 untill the execution of the contact.txt takes place that means it will print 1 2  and then read contact.txt it will no wait for contact.txt to execute2
console.log(fs.readFile('./Contacts.txt','utf-8', (err,result)=>{
    if(err){
        console.log("error is",err)
    }

    else{
        console.log("result is",result)
    }
}))
console.log("2")
console.log("3")


console.log(os.cpus().length)
