let name="Vharun";
let age=2;
let isStudent=true;

if (age>=18 && age<=60){
    console.log(name + " is eligibl for regular entry.");
    if(isStudent){
        console.log("You get a student discount. ");
        }
        else{
            console.log("You payfull fare");
        }

}else if(age>60){
    console.log(name + "gets a senior citizen pass");

}else if(age<10){
    console.log("child - Free entry");
}
else{
    console.log(name+ "is not eligible");
}