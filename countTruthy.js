//returns the number of truthy elements in array

function countTruthy(array) {
  let truthy = 0;

  for (element of array)
    if (element)
      truthy += 1;
  
  return truthy
}

const list = [0, null, undefined, '', "bob", 5, 4, 'pigeons'];
console.log(countTruthy(list)); // => 4
console.log(countTruthy([null, '', 0])) // => 0
console.log(countTruthy([null, '', 0, 32.54, 0.4, 'undefined'])) // => 3