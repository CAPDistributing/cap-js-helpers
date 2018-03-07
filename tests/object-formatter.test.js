var expect = require('chai').expect;
var objectFormatter = require('./../lib/object-formatter.js');

describe('object-formatter', function () {
  
  describe('orderObject', function () {

    it('should alphabetize items in dictionary', function () {
      // Arrange
      let payload = {
        orange: 1,
        blue: 2
      };
      // Act
      let formattedPayload = objectFormatter.orderObject(payload);
      // Assert
      expect(Object.keys(formattedPayload)[0]).to.equal('blue');
    });

    it('should alphabetize nested items', function () {
      // Arrange
      let payload = {
        orange: 1,
        blue: { red: 21, pink: 22 }
      };
      // Act
      let formattedPayload = objectFormatter.orderObject(payload);
      // Assert
      expect(Object.keys(formattedPayload['blue'])[0]).to.equal('pink');
    });

    it('should alphabetize keys even when their values are null', function () {
      // Arrange
      var payload = {
        orange: null,
        blue: null
      };
      // Act
      let formattedPayload = objectFormatter.orderObject(payload);
      // Assert
      expect(Object.keys(formattedPayload)[0]).to.equal('blue');
    });

    it('should pass with Array inside of object', function () {
      // Arrange
      var payload = {
        orange: 5,
        blue: [
          { red: 6, pink: 7 },
          { green: 3, blue: 4 }
        ]
      };
      // Act
      let formattedPayload = objectFormatter.orderObject(payload);
      // Assert
      expect(Object.keys(formattedPayload['blue'][0])[0]).to.equal('pink');
    });

  });

  describe('objAreEquals', function() {

    it('should return false if obj1 is missing a key', function () {
      // Arrange
      var obj1 = {};
      var obj2 = {name: 'Jamie'};
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });

    it('should return false if obj2 is missing a key', function () {
      // Arrange
      var obj1 = {name: 'James'};
      var obj2 = {};
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });

    it('should return false if obj1.name isnt null and obj2.name is null', function () {
      // Arrange
      var obj1 = {name: 'James'};
      var obj2 = {name: null};
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });

    it('should return false if obj1.name is null and obj2.name isnt null', function () {
      // Arrange
      var obj1 = {name: null};
      var obj2 = {name: 'Jamie'};
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });

    it('should return false if the values arent equal', function () {
      // Arrange
      var obj1 = {name: 'James'};
      var obj2 = {name: 'Jamie'};
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });
    
    it('should return false if sub-objects arent equal', function () {
      // Arrange
      var obj1 = {name: 'James', info: {age: 25}};
      var obj2 = {name: 'James', info: {age: 24}};
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });

    it('should return false if functions arent equal', function () {
      // Arrange
      var obj1 = {name: 'James', getInfo: function() { return 1; } };
      var obj2 = {name: 'James', getInfo: function() { return 2; } };
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(false);
    });

    it('should return true if everything is equal', function () {
      // Arrange
      var obj1 = {name: 'James', getInfo: function() { return 1; }, info: {age: 25}, description: null };
      var obj2 = {name: 'James', getInfo: function() { return 1; }, info: {age: 25}, description: null };
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(true);
    });

    it('should return true if everything is equal (objects in different orders)', function () {
      // Arrange
      var obj1 = {getInfo: function() { return 1; }, name: 'James', description: null, info: {age: 25} };
      var obj2 = {name: 'James', getInfo: function() { return 1; }, info: {age: 25}, description: null };
      // Act
      let result = objectFormatter.objAreEquals(obj1, obj2);
      // Assert
      expect(result).to.equal(true);
    });

  });

});
