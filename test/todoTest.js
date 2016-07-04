var Todo = require("../src/todo");
console.log(Todo)
var assert = require('chai').assert;

describe('Todolist', function() {

  it('should create an entry in to do list', function() {
    var todo = new Todo();
    todo.add('breakfast')
    expect(todo.display()).to.include({'breakfast': false})
  })
});
