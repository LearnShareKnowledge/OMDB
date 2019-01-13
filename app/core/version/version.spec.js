'use strict';

describe('myMovieApp.version module', function() {
  beforeEach(module('myMovieApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
