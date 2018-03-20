var expect = require('chai').expect;
var numberFormatter = require('./../lib/number-formatter.js');

describe('number-formatter', function () {

  describe('numberWithCommas', function () {

    it('should format number to string with commas', function () {
      // Arrange
      var num = 1234567.89;
      // Act
      var result = numberFormatter.numberWithCommas(num);
      // Assert
      expect(result).to.equal('1,234,567.89');
    });

    it('should format number to string with commas without decimals', function () {
      // Arrange
      var num = 1234567890;
      // Act
      var result = numberFormatter.numberWithCommas(num);
      // Assert
      expect(result).to.equal('1,234,567,890');
    });

    it('should format number to string with commas when lots of decimal', function () {
      // Arrange
      var num = 1234.56789;
      // Act
      var result = numberFormatter.numberWithCommas(num);
      // Assert
      expect(result).to.equal('1,234.56789');
    });

    it('should format a zero correctly', function () {
      // Arrange
      var num = 0;
      // Act
      var result = numberFormatter.numberWithCommas(num);
      // Assert
      expect(result).to.equal('0');
    });

    it('should handle a null value', function () {
      // Arrange
      var num = null;
      // Act
      var result = numberFormatter.numberWithCommas(num);
      // Assert
      expect(result).to.equal('');
    });

  });
  
});
