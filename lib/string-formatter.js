
function camelcaseToUnderscore(camelCase) {
  if (Array.isArray(camelCase) || typeof camelCase === 'object') {
    return _objCamelcaseToUnderscore(camelCase);
  } else {
    return camelCase.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
  }
}

function underscoreToCamelcase(underscore) {
  if (Array.isArray(underscore) || typeof underscore === 'object') {
    return _objUnderscoreToCamelcase(underscore);
  } else {
    return underscore.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }
}

function underscoreToTitlecase(underscore) {
  if (Array.isArray(underscore) || typeof underscore === 'object') {
    return _objUnderscoreToTitlecase(underscore);
  } else {
    // TODO: Refactor
    return underscore.split('_').map(function(x) { return x[0].toUpperCase() + x.substr(1); }).join('');
  }
}

function titlecaseToCamelcase(titlecase) {
  if (Array.isArray(titlecase) || typeof titlecase === 'object') {
    return _objTitlecaseToCamelcase(titlecase);
  } else {
    // TODO: Refactor
    return titlecase[0].toLowerCase() + titlecase.substr(1);
  }
}

function _objCamelcaseToUnderscore(camelCaseObj) {
  if (Array.isArray(camelCaseObj)) {
    var newArray = [];
    for (var item in camelCaseObj) {
      if (Array.isArray(camelCaseObj[item]) || typeof camelCaseObj[item] === 'object') {
        newArray.push(_objCamelcaseToUnderscore(camelCaseObj[item]));
      } else {
        newArray.push(camelcaseToUnderscore(camelCaseObj[item]));
      }
    }
    return newArray;
  } else {
    var newObj = {};
    for (var key in camelCaseObj) {
      var underscore = camelcaseToUnderscore(key);
      if (Array.isArray(camelCaseObj[key]) || typeof camelCaseObj[key] === 'object') {
        newObj[underscore] = _objCamelcaseToUnderscore(camelCaseObj[key]);
      } else {
        newObj[underscore] = camelCaseObj[key];
      }
    }
    return newObj;
  }
}

function _objUnderscoreToCamelcase(underscoreObj) {
  if (Array.isArray(underscoreObj)) {
    var newArray = [];
    for (var item in underscoreObj) {
      if (Array.isArray(underscoreObj[item]) || typeof underscoreObj[item] === 'object') {
        newArray.push(_objUnderscoreToCamelcase(underscoreObj[item]));
      } else {
        newArray.push(underscoreToCamelcase(underscoreObj[item]));
      }
    }
    return newArray;
  } else {
    var newObj = {};
    for (var key in underscoreObj) {
      var underscore = underscoreToCamelcase(key);
      if (Array.isArray(underscoreObj[key]) || typeof underscoreObj[key] === 'object') {
        newObj[underscore] = _objUnderscoreToCamelcase(underscoreObj[key]);
      } else {
        newObj[underscore] = underscoreObj[key];
      }
    }
    return newObj;
  }
}

function _objUnderscoreToTitlecase(underscoreObj) {
  if (Array.isArray(underscoreObj)) {
    var newArray = [];
    for (var item in underscoreObj) {
      if (Array.isArray(underscoreObj[item]) || typeof underscoreObj[item] === 'object') {
        newArray.push(_objUnderscoreToTitlecase(underscoreObj[item]));
      } else {
        newArray.push(underscoreToTitlecase(underscoreObj[item]));
      }
    }
    return newArray;
  } else {
    var newObj = {};
    for (var key in underscoreObj) {
      var underscore = underscoreToTitlecase(key);
      if (Array.isArray(underscoreObj[key]) || typeof underscoreObj[key] === 'object') {
        newObj[underscore] = _objUnderscoreToTitlecase(underscoreObj[key]);
      } else {
        newObj[underscore] = underscoreObj[key];
      }
    }
    return newObj;
  }
}

function _objTitlecaseToCamelcase(titlecaseObj) {
  if (Array.isArray(titlecaseObj)) {
    var newArray = [];
    for (var item in titlecaseObj) {
      if (Array.isArray(titlecaseObj[item]) || typeof titlecaseObj[item] === 'object') {
        newArray.push(_objTitlecaseToCamelcase(titlecaseObj[item]));
      } else {
        newArray.push(titlecaseToCamelcase(titlecaseObj[item]));
      }
    }
    return newArray;
  } else {
    var newObj = {};
    for (var key in titlecaseObj) {
      var underscore = titlecaseToCamelcase(key);
      if (Array.isArray(titlecaseObj[key]) || typeof titlecaseObj[key] === 'object') {
        newObj[underscore] = _objTitlecaseToCamelcase(titlecaseObj[key]);
      } else {
        newObj[underscore] = titlecaseObj[key];
      }
    }
    return newObj;
  }
}


module.exports = {
  camelcaseToUnderscore: camelcaseToUnderscore,
  underscoreToCamelcase: underscoreToCamelcase,
  underscoreToTitlecase: underscoreToTitlecase,
  titlecaseToCamelcase: titlecaseToCamelcase
};
