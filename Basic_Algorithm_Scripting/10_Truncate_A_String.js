function truncate(str, num) {
  if (str.length > num) {
    str = str.slice(0, num - 3);
    str += "...";
  }
  return str;
}
