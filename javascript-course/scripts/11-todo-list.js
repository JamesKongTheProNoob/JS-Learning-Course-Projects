const todoList=['make dinner','wash dishes'];//the reason this gets registred inside of a function is because it is in the global scope, the renderToDoList function, after finding out that no toDoList exist, goes up a level to check the gloabl scope
renderToDoList();
function renderToDoList(){
  let todoListHTML=''
  for(let i = 0; i<todoList.length;i++){
    const todo=todoList[i]
    const html = `<p>${todo}</p>`
    todoListHTML+=html;
  }
  console.log(todoListHTML)
  document.querySelector('.js-todo-list').innerHTML=todoListHTML
}
function addTodo(){
   const inputElement=document.querySelector('.js-name-input');
   const name=inputElement.value;
   todoList.push(name);
   
   console.log(todoList);
    inputElement.value='';
  renderToDoList();
}