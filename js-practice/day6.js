/* const printNumbers=(num) =>{
    for(let number of num)
    {
        if(number%2==0){
            console.log(number +" is even");
        }
        else{
            console.log(number + "is odd");
        }
    }
}
const tester=[23,12,24,435,456];
printNumbers(tester); */

/* const describeStudent = (student) =>{
    console.log("name : ",student["name"]);
    console.log("Age :",student.age );
    if (student.isEnrolled) {
        console.log("Status: Enrolled");        
    } else {
        console.log("Status: Not Enrolled");        
    }

}
const student = {
  name: "Vharun jfghdiuksj",
  age: 22,
  isEnrolled: true
};
describeStudent(student); */

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 320,
  isAvailable: true
};
console.log(book.title);
console.log(book.author);
console.log(book["pages"]);
const key="isAvailable";
console.log(book[key]);
