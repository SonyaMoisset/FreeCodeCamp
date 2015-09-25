function end(str, target) {
  var stringLength = target.length;
  
    if (str.substr(-target.length) === target)
        return true;
    else
        return false;
}