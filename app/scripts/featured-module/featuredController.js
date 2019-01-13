'use strict';

angular.module('myMovieApp.featuredView', ['ngRoute','myMovieApp.commonServiceModule'])
.controller('featuredCtrl', ['$scope' , 'backendDataServices',
function($scope , backendDataServices) {
  this.imdbId = ['tt3682448','tt3896198'] ;
  $scope.featuredList = [];

  angular.forEach(this.imdbId,function(id){
      var url = "http://www.omdbapi.com/?i="+id+"&apikey=6ca4b34f&plot=full" ;
      backendDataServices.getBackendData(url)
      .then(function(response){    
          $scope.featuredList.push(response.data);
      }).catch(function(error){
        console.log(error);
      });
  });
}]);