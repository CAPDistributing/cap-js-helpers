var arrayFormatterModule = require('./array-formatter.js');
var base64Module = require('./base64.js');
var numberFormatterModule = require('./number-formatter.js');
var objectFormatterModule = require('./object-formatter.js');
var stringFormatterModule = require('./string-formatter.js');


module.exports = {
  sortArray: arrayFormatterModule.sortArray,
  toBase64: base64Module.toBase64,
  fromBase64: base64Module.fromBase64,
  orderObject: objectFormatterModule.orderObject,
  objAreEquals: objectFormatterModule.objAreEquals,
  numberWithCommas: numberFormatterModule.numberWithCommas,
  camelcaseToUnderscore: stringFormatterModule.camelcaseToUnderscore,
  underscoreToCamelcase: stringFormatterModule.underscoreToCamelcase,
  underscoreToTitlecase: stringFormatterModule.underscoreToTitlecase,
  titlecaseToCamelcase: stringFormatterModule.titlecaseToCamelcase
};
