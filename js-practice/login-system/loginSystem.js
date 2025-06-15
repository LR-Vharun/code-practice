const prompt = require("prompt-sync")({ sigint: true });
const fs = require("fs");

// Load users from file
const users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

const inputUsername = prompt("Enter username: ").trim();
const inputPassword = prompt("Enter password: ", { echo: "*" });

const foundUser = users.find(user => 
    user.username.toLowerCase() === inputUsername.toLowerCase()
);

if (!foundUser) {
    console.log("❌ User not found");
} else if (foundUser.password === inputPassword) {
    console.log("✅ Login successful! Welcome,", foundUser.username);
} else {
    console.log("🔐 Incorrect password");
}
