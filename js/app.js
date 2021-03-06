"use strict";
(function(){
  angular
  .module("portfolio", [
    "main",
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    routerFunction
  ])

  function routerFunction($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("about", {
        url: "/about",
        templateUrl: "/js/main/about.html",
        controller: "aboutCrtl",
        controllerAs: "aboutVM"
      })
      .state("resume", {
        url: "/resume",
        templateUrl: "/js/main/resume.html",
        controller: "resumeCrtl",
        controllerAs: "resumeVM"
      })
    $urlRouterProvider.otherwise("/about")
  }

}())
