function titleCase(str) {  

  str = str.toLowerCase().split(' ');
  
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  
  console.log(str);
  return str.join(' ');
}