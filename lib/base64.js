
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

function toBase64(input) {
  var encoded = '';

  for (var i = 0; i < input.length; i += 3) {
    var c1 = input.charCodeAt(i),
        c2 = input.charCodeAt(i+1),
        c3 = input.charCodeAt(i+2);
    encoded += chars[(c1 & 0xFC) >> 2];
    encoded += chars[((c1 & 0x03) << 4) | ((c2 & 0xF0) >> 4)];
    encoded += chars[((c2 & 0x0F) << 2) | ((c3 & 0xC0) >> 6)];
    encoded += chars[c3 & 0x3F];
  }

  return encoded;
};

function fromBase64(input) {
  var decoded = '';

  for (var i = 0; i < input.length; i += 4) {
    var c1 = chars.indexOf(input[i]),
        c2 = chars.indexOf(input[i+1]),
        c3 = chars.indexOf(input[i+2]),
        c4 = chars.indexOf(input[i+3]);
    decoded += String.fromCharCode(((c1) << 2) | ((c2 & 0x30) >> 4));
    decoded += String.fromCharCode(((c2 & 0x0F) << 4) | ((c3 & 0xFC) >> 2));
    decoded += String.fromCharCode(((c3 & 0x03) << 6) | c4);
  }
  return decoded;
};


module.exports = {
  toBase64: toBase64,
  fromBase64: fromBase64
};
