window.onload = function() {

todolist = new ToDoList(ToDo);

todolist.createToDo("Eat Breakfast");
todolist.createToDo("Buy doggie biscuits");

document.getElementById("todos").innerHTML = todolist.convertListToHTML();

document.getElementById("newtodo").addEventListener('submit', function(event) {
  alert('Hi this button works!');
  event.preventDefault();
});

};
