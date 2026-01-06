// ======================================================
// ======================================================
// Node.js Playlist//Lecture 2: File System Module
// `======================================================
// =====================================================
// const file = require('fs'); // Importing the File System module


// ======================================================
// Using Built-in fs Module (Read/Write Files)
// ======================================================

// Write File-------------------------------------------------
// console.log(file); // Logging the module to the console

// file.writeFileSync(__dirname+"/index.txt","This index.txt file create by writeFileSync method"); // Creating a file named index.txt with specified content
// file.writeFile(__dirname+"/index2.txt","This index2.txt file create by writeFile method",function(err){
//     if(err) throw err;
//     console.log("File created successfully using writeFile method");
// })



// ======================================================
// Using Custom fileSystem Module
// ======================================================
// const fileSystem = require(__dirname + "/fileSystem");
// fileSystem().writeFileSync(__dirname + "/index1.txt", "This index1.txt file create by writeFileSync method"); // Creating a file named index.txt with specified content

// ======================================================




// Read File-------------------------------------------------


// Method 1: Synchronous Reading means it will block the execution until the file is read completely
// const data = file.readFileSync(__dirname + "/index.txt", "utf-8"); // Reading the content of index.txt file
// console.log(data); // Logging the content to the console


// Method 2: Asynchronous Reading means it will not block the execution and will use a callback function to handle the content once it's read

// file.readFile(__dirname + "/index.txt", "utf-8",function(error,data){
//     if(error) throw error   ;
//     console.log(data); // Logging the content to the console
// })



// Append File-------------------------------------------------
// file.appendFileSync(__dirname + "/index.txt", "\nThis is appended text using appendFileSync method"); // Appending text to index.txt file synchronously
// file.appendFile(__dirname + "/index.txt", "\nThis is appended text using appendFile method", function(err){
//     if(err) throw err;
//     console.log("File appended successfully using appendFile method");
// }); // Appending text to index.txt file asynchronously

// copy File-------------------------------------------------
// file.copyFileSync(__dirname + "/index.txt", __dirname + "/index_copy.txt"); // Copying index.txt to index_copy.txt synchronously
// file.copyFile(__dirname + "/index.txt", __dirname + "/index_copy2.txt", function(err){
//     if(err) throw err;
//     console.log("File copied successfully using copyFile method");
// }); // Copying index.txt to index_copy2.txt asynchronously

// Rename File-------------------------------------------------
// file.renameSync(__dirname + "/index.txt", __dirname + "/index_renamed.txt"); // Renaming index.txt to index_renamed.txt synchronously
// file.rename(__dirname + "/index_copy.txt", __dirname + "/index_copy_renamed.txt", function(err){
//     if(err) throw err;
//     console.log("File renamed successfully using rename method");
// }); // Renaming index_copy.txt to index_copy_renamed.txt asynchronously

// Delete File-------------------------------------------------
// file.unlinkSync(__dirname + "/index_renamed.txt"); // Deleting index_renamed.txt file synchronously
// file.unlink(__dirname + "/index_copy_renamed.txt", function(err){
//     if(err) throw err;
//     console.log("File deleted successfully using unlink method");
// }); // Deleting index_copy_renamed.txt file asynchronously




// mkdir Create Directory-------------------------------------------------
// file.mkdirSync(__dirname + "/NewFolder"); // Creating a new directory named NewFolder synchronously
// file.mkdir(__dirname + "/NewFolder2", function(err){
//     if(err) throw err;
//     console.log("Directory created successfully using mkdir method");
// }); // Creating a new directory named NewFolder2 asynchronously


// rmdir Remove Directory-------------------------------------------------
// file.rmdirSync(__dirname + "/NewFolder"); // Removing the directory named NewFolder synchronously
// file.rmdir(__dirname + "/NewFolder2", function(err){
//     if(err) throw err;
//     console.log("Directory Removed!!!");
// }); // Removing the directory named NewFolder2 asynchronously




// OS Module-------------------------------------------------
const os = require('os'); // Importing the OS module

console.log("Operating System Info:"); // Logging a header for OS information
console.log("Platform:", os.platform()); // Logging the operating system platform
console.log("Architecture:", os.arch()); // Logging the CPU architecture
console.log("CPU Info:", os.cpus()); // Logging detailed CPU information
console.log("Free Memory:", os.freemem()); // Logging the amount of free system memory
console.log("Total Memory:", os.totalmem());// Logging the total amount of system memory
console.log("Home Directory:", os.homedir()); // Logging the home directory of the current user
console.log("Uptime (seconds):", os.uptime()); // Logging the system uptime in seconds
console.log(os.cpus().length) // Number of CPU cores























































































