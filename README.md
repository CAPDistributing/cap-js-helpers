# CAP Distributing's JavaScript Helpers

We create this package so we could easily share these basic function across all of our applications.


## Usage
It returns the following functions:
 * **orderBy**: a function that takes 2 parameters (Array to sort, and key to sort on) and returns a sorted array. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var myArray = [{name: 'Zach'}, {name: 'Jamie'}];
      capHelpers.orderBy(myArray, ['name']);
      // returns [{name: 'Jamie'}, {name: 'Zach'}]
      ```
 * **toBase64**: a function that converts the given value to base64. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var value = 'this is a string!!';
      capHelpers.toBase64(value);
      // returns 'dGhpcyBpcyBhIHN0cmluZyEh'
      ```
 * **fromBase64**: a function that converts the given value from base64. For example:
    * ```js
      var capHelpers = require('cap-js-helpers');
      var value = 'dGhpcyBpcyBhIHN0cmluZyEh';
      capHelpers.fromBase64(value);
      // returns 'this is a string!!'
      ```
 * **orderObject**: a function that orders an object's keys alphabetically. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var myObj = {name: 'Jamie', age: 25};
      capHelpers.orderObject(myObj);
      // returns {age: 25, name: 'Jamie'}
      ```
 * **numberWithCommas**: a function that converts a number to a string with commas. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var num = 1234567.89;
      capHelpers.numberWithCommas(num);
      // returns '1,234,567.89'
      ```


## Testing
 * `npm test` > Runs all the tests and checks the code coverage.
 * `npm run single-test` > Runs all the tests once.
 * `npm run watch-test` > Runs all the tests and watches for changes.
 * `npm run check-coverage` > Checks the code coverage (this should be ran after running the tests).
