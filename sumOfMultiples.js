//sum of all the multiples of 3 and 5 up to the limit given
//for limit 10
// multiples of 3: 3, 6, 9
// multiples of 5: 5, 10
// sum of all multiples = 33
// return the sum

function sum(limit) {
  let multiplesSum = 0;

  for (let n = 0; n <= limit; n++)
    if (n % 3 === 0 || n % 5 === 0)
      multiplesSum += n;
    
  console.log(multiplesSum);
}

sum(10); // => 33
sum(25); // => 168