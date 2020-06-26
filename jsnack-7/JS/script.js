// Dichiao prima variabile + eccezioni
  var p1 = prompt("Prompt1");
  var p2 = prompt("Prompt2");

  if (/\d/.test(p1) || /\d/.test(p2) || /\s/.test(p1) || /\s/.test(p2)) {
    alert("Parole, non numeri, grazie!");
    throw new Error("Input Errato!");
  }

if (p1.length > p2.length) {
  console.log(p2, p1);
}

else if (p2.length > p1.length) {
  console.log(p1, p2);
}

else {
  console.log("Lunghezza uguale");
}
