function find_average(array) {
  let total = array.reduce( (acc, curr) => acc + curr, 0);
  return total / array.length;
}
