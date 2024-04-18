// display all the properties of the object that are type string


function showProperties(obj) {
  for (let property in obj)
    if (typeof obj[property] === 'string')
      console.log(property, obj[property]);
}

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
  real: true,
  expensive: null
}

showProperties(movie)
// => title: 'a'
// => director: 'b'