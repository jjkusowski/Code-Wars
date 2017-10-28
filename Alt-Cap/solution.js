function capitalize(s){
  let ansOneArray = [];
  let ansTwoArray = [];
  for (let i=0; i<s.length; i +=2) {
    ansOneArray.push(s.charAt(i).toUpperCase());
    ansOneArray.push(s.charAt(i+1));
    ansTwoArray.push(s.charAt(i));
    ansTwoArray.push(s.charAt(i+1).toUpperCase());
  }
  ansOne = ansOneArray.join('');
  ansTwo = ansTwoArray.join('');
  return [ansOne, ansTwo];
};
