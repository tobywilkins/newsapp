'use strict';

function ToDo(entry){
	this.entry = entry
	this.complete = false
};



ToDo.prototype.display = function(){
	return (this.entry + ', ' + this.complete)
};

module.exports=ToDo