'use strict';
/**
 * Service Name : backendDataServices
 * Service description : Common service to make $http call to get backend data
 * Service Dependencies : $http,$q 
 */
angular.module('myMovieApp.commonServiceModule', [])
.service('backendDataServices',['$http','$q',function($http,$q){
    var backendDataServices=this;
    /**
   * Method Name : getBackendData
   * Method Parameters : Url for which the data needs to be fetched
   * Method Description : getBackendData is a promise function that takes a url as 
   * a parameter and makes an http get call to get the data from API .
   * Method Returns : Returns a promise object 
   */
    backendDataServices.getBackendData= function(backendUrl){
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: backendUrl
          }).then(function successCallback(response) {
            deferred.resolve(response);
            }, function errorCallback(error) {
                deferred.reject(error);
            });
        return deferred.promise;
    }
}]);