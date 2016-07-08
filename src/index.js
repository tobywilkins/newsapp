var request = new XMLHttpRequest();
request.open('GET', encodeURI('http://quiet-beach-24792.herokuapp.com/todos.json'));
request.onreadystatechange = function(response) {

  if (request.readyState === 4) {
    var doc = window.document.createElement("doc");
    var a = request.responseText;
    console.log(a);
    var b = JSON.parse(a);
    return b;
  }
};
request.send();




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

  document.getElementById('list').addEventListener('click', completeTodo, false);

  function completeTodo(e) {
    e.preventDefault();
    if(e.target !== e.currentTarget) {
      var todo = todolist.getTodo(e.target.id);
      todo.makeComplete();
    }
    e.stopPropagation();
    reload();
  }

  function reload() {
    document.getElementById("todos").innerHTML = todolist.convertListToHTML();
    document.getElementById('list').addEventListener('click', completeTodo, false);
  }

};
