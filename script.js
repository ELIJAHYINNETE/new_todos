let taskInput = document.getElementById("input-box");
const enter= document.getElementById("btn")
let todoList = document.getElementById('list-container');
let ulEl=document.getElementById("list-container")
let itemsel=document.getElementById("itemsEl")
let typed=[]
let theList=""
let clearAll= document.getElementById("clearEl")


enter.addEventListener("click",function(){
  typed.push(taskInput.value)
  let lastElment= typed[typed.length -1]
  for (let i = 0; i<typed.length; i++){
    itemsel.textContent= i+1 + " items"
    
   
   
   
  }
  theList +=` 
  <li>
  <input type="checkbox" id="chckBox" >${lastElment}
  </li>`
  


  ulEl.innerHTML=theList
  taskInput.value=""

  


})


document.addEventListener('keypress', (event)=>{

  let keyCode = event.keyCode ? event.keyCode : event.which;
  if(keyCode === 13) {
    btn.click();
  } 
});

clearAll.addEventListener("click",function(){
  typed=[]

  ulEl.innerHTML=""
  itemsel.textContent= "No item"
})


   









