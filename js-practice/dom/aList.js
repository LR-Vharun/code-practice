const input=document.getElementById("ItemInput");
const button = document.getElementById("Add");
const list = document.getElementById("Items");

button.addEventListener("click",()=>{
const itemvalue= input.value;
if(itemvalue.trim !=""){
    const li =document.createElement("li");
    li.textContent=itemvalue;
    list.appendChild(li);
    input.value="";
   
}
});
