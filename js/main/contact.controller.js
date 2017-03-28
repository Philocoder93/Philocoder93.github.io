"use strict";
(function(){
  angular
  .module("main")
  .controller("contactCrtl", [
    contactCrtlFunction
  ])

  function contactCrtlFunction() {
    this.hello = function () {
      console.log("this is the other thing right here")
    }
  }
}())
