function btn() {
  var taskInput = document.getElementById('input-box');
 if (taskInput.value.trim() !== '')
{
  var taskItem = document.createElement('li');
  taskItem .className = 'todo-item';
  var taskText = document.createElement('span');
  taskText.textContent = input-box.value;
  taskItem.appendChild(taskText);


  {
    taskList.removeChild(taskItem);
  }
  taskList.appendChild(taskItem);
  taskInput.value='';

}
}











//  function addTask(){
// const listContainer = document.getElementById("list-container");
//  var inPut = document.getElementById("newInput");
//  if(inPut.value.trim() !== ''){
//    var taskItem = document.childElement('li');
//    taskItem.className = 'todo-item';
//    var taskText = document.createElement('span');
//   taskText.textContent = inPut.value;
//    taskItem.appendChild(taskText);
//  }
//  }


// inputBox.value = "";
//     saveData();
//  listContainer.addEventListener("click", function (e){
//     if(e.target.tagname === "LI"){
//         e.target.classList.toogle("checked");
//         saveData()
//     }
//     else if(e.target.tagname === "SPAN"){
//         e.target.parentElement.remove();
//         saveData()
//     }
//   },false);

//   function saveData(){
//     localStorage.setItem("data", listContainer.innerHTML);
//   }
//   function showTask(){
//     listContainer.innerHTML = localStorage.getItem("data");
//   }
//   showTask();

