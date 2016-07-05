'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo.js')

describe('create a to-do', function(){
  it('can instantiate a to-do object', function(){
      var toDo = new ToDo('Eat Breakfast');
      expect(toDo).to.be.an.instanceof(ToDo);
    })
  it('can display its value',function(){
  		var toDo = new ToDo('Eat Breakfast');
  		expect(toDo.display()).to.include('Eat Breakfast, false')
  })

})