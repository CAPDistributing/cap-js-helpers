var expect = require('chai').expect;
var capHelpers = require('./../lib/index');

describe('cap-js-helpers', function() {
  
  describe('index', function() {

    it('should have sortArray', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('sortArray');
      expect(helpers.sortArray).to.be.a('function');
    });

    it('should have toBase64', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('toBase64');
      expect(helpers.toBase64).to.be.a('function');
    });
  
    it('should have fromBase64', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('fromBase64');
      expect(helpers.fromBase64).to.be.a('function');
    });

    it('should have orderObject', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('orderObject');
      expect(helpers.orderObject).to.be.a('function');
    });

    it('should have objAreEquals', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('objAreEquals');
      expect(helpers.objAreEquals).to.be.a('function');
    });

    it('should have numberWithCommas', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('numberWithCommas');
      expect(helpers.numberWithCommas).to.be.a('function');
    });

  });

});
