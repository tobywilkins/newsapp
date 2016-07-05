/*jslint node: true */

'use strict';

function ToDo(entry){
	this.entry = entry;
	this.complete = false;
}

ToDo.prototype.display = function(){
return (this.entry);
};

module.exports = ToDo;
