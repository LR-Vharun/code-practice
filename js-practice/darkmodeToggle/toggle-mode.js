const button = document.getElementById("toggleBtn");
button.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "Switch to Light Mode";
   // document.body.innerHTML = "<h1>Everything was replaced</h1>";

  } else {
    button.textContent = "Switch to Dark Mode";
  }
});