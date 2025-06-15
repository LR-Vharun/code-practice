const lists=[
    {name:"gagan gandu", age:22},
    {name:"banu", age:22},
    {name:"jathin lavde", age:22},
];
/* for(let guy of lists){
    console.log(`Name : ${guy["name"]}, Age : ${guy.age} `);
} */

/*     for (let guy of lists) {
  for (let key in guy) {
    console.log(`${key} : ${guy[key]}`);
  }
  console.log("-----");
}
const game = {
  title: "Elden Ring",
  genre: "RPG",
  rating: 9.5
};

for (let k in game) {
  console.log(`${k} : ${game[k]}`);
} */

  let heroes = ["Ironman", "Spiderman", "Thor"];
// 1. Add "Hulk" to the end
// 2. Remove first hero
// 3. Add "Captain America" to the start
// 4. Replace "Thor" with "Doctor Strange"
// 5. Print final array
heroes.push("Hulk");
heroes.shift();
heroes.unshift("Captain America");
heroes.splice(2,1,"Doctor Strange");
console.log(heroes);

