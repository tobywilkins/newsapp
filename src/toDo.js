/*jslint node: true */

'use strict';

(function(exports) {

function ToDo(entry){
	this.entry = entry;
	this.complete = false;
}

	ToDo.prototype = {

	display: function() {
		return (this.entry);
	},

	makeComplete: function() {
		this.complete = true;
	},

	displayStatus: function() {
	var status = this.complete ? 'Completed' : 'Not Completed';
	return status;
	}
};
exports.ToDo = ToDo;

})(this);
