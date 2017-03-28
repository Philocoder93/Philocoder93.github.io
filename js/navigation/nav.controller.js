"use strict";
(function(){
  angular
  .module("navigation")
  .controller("navigation", [
    "$state",
    navigationFunction
  ])

  function navigationFunction($state) {
    this.update = function () {
      var state = $state
      this.state = state
    }
    this.update();
  }
}())
