/* let i;
for(i=1;i<=5;i++){
    console.log(i);
}

// Challenge 2: Print Even Numbers from 2 to 10
//Write a program to print even numbers between 2 and 10 using a while loop.
let j=2;
while(j<=10){
    console.log(j);
    j+=2;
}

//     🧩 Challenge 3: Loop Through an Array
// Create an array of your 5 favorite movies and print each one using a for...of loop.
let movies=["Inceptio","Interstelar","Shawshanks","mtrix","spirited away"];
for(let moive of movies){
    console.log(moive);
} */

/* function greet(){
    console.log("Welcome to day5 !");
}
greet ();

function printInfo(name,age){
    console.log(`${name} is ${age} years old.`);
}
printInfo("vharun",22);

function add(a,b){
    return a+b;
}
let result = add(5,5);
console.log(result);
function isEligible(age){
    if(age>=18){
    return "eligible";
    }

    else return "Not eligible";
}
console.log("the user is ",isEligible(50)); */


const greet=(name)=>{
    console.log(`Hello ${name}`);
}
greet("Vharun")

const greeet= (name,aged)=> console.log(`hello ${name}: age${aged}`);
greeet("Harun", 23);

const multiply =(a,b)=> {return a*b};
console.log("Results of multiplication of 5*5", multiply(5,5));