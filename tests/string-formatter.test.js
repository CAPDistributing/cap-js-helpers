var expect = require('chai').expect;
var stringFormatter = require('./../lib/string-formatter.js');

describe('string-formatter', function () {
  
  describe('camelcaseToUnderscore', function () {

    it('should format the string correctly', function () {
      // Arrange
      var camelCase = 'myCamelCasedString';
      // Act
      var result = stringFormatter.camelcaseToUnderscore(camelCase);
      // Assert
      expect(result).to.equal('my_camel_cased_string');
    });

    it('should format an object correctly', function () {
      // Arrange
      var camelCaseObj = {camelCase: 'value', anotherKey: {insideObj: 'value'}};
      // Act
      var result = stringFormatter.camelcaseToUnderscore(camelCaseObj);
      // Assert
      expect(result).to.have.property('camel_case');
      expect(result).to.have.property('another_key');
      expect(result.another_key).to.have.property('inside_obj');
    });

    it('should format an array correctly', function () {
      // Arrange
      var camelCaseObj = [{camelCase: 'value', anotherKey: 'value'}, 'myString'];
      // Act
      var result = stringFormatter.camelcaseToUnderscore(camelCaseObj);
      // Assert
      expect(result[0]).to.have.property('camel_case');
      expect(result[0]).to.have.property('another_key');
      expect(result[1]).to.equal('my_string');
    });

  });

  describe('underscoreToCamelcase', function () {

    it('should format the string correctly', function () {
      // Arrange
      var underscore = 'my_underscored_string';
      // Act
      var result = stringFormatter.underscoreToCamelcase(underscore);
      // Assert
      expect(result).to.equal('myUnderscoredString');
    });

    it('should format an object correctly', function () {
      // Arrange
      var underscoreObj = {underscore_key: 'value', another_key: {inside_obj: 'value'}};
      // Act
      var result = stringFormatter.underscoreToCamelcase(underscoreObj);
      // Assert
      expect(result).to.have.property('underscoreKey');
      expect(result).to.have.property('anotherKey');
      expect(result.anotherKey).to.have.property('insideObj');
    });

    it('should format an array correctly', function () {
      // Arrange
      var underscoreObj = [{underscore_key: 'value', another_key: 'value'}, 'my_string'];
      // Act
      var result = stringFormatter.underscoreToCamelcase(underscoreObj);
      // Assert
      expect(result[0]).to.have.property('underscoreKey');
      expect(result[0]).to.have.property('anotherKey');
      expect(result[1]).to.equal('myString');
    });
  
  });

  describe('underscoreToTitlecase', function () {

    it('should format the string correctly', function () {
      // Arrange
      var underscore = 'my_underscored_string';
      // Act
      var result = stringFormatter.underscoreToTitlecase(underscore);
      // Assert
      expect(result).to.equal('MyUnderscoredString');
    });

    it('should format an object correctly', function () {
      // Arrange
      var underscoreObj = {underscore_key: 'value', another_key: {inside_obj: 'value'}};
      // Act
      var result = stringFormatter.underscoreToTitlecase(underscoreObj);
      // Assert
      expect(result).to.have.property('UnderscoreKey');
      expect(result).to.have.property('AnotherKey');
      expect(result.AnotherKey).to.have.property('InsideObj');
    });

    it('should format an array correctly', function () {
      // Arrange
      var underscoreObj = [{underscore_key: 'value', another_key: 'value'}, 'my_string'];
      // Act
      var result = stringFormatter.underscoreToTitlecase(underscoreObj);
      // Assert
      expect(result[0]).to.have.property('UnderscoreKey');
      expect(result[0]).to.have.property('AnotherKey');
      expect(result[1]).to.equal('MyString');
    });

  });

  describe('titlecaseToCamelcase', function () {
    
    it('should format the string correctly', function () {
      // Arrange
      var titlecase = 'MyTitleCasedString';
      // Act
      var result = stringFormatter.titlecaseToCamelcase(titlecase);
      // Assert
      expect(result).to.equal('myTitleCasedString');
    });

    it('should format an object correctly', function () {
      // Arrange
      var titlecaseObj = {TitlecaseKey: 'value', AnotherKey: {InsideObj: 'value'}};
      // Act
      var result = stringFormatter.titlecaseToCamelcase(titlecaseObj);
      // Assert
      expect(result).to.have.property('titlecaseKey');
      expect(result).to.have.property('anotherKey');
      expect(result.anotherKey).to.have.property('insideObj');
    });

    it('should format an array correctly', function () {
      // Arrange
      var titlecaseObj = [{TitlecaseKey: 'value', AnotherKey: 'value'}, 'MyString'];
      // Act
      var result = stringFormatter.titlecaseToCamelcase(titlecaseObj);
      // Assert
      expect(result[0]).to.have.property('titlecaseKey');
      expect(result[0]).to.have.property('anotherKey');
      expect(result[1]).to.equal('myString');
    });

  });

});
