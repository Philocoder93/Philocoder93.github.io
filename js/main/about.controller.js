"use strict";
(function(){
  angular
  .module("main")
  .controller("aboutCrtl", [
    aboutCrtlFunction
  ])

  function aboutCrtlFunction() {
    this.hello = function () {
      console.log("this is the other thing right here")
    }
  }
}())
