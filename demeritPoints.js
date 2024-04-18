//speed limit = 70
// every 5 over the limit -> 1 point
// Driver that gets more than 12 ponts, license suspended

//Math.floor(1.3) //function that rounds down


function checkSpeed(speed) {
  let points = 0;
  const speedLimit = 70
  const kmPerPoint = 5
  const suspensionPoints = 12
  
  if (speed < speedLimit + kmPerPoint)
  console.log('OK');
  else {
    points += Math.floor((speed - speedLimit)/kmPerPoint)
    if (points >= suspensionPoints)
    console.log('License Suspended');
  else
    console.log('Points ' + points);
  }
}

checkSpeed(50); // 'OK'
checkSpeed(70); // 'OK'
checkSpeed(71); // 'OK'
checkSpeed(75); // 'Points 1'
checkSpeed(100); // '6'
checkSpeed(123); // '10'
checkSpeed(182); // 'Licesnse Suspended'