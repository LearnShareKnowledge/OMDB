'use strict';

angular.module('myMovieApp.searchView', ['ngRoute','myMovieApp.commonServiceModule'])

.controller('searchCtrl', ['$scope' , 'backendDataServices', 
function($scope , backendDataServices) {
  

  $scope.getMoviews = function(){

    if($scope.selectedPlot!=undefined){
      this.plotName = $scope.selectedPlot ;
    }else{
      this.plotName = "";
    }
  
    this.url = "http://www.omdbapi.com/?t="+$scope.searchValue  +
              "&plot="+$scope.selectedPlot+
              "&apikey=6ca4b34f";
    backendDataServices.getBackendData(this.url)
    .then(function(response){    
        if(response.data.Response=="False"){
          $scope.movieNotFound = response.data ;
          $scope.movieData = false ;
        }else{
          $scope.movieData = response.data ;
          $scope.movieNotFound =false ;
          $scope.actors = response.data.Actors.split(',');
          $scope.writers = response.data.Writer.split(',');
          $scope.genres = response.data.Genre.split(',');
          $scope.languages =  response.data.Language.split(',');
          $scope.moviePlot = $scope.trimPlot(response.data.Plot) ;
        }  
    }).catch(function(error){
      console.log(error);
    });
  }

  $scope.trimPlot = function(plotContent){
    if(plotContent.length > 200 ){
      plotContent = plotContent.substring(0, 200) + "..." ;
      $scope.lengthOverflow = true;
    }else{
      $scope.lengthOverflow = false;
    }
    return plotContent;
  }

  $scope.readMore = function(){
    $scope.moviePlot = $scope.movieData.Plot;
    $scope.lengthOverflow = false;
  }

}]);