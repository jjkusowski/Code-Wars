function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let noGeese = birds.filter(bird => !geese.includes(bird));
  return noGeese;
};
