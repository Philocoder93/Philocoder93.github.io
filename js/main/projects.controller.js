"use strict";
(function(){
  angular
  .module("main")
  .controller("projectsCrtl", [
    projectsCrtlFunction
  ])
  
  function projectsCrtlFunction() {
    this.hello = function () {
      console.log("this is the first thing that I want to be in this thing")
    }
  }
}())
