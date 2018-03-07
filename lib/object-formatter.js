
function orderObject(obj) {
  var formattedObject = {};

  if (typeof obj === undefined || obj === null) {
    formattedObject = null;
  } else if (Array.isArray(obj)) {
    formattedObject = [];

    for (let i = 0; i < obj.length; i++) {
      formattedObject[i] = orderObject(obj[i]);
    }
  } else {
    Object.keys(obj).sort().forEach(function (k, v) {
      if (typeof (obj[k]) == 'object') {
        formattedObject[k] = orderObject(obj[k]);
      } else {
        formattedObject[k] = obj[k]
      }
    });
  }
  return formattedObject;
}

function objAreEquals(obj1, obj2) {
  var p;
  for(p in obj1) {
    if (typeof(obj2[p]) == 'undefined')
      return false;
  }
  for(p in obj1) {
    if (obj1[p]) {
      switch(typeof(obj1[p])) {
        case 'object':
          if (!objAreEquals(obj1[p], obj2[p]))
            return false;
          break;
        case 'function':
          if (typeof(obj2[p]) == 'undefined' ||
             (p != 'equals' && obj1[p].toString() != obj2[p].toString()))
            return false;
          break;
        default:
          if (obj1[p] != obj2[p])
            return false;
      }
    }
    else {
      if (obj2[p])
        return false;
    }
  }
  for(p in obj2) {
    if(typeof(obj1[p])=='undefined')
      return false;
  }
  return true;
}


module.exports = {
  orderObject: orderObject,
  objAreEquals: objAreEquals
};
