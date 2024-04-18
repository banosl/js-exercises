// print each number up to the limit given
// next to each number write 'even' or 'odd'


function showNumbers(limit) {
  for (n = 0; n <= limit; n++) {
    const oddEven = (n % 2 === 0) ? ' EVEN' : ' ODD'
    console.log(n + oddEven)
  }
}

showNumbers(10);