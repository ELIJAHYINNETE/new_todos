
function addTask() {
  var taskInput = document.getElementById('input-box');
  var todoList = document.getElementById('list-container');
  //var addBtn = document.getElementById('btn');
  if (taskInput.value.trim() !== ''){
    var taskItem = document.createElement('li');
    taskItem.className = 'todo-item';
    var taskText=document.createElement('span');
      taskText.textContent = taskInput.value;
      taskItem.appendChild(taskText);

      
  
      var deleteButton = document.createElement('button');
       deleteButton.className = 'delete-button';
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = function ()
    {
      todoList.removeChild(taskItem);
    }
    todoList.appendChild(taskItem);
    taskInput.value='';


  
   }
  
  };

let keypress = document.querySelector("#input-box");
keypress.addEventListener('keydown',function (event){
  if (event.keyCode === 13){
    event.preventDefault();
    addTask(event);


  }
}  
);








