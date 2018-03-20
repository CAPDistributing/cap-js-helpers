
function numberWithCommas(num) {
  if (num === null || num === undefined) {
    return '';
  }
  var parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}


module.exports = {
  numberWithCommas: numberWithCommas
};
