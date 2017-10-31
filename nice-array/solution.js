function isNice(arr){
  if (arr.length == 0) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let plus = arr[i] + 1;
    let minus = arr[i] - 1;
    if (!arr.includes(plus) && !arr.includes(minus)) {
      return false;

    }
  }
  return true;
}
