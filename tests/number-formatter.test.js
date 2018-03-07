var expect = require('chai').expect;
var numberFormatter = require('./../lib/number-formatter.js');

describe('number-formatter', function () {

  describe('numberWithCommas', function () {

    it('should format number to string with commas', function () {
      // Arrange
      let num = 1234567.89;
      // Act
      let result = numberFormatter.numberWithCommas(num);
      // Assert
      expect(result).to.equal('1,234,567.89');
    });

  });
  
});
