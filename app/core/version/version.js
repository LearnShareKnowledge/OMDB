'use strict';

angular.module('myMovieApp.version', [
  'myMovieApp.version.interpolate-filter',
  'myMovieApp.version.version-directive'
])

.value('version', '0.1');
