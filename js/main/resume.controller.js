"use strict";
(function(){
  angular
  .module("main")
  .controller("resumeCrtl", [
    resumeCrtlFunction
  ])

  function resumeCrtlFunction() {
    this.hello = function () {
      console.log("this is the first thing that I want to be in this thing")
    }
  }
}())
