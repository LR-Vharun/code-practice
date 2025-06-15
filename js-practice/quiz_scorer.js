// Mini Project: Quiz Scorer 🧠
// 🔸 Challenge:
// Write a program that:

// Stores a list of quiz questions with their correct answers.

// Takes a set of user answers (for now, hardcoded).

// Compares them and prints:

// Each question and whether the user was correct ✅ or not ❌

// A final score out of 5

let quiz=[
    {question: "what is the capital of france", answer:"Paris"},
    {question:"what is 2+2?", answer:"4"},
    {question:"what color is the sky ", answer:"Blue"},
    {question:"What is the capital of India",answer:"New Delhi"},
    {question:"What planet do we live on?", answer:"Earth"}
];
let userAnswers=["Paris","4","Green","Delhi","Earth"];
let score =0;

for(let i=0;i<quiz.length;i++ ){
    console.log(`Q${i+1}: ${quiz[i].question}`);
    if(userAnswers[i].toLowerCase()===quiz[i].answer.toLowerCase()){
        console.log("Correct");
        score++;
    }
    else{
        console.log("Incorrect, correct answer is ", quiz[i].answer);
    }
    console.log("-------");

console.log("Final score = "+score+"/"+quiz.length);
}