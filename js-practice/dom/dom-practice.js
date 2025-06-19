// Select by class
const paragraphs = document.getElementsByClassName("description");
console.log(paragraphs); // HTMLCollection

// Select by tag
const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);

// Select first one with querySelector
const firstParagraph = document.querySelector(".description");
console.log(firstParagraph);

// Select all with querySelectorAll
const allDescriptions = document.querySelectorAll(".description");
console.log(allDescriptions);

firstParagraph.textContent = "Changed via JavaScript!";
//firstParagraph.innerHTML = "<strong>Bold content!</strong>";
firstParagraph.style.color = "blue";
firstParagraph.style.fontSize = "20px";
firstParagraph.style.backgroundColor = "yellow";

const newpara=document.createElement("p");
newpara.textContent="This was done dynamicaly"
newpara.style.fontSize="10px";
newpara.style.color="SlateBlue";
newpara.style.backgroundColor="Tomato";
document.body.appendChild(newpara)
firstParagraph.remove();
