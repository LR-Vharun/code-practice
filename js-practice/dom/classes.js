class car{
    constructor(brand,model,year){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }

details()  {
    console.log(`${this.brand} ${this.model} ${this.year}`);
}}
const c1=new car("Toyota", "Camry", 2021);
c1.details();