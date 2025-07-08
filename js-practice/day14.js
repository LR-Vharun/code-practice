const book={
    title: "Atomic Habits",
  author: "James Clear",
  pages: 320
};

const jsonData=JSON.stringify(book);
console.log(jsonData);

const parseBook = JSON.parse(jsonData);
console.log(parseBook.title);