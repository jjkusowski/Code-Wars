function disemvowel(str) {
  let arr = str.split('');
  let vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr.splice(i, 1);
      i--;
    }
  }
  str = arr.join('');
  return str;
}
