function formatWords(words){
  let str = '';
  if(!words){
    return '';
  }
  for (let i=0; i < words.length; i++) {
    if (words[i].length === 0) {
      words.splice(i, 1);
      i--;
    }
  }
  for (let i=0; i < words.length; i++) {
    if (i < words.length - 2){
      str += words[i] + ', ';
    } else if (i === words.length - 2) {
      str += words[i] + ' and ';
    } else {
      str += words[i];
    }
  }
  return str;
}
