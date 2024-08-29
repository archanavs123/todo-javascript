//selecting html elements

let TodoInput =document.querySelector(".to-in");
let TodoButton=document.querySelector(".to-btn");
let TodoList =document.querySelector(".todo-list")

//adding event listener
  TodoButton.addEventListener('click',addtodo);
  //event listener for delete
  TodoList.addEventListener('click',Delete);

  //add functions
  function addtodo(e){
// create todolist container
    const todoDiv = document.createElement('div')
    e.preventDefault();
    todoDiv.classList.add('todo')

    // create todo lisr
    const todoli = document.createElement('li')
  
    todoli.classList.add('todoItems')
    todoli .innerText=TodoInput.value
    todoDiv.appendChild(todoli)
    
    //trash button
    TodoList.appendChild(todoDiv)
    const trashbtn=document.createElement("button")
    trashbtn.classList.add('trash')
    trashbtn.innerText ="Delete"
    todoDiv.appendChild(trashbtn)

    // clear input
    TodoInput.value="";
  }
  //Dlete function
  function Delete(e){
    const item= e.target;
   
    if (item.classList[0] ==='trash'){
        const todo=item.parentElement;
        todo.remove();

    }
  }