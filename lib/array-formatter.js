
function _orderByComparator(a, b) {
  // Null check
  if (a === null && b === null) return 0;
  if (a === null) return 1;
  if (b === null) return -1;

  if (typeof a === 'boolean' && typeof b === 'boolean') {
    if (a && !b) return -1;
    if (!a && b) return 1;
  }
  else if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  }
  else {
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  }

  return 0;
}

function sortArray(input, config='+') {

  if (!Array.isArray(input)) return input;

  if (!Array.isArray(config) || (Array.isArray(config) && config.length == 1)) {
    var propertyToCheck = !Array.isArray(config) ? config : config[0];
    var desc = propertyToCheck.substr(0, 1) == '-';

    // Basic array
    if (!propertyToCheck || propertyToCheck == '-' || propertyToCheck == '+') {
      return !desc ? input.sort() : input.sort().reverse();
    }
    else {
      var property = propertyToCheck.substr(0, 1) == '+' || propertyToCheck.substr(0, 1) == '-'
        ? propertyToCheck.substr(1)
        : propertyToCheck;

      return input.sort(function (a, b) {
        return !desc
          ? _orderByComparator(a[property], b[property])
          : -_orderByComparator(a[property], b[property]);
      });
    }
  }
  else {
    //Loop over property of the array in order and sort
    return input.sort(function (a, b) {
      for (var i = 0; i < config.length; i++) {
        var desc = config[i].substr(0, 1) == '-';
        var property = config[i].substr(0, 1) == '+' || config[i].substr(0, 1) == '-'
          ? config[i].substr(1)
          : config[i];

        var comparison = !desc
          ? _orderByComparator(a[property], b[property])
          : -_orderByComparator(a[property], b[property]);

        //Don't return 0 yet in case of needing to sort by next property
        if (comparison != 0) return comparison;
      }

      return 0; //equal each other
    });
  }
}


module.exports = {
  sortArray: sortArray
};
