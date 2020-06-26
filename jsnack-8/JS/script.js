// Dichiao prima variabile + eccezioni

var sum = 0;

for (var i = 1; i < 6; i++) {
  var numU = prompt(i + " Numero:");
  if (isNaN(numU)) {
    throw new Error("Input Errato!");
  }
   var sum = parseInt(sum) + parseInt(numU);
}

// Versione While

// var i =0;
// while (i < 5) {
//   var numU = prompt(i + " Numero:");
//    var sum = parseInt(sum) + parseInt(numU);
//    i++
// }


console.log(sum);
