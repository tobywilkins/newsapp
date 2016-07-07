window.onload = function() {

  todolist = new ToDoList(ToDo);

  todolist.createToDo("Eat Breakfast");
  todolist.createToDo("Buy doggie biscuits");

  reload();

  document.getElementById("newtodo").addEventListener('submit', function(event) {
    event.preventDefault();
    todolist.createToDo(document.getElementById("task").value);
    reload();
  });

  function reload() {
    document.getElementById("todos").innerHTML = todolist.convertListToHTML();
  };

};
