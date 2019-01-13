'use strict';

// Declare app level module which depends on views, and core components
angular.module('myMovieApp', [
  'ngRoute',
  'myMovieApp.searchView',
  'myMovieApp.featuredView',
  'myMovieApp.version' ,
  'myMovieApp.commonServiceModule'
  
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/searchView', {
    templateUrl: 'scripts/search-module/searchView.html',
    controller: 'searchCtrl'
    
  })
  .when('/featuredView' , {
    templateUrl: 'scripts/featured-module/featuredView.html',
    controller: 'featuredCtrl'
  })
  .otherwise({redirectTo: '/searchView'});
}]);
