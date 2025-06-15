const numbers=[5, 10, 15, 20];
console.log("using forEach");
numbers.forEach(n => console.log(n*2));

const squared = numbers.map(n=>n**2);
console.log("squared", squared);

const over10=numbers.filter(n=> n>10);
console.log("Over 10", over10);

const sum = numbers.reduce((a,b)=> a+b,0);
console.log(sum);

const mapped = numbers.map(num => {if (num%5==0) { return num;
    }})
    console.log(mapped);

    const onlyEven = numbers.filter(num => num%2==0);
    console.log(onlyEven);
    const re=[100, 50, 25];
    const su= re.reduce((nu,nextnum) => nu+nextnum,0);
    console.log(su);