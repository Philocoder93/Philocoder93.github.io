"use strict";
(function(){
  angular
  .module("main")
  .controller("homeCrtl", [
    homeCrtlFunction
  ])

  function homeCrtlFunction() {
    this.hello = function () {
      console.log("this is the thing right here")
    }
  }
}())
