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

    it('should have camelcaseToUnderscore', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('camelcaseToUnderscore');
      expect(helpers.camelcaseToUnderscore).to.be.a('function');
    });

    it('should have underscoreToCamelcase', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('underscoreToCamelcase');
      expect(helpers.underscoreToCamelcase).to.be.a('function');
    });

    it('should have underscoreToTitlecase', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('underscoreToTitlecase');
      expect(helpers.underscoreToTitlecase).to.be.a('function');
    });

    it('should have titlecaseToCamelcase', function() {
      var helpers = capHelpers;
      expect(helpers).to.have.property('titlecaseToCamelcase');
      expect(helpers.titlecaseToCamelcase).to.be.a('function');
    });

  });

});
