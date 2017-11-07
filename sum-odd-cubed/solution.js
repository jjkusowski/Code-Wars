function cubeOdd(arr) {

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'number')
    return undefined;
}
return arr.filter(number => number%2 === 1 || number%2 === -1).map(odd => odd * odd * odd).reduce((acc, cur) => acc + cur);
}
