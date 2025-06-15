const prompt = require("prompt-sync")();
const username= prompt("Enter the user name");
const password = prompt("Enter password");

    if (username == "Vharun" && password=="1234")
    {
        console.log("Login successful!");
    }
    else if(username == "Vharun" && password!="1234"){
        console.log("Incorrect password");
    }
    else if(username != "Vharun" ){
        console.log("Useer not found");
    }
    else console.log("Wtf");

