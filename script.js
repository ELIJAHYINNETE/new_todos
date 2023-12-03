const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");
inputBox.addEventListener('keydown',(event) =>{
    if(event.key ==='Enter'){
        console.log('Enter key pressed!');
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li. appendChild(span);
    }
    inputBox.value = "";
    saveData();
});

 listContainer.addEventListener("click", function (e){
    if(e.target.tagname === "LI"){
        e.target.classList.toogle("checked");
        saveData()
    }
    else if(e.target.tagname === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
  },false);

  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }
  function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
  }
  showTask();