var expect = require('chai').expect;
var orderByFile = require('./../lib/array-formatter.js');

describe('array-formatter', function () {
 
  describe('sortArray', function () {

    it('should return the input value if its not an array', function () {
      // Arrange
      var myArr = { id: 1, isSubscriber: true };
      // Act
      var result = orderByFile.sortArray(myArr, ['isSubscriber']);
      // Assert
      expect(result).to.equal(myArr);
    });

    it('should handle basic arrays - asc', function () {
      // Arrange
      var myArr = [1, 6, 3, 9, 2];
      // Act
      var result = orderByFile.sortArray(myArr);
      // Assert
      expect(result[0]).to.equal(1);
      expect(result[1]).to.equal(2);
      expect(result[2]).to.equal(3);
      expect(result[3]).to.equal(6);
      expect(result[4]).to.equal(9);
    });

    it('should handle basic arrays - desc', function () {
      // Arrange
      var myArr = [1, 6, 3, 9, 2];
      // Act
      var result = orderByFile.sortArray(myArr, '-');
      // Assert
      expect(result[0]).to.equal(9);
      expect(result[1]).to.equal(6);
      expect(result[2]).to.equal(3);
      expect(result[3]).to.equal(2);
      expect(result[4]).to.equal(1);
    });

    it('should sort booleans', function () {
      // Arrange
      var myArr = [
        { id: 1, isSubscriber: true },
        { id: 2, isSubscriber: false },
        { id: 3, isSubscriber: true },
        { id: 4, isSubscriber: false }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, 'isSubscriber');
      // Assert
      expect(result[0].isSubscriber).to.equal(true);
      expect(result[1].isSubscriber).to.equal(true);
      expect(result[2].isSubscriber).to.equal(false);
      expect(result[3].isSubscriber).to.equal(false);
    });

    it('should sort strings', function () {
      // Arrange
      var myArr = [
        { id: 1, name: 'd' },
        { id: 2, name: 'b' },
        { id: 3, name: 'a' },
        { id: 4, name: 'c' }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, 'name');
      // Assert
      expect(result[0].name).to.equal('a');
      expect(result[1].name).to.equal('b');
      expect(result[2].name).to.equal('c');
      expect(result[3].name).to.equal('d');
    });

    it('should sort strings when null', function () {
      // Arrange
      var myArr = [
        { id: 1, name: null },
        { id: 2, name: 'b' },
        { id: 3, name: 'a' },
        { id: 4, name: null }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, 'name');
      // Assert
      expect(result[0].name).to.equal('a');
      expect(result[1].name).to.equal('b');
      expect(result[2].name).to.equal(null);
      expect(result[3].name).to.equal(null);
    });

    it('should sort numbers when null', function () {
      // Arrange
      var myArr = [
        { id: 1, age: 26 },
        { id: 2, age: null },
        { id: 3, age: 21 },
        { id: 4, age: null }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, 'age');
      // Assert
      expect(result[0].age).to.equal(21);
      expect(result[1].age).to.equal(26);
      expect(result[2].age).to.equal(null);
      expect(result[3].age).to.equal(null);
    });

    it('should sort numbers', function () {
      // Arrange
      var myArr = [
        { id: 1, number: 600 },
        { id: 2, number: 200 },
        { id: 3, number: 400 },
        { id: 4, number: 100 }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, ['number']);
      // Assert
      expect(result[0].number).to.equal(100);
      expect(result[1].number).to.equal(200);
      expect(result[2].number).to.equal(400);
      expect(result[3].number).to.equal(600);
    });

    it('should sort numbers - desc', function () {
      // Arrange
      var myArr = [
        { id: 1, number: 600 },
        { id: 2, number: 200 },
        { id: 3, number: 400 },
        { id: 4, number: 100 }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, ['-number']);
      // Assert
      expect(result[0].number).to.equal(600);
      expect(result[1].number).to.equal(400);
      expect(result[2].number).to.equal(200);
      expect(result[3].number).to.equal(100);
    });

    it('should sort on two variables (string, number)', function () {
      // Arrange
      var myArr = [
        { id: 1, name: 'a', number: 200 },
        { id: 2, name: 'b', number: 200 },
        { id: 3, name: 'a', number: 100 },
        { id: 4, name: 'b', number: 100 }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, ['name', 'number']);
      // Assert
      expect(result[0].id).to.equal(3);
      expect(result[1].id).to.equal(1);
      expect(result[2].id).to.equal(4);
      expect(result[3].id).to.equal(2);
    });

    it('should sort on two variables (number, string)', function () {
      // Arrange
      var myArr = [
        { id: 1, name: 'b', number: 200 },
        { id: 2, name: 'a', number: 200 },
        { id: 3, name: 'b', number: 100 },
        { id: 4, name: 'a', number: 100 }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, ['number', 'name']);
      // Assert
      expect(result[0].id).to.equal(4);
      expect(result[1].id).to.equal(3);
      expect(result[2].id).to.equal(2);
      expect(result[3].id).to.equal(1);
    });

    it('should sort on two variables (-number, string)', function () {
      // Arrange
      var myArr = [
        { id: 1, name: 'b', number: 200 },
        { id: 2, name: 'a', number: 200 },
        { id: 3, name: 'b', number: 100 },
        { id: 4, name: 'a', number: 100 }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, ['-number', 'name']);
      // Assert
      expect(result[0].id).to.equal(2);
      expect(result[1].id).to.equal(1);
      expect(result[2].id).to.equal(4);
      expect(result[3].id).to.equal(3);
    });

    it('should sort on three variables (boolean, -number, string)', function () {
      // Arrange
      var myArr = [
        { id: 1, name: 'b', number: 200, isSubscriber: true },
        { id: 2, name: 'a', number: 200, isSubscriber: true },
        { id: 3, name: 'b', number: 100, isSubscriber: true },
        { id: 4, name: 'a', number: 100, isSubscriber: false },
        { id: 5, name: 'b', number: 100, isSubscriber: false },
        { id: 6, name: 'a', number: 100, isSubscriber: false }
      ];
      // Act
      var result = orderByFile.sortArray(myArr, ['isSubscriber', '-number', 'name']);
      // Assert
      expect(result[0].id).to.equal(2);
      expect(result[1].id).to.equal(1);
      expect(result[2].id).to.equal(3);
      expect(result[3].id).to.equal(4);
      expect(result[4].id).to.equal(6);
      expect(result[5].id).to.equal(5);
    });

  });

});
