# CAP Distributing's JavaScript Helpers

[![Circle CI Badge][circleci-badge]][circleci-link]
[![codecov][codecov-image]][codecov-link]
[![NSP Status][nsp-image]][nsp-link]
[![Dependency Status][dependency-image]][dependency-link]
[![Dev Dependency Status][dev-dependency-image]][dev-dependency-link]
[![Peer Dependency Status][peer-dependency-image]][peer-dependency-link]
[![NPM Version][npm-version-image]][npm-version-link]
[![MIT License][npm-license-image]][npm-license-link]

We created this package so we could easily share these basic function across all of our applications.


## Usage
It returns the following functions:
 * **sortArray**: a function that takes 2 parameters (Array to sort, and key to sort on) and returns a sorted array. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var myArray = [{name: 'Zach'}, {name: 'Jamie'}];
      capHelpers.sortArray(myArray, ['name']);
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
      var capHelpers = require('cap-helpers');
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
 * **camelcaseToUnderscore**: a function that takes a camelcased string, object or array and converts it to underscores. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var str = 'myString';
      capHelpers.camelcaseToUnderscore(str);
      // returns 'my_string'

      // if you pass in an object, it will convert the keys. For example:
      var obj = {thisIsMyKey: 'thisIsMyValue'};
      capHelpers.camelcaseToUnderscore(obj);
      // returns {this_is_my_key: 'thisIsMyValue'}
      ```
 * **underscoreToCamelcase**: a function that takes an underscored string, object or array and converts it to camelcase. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var str = 'my_string';
      capHelpers.underscoreToCamelcase(str);
      // returns 'myString'

      // if you pass in an object, it will convert the keys. For example:
      var obj = {this_is_my_key: 'this_is_my_value'};
      capHelpers.underscoreToCamelcase(obj);
      // returns {thisIsMyKey: 'this_is_my_value'}
      ```
 * **underscoreToTitlecase**: a function that takes an underscored string, object or array and converts it to titlecase. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var str = 'my_string';
      capHelpers.underscoreToTitlecase(str);
      // returns 'MyString'

      // if you pass in an object, it will convert the keys. For example:
      var obj = {this_is_my_key: 'this_is_my_value'};
      capHelpers.underscoreToTitlecase(obj);
      // returns {ThisIsMyKey: 'this_is_my_value'}
      ```
 * **titlecaseToCamelcase**: a function that takes a titlecased string, object or array and converts it to camelcase. For example:
    * ```js
      var capHelpers = require('cap-helpers');
      var str = 'MyString';
      capHelpers.titlecaseToCamelcase(str);
      // returns 'myString'

      // if you pass in an object, it will convert the keys. For example:
      var obj = {ThisIsMyKey: 'ThisIsMyValue'};
      capHelpers.titlecaseToCamelcase(obj);
      // returns {thisIsMyKey: 'ThisIsMyValue'}
      ```


## Testing
 * `npm test` > Runs all the tests and checks the code coverage.
 * `npm run single-test` > Runs all the tests once.
 * `npm run watch-test` > Runs all the tests and watches for changes.
 * `npm run check-coverage` > Checks the code coverage (this should be ran after running the tests).


[circleci-badge]: https://circleci.com/gh/CAPDistributing/cap-js-helpers/tree/master.svg?style=shield&circle-token=fc546828ed90fb71383094c3592cd34447ff0031
[circleci-link]: https://circleci.com/gh/CAPDistributing/cap-js-helpers
[codecov-image]: https://codecov.io/gh/CAPDistributing/cap-js-helpers/branch/master/graph/badge.svg
[codecov-link]: https://codecov.io/gh/CAPDistributing/cap-js-helpers
[nsp-image]: https://nodesecurity.io/orgs/cap-distributing/projects/e5a71ea6-f1a4-4c2d-8655-b1b6f444485c/badge
[nsp-link]: https://nodesecurity.io/orgs/cap-distributing/projects/e5a71ea6-f1a4-4c2d-8655-b1b6f444485c
[dependency-image]: https://david-dm.org/CAPDistributing/cap-js-helpers/status.svg
[dependency-link]: https://david-dm.org/CAPDistributing/cap-js-helpers
[dev-dependency-image]: https://david-dm.org/CAPDistributing/cap-js-helpers/dev-status.svg
[dev-dependency-link]: https://david-dm.org/CAPDistributing/cap-js-helpers?type=dev
[peer-dependency-image]: https://david-dm.org/CAPDistributing/cap-js-helpers/peer-status.svg
[peer-dependency-link]: https://david-dm.org/CAPDistributing/cap-js-helpers?type=peer
[npm-version-image]: https://img.shields.io/npm/v/cap-helpers.svg
[npm-version-link]: https://www.npmjs.com/package/cap-helpers
[npm-license-image]: https://img.shields.io/npm/l/cap-helpers.svg
[npm-license-link]: LICENSE
