// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both => FizzBuzz
// otherwise return the number

function fizzbuzz(input) {
  if (input % 3 === 0 && input % 5 === 0)
    console.log('FizzBuzz');
  else if (input % 3 === 0)
    console.log('Fizz');
  else if (input % 5 === 0)
    console.log('Buzz');
  else
    console.log(input);
}

for (let n = 0; n < 101; n++) {
  fizzbuzz(n);
}
