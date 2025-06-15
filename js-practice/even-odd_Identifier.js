// 📝 Problem Statement:
// Write a function that takes an array of numbers and prints whether each number is even or odd.
const numbers = [21, 44, 67, 100, 33];
const checker = (arr) =>
{
    for(let num of arr){
        if(num%2==0){
            console.log(`${num} is even`);
        }
        else{
            console.log(`${num} is odd`);
        }
    }
}
checker(numbers);