function insertDash(num) {
  let numArray = num.toString().split('');
  for (let i = 0; i < (numArray.length - 1); i++) {
    if (numArray[i]%2 === 1 && numArray[i+1]%2 === 1) {
      numArray.splice((i+1), 0, '-');
    }
  }
  return numArray.join('');
}
