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
			var returnArray = ['<div id="list">\n<ul>','\n'];
			for (var i = 0; i < arrayLength; i++) {
    	returnArray.push('<li>' + this.list[i].display() +' - ' + this.list[i].displayStatus() + '</li>' + '\n');
			returnArray.push('<form method="post" action="/todo/complete/' + i + '">\n<input type="submit" class="complete_button" id="' + i + '" value="Complete">\n</form>');
			}
			returnArray.push('</ul>\n</div>');
			return returnArray.join("");
		},

		createToDo: function(value) {
			this.list.push(new this.ToDo(value));
		},

		getTodo: function(index) {
			return this.list[index];
		}
	};
	exports.ToDoList = ToDoList;
})(this);
