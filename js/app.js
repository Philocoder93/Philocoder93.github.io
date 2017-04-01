"use strict";
(function(){
  angular
  .module("portfolio", [
    "main",
    "navigation",
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
      .state("projects", {
        url: "/projects",
        templateUrl: "/js/main/projects.html",
        controller: "projectsCrtl",
        controllerAs: "projectsVM"
      })
      .state("contact", {
        url: "/contact",
        templateUrl: "/js/main/contact.html",
        controller: "contactCrtl",
        controllerAs: "contactVM"
      })
    $urlRouterProvider.otherwise("/about")
  }

}())
