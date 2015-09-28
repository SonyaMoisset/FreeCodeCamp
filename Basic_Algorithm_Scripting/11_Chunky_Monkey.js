function chunk(arr, size) {
  var chunkyMonkey = [];
  for (var i =0; i < arr.length; i) {
    chunkyMonkey.push(arr.slice(i, i += size));
  }
  return chunkyMonkey;
}