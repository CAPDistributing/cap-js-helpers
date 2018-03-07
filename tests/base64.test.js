var expect = require('chai').expect;
var base64 = require('./../lib/base64.js');

describe('base64', function() {

  describe('toBase64', function() {

    it('should encode the given string', function() {
      // Arrange
      // Act
      var result = base64.toBase64('encrypt this');
      // Assert
      expect(result).to.equal('ZW5jcnlwdCB0aGlz');
    });
    
  });

  describe('fromBase64', function() {

    it('should decode the given string', function() {
      // Arrange
      // Act
      var result = base64.fromBase64('ZW5jcnlwdCB0aGlz');
      // Assert
      expect(result).to.equal('encrypt this');
    });

  });

});
