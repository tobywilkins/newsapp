function Todo(){
  this.list = {};

};

Todo.prototype.add = function(task) {
  this.list.push(task);
};
Todo.prototype.display = function() {
  return this.list;
};
