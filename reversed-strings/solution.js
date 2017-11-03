function solution(str){
  let newStr = '';
  let arr = str.split('');
  let count = arr.length;
  for (let i = 0; i < count; i++) {
    newStr = arr.shift() + newStr;
  }
  return newStr;
}
