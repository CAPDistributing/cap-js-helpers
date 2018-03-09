
function camelcaseToUnderscore(camelCase) {
  if (Array.isArray(camelCase)) {
    var newArray = [];
    for (var item in camelCase) {
      if (Array.isArray(camelCase[item]) || typeof camelCase[item] === 'object') {
        newArray.push(camelcaseToUnderscore(camelCase[item]));
      } else {
        newArray.push(camelcaseToUnderscore(camelCase[item]));
      }
    }
    return newArray;
  } else if (typeof camelCase === 'object') {
    var newObj = {};
    for (var key in camelCase) {
      var underscore = camelcaseToUnderscore(key);
      if (Array.isArray(camelCase[key]) || typeof camelCase[key] === 'object') {
        newObj[underscore] = camelcaseToUnderscore(camelCase[key]);
      } else {
        newObj[underscore] = camelCase[key];
      }
    }
    return newObj;
  } else {
    return camelCase.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();
  }
}

function underscoreToCamelcase(underscore) {
  if (Array.isArray(underscore)) {
    var newArray = [];
    for (var item in underscore) {
      if (Array.isArray(underscore[item]) || typeof underscore[item] === 'object') {
        newArray.push(underscoreToCamelcase(underscore[item]));
      } else {
        newArray.push(underscoreToCamelcase(underscore[item]));
      }
    }
    return newArray;
  } else if (typeof underscore === 'object') {
    var newObj = {};
    for (var key in underscore) {
      var camelcase = underscoreToCamelcase(key);
      if (Array.isArray(underscore[key]) || typeof underscore[key] === 'object') {
        newObj[camelcase] = underscoreToCamelcase(underscore[key]);
      } else {
        newObj[camelcase] = underscore[key];
      }
    }
    return newObj;
  } else {
    return underscore.replace(/_([a-z])/g, function (g) { return g[1].toUpperCase(); });
  }
}

function underscoreToTitlecase(underscore) {
  if (Array.isArray(underscore)) {
    var newArray = [];
    for (var item in underscore) {
      if (Array.isArray(underscore[item]) || typeof underscore[item] === 'object') {
        newArray.push(underscoreToTitlecase(underscore[item]));
      } else {
        newArray.push(underscoreToTitlecase(underscore[item]));
      }
    }
    return newArray;
  } else if (typeof underscore === 'object') {
    var newObj = {};
    for (var key in underscore) {
      var titlecase = underscoreToTitlecase(key);
      if (Array.isArray(underscore[key]) || typeof underscore[key] === 'object') {
        newObj[titlecase] = underscoreToTitlecase(underscore[key]);
      } else {
        newObj[titlecase] = underscore[key];
      }
    }
    return newObj;
  } else {
    return underscore.split('_').map(function(x) { return x[0].toUpperCase() + x.substr(1); }).join('');
  }
}

function titlecaseToCamelcase(titlecase) {
  if (Array.isArray(titlecase)) {
    var newArray = [];
    for (var item in titlecase) {
      if (Array.isArray(titlecase[item]) || typeof titlecase[item] === 'object') {
        newArray.push(titlecaseToCamelcase(titlecase[item]));
      } else {
        newArray.push(titlecaseToCamelcase(titlecase[item]));
      }
    }
    return newArray;
  } else if (typeof titlecase === 'object') {
    var newObj = {};
    for (var key in titlecase) {
      var camelcase = titlecaseToCamelcase(key);
      if (Array.isArray(titlecase[key]) || typeof titlecase[key] === 'object') {
        newObj[camelcase] = titlecaseToCamelcase(titlecase[key]);
      } else {
        newObj[camelcase] = titlecase[key];
      }
    }
    return newObj;
  } else {
    return titlecase[0].toLowerCase() + titlecase.substr(1);
  }
}


module.exports = {
  camelcaseToUnderscore: camelcaseToUnderscore,
  underscoreToCamelcase: underscoreToCamelcase,
  underscoreToTitlecase: underscoreToTitlecase,
  titlecaseToCamelcase: titlecaseToCamelcase
};
