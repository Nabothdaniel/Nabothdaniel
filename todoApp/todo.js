"strict mode"
//declare variables
let form = document.querySelector(".form");
let todoInput = document.querySelector("#todo-input");
let todoList = document.querySelector(".todo-output");
let todoRemove = document.querySelector('.todo-remove');
let msg = document.querySelector("#msg");
//adding event to form
form.addEventListener('submit', (e)=>{
   //prevents default action
   e.preventDefault();
 if(todoInput.value ===''){
   msg.classList.add('danger');

   msg.innerHTML ='please fill input field';

   msg.display ='block';

    setTimeout(()=>{
     msg.remove();
    },3000);
 } else{
     // creates new li tag
 let li = document.createElement('li');
 // add the class to li
 li.classList.add('todo-item');
 // gets the input from field
 li.appendChild(document.createTextNode(todoInput.value));
 // new btn tag
  let btn = document.createElement("button");
  //adds class name
  btn.classList.add('todo-remove');
 // appending text Node to tag
  btn.appendChild(document.createTextNode('X'));
  //appends to li
 li.appendChild(btn);
 // appends to ul tag
  todoList.appendChild(li);
  //clear fields value
  todoInput.value ='';
 }

});
//remove items
todoList.addEventListener('click', (e)=>{
     if(e.target.classList.contains("todo-remove")){
     if(confirm('areyou sure')) {
      let todo = e.target.parentElement;
      todoList.removeChild(todo) ; 
     } ; 
     } ;

   });


 
 
      



