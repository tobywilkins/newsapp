/*jslint node: true */
(function(exports){


// var ToDo = require('../src/toDo.js');
function ToDoList(ToDo) {
this.list = [];
this.ToDo = ToDo;
}

	ToDoList.prototype = {

		listAllToDos: function() {
			return this.list;
		},

		convertListToHTML: function() {
			var arrayLength = this.list.length;
			var returnArray = ['<ul>','\n'];
			for (var i = 0; i < arrayLength; i++) {
    	returnArray.push(('<li>' + this.list[i].display() + '</li>' + '\n'));
			}
			returnArray.push('</ul>');
			return returnArray.join("");
		},

		createToDo: function(value) {
			this.list.push(new this.ToDo(value));
		}
	};
	exports.ToDoList = ToDoList;
})(this);
