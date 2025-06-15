/* const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car.model);
car.color = "Red";
console.log(car);
 */

const movie = {
  title: "Inception",
  director: "Christopher Nolan",
  year: 2010,
  rating: 8.8
};
for(mov in movie){
    console.log(movie[mov]);
}

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Sapiens", author: "Yuval Noah Harari" }
];

for(book in books){
    console.log(`"${books[book].title}" is written by ${books[book].author}`);
    books[book].published=true;
    console.log(`published? ${books[book].published}`);
}