// Dichiao prima variabile + eccezioni
  var fNum = prompt("Inserire il primo Numero");
  var sNum = prompt("Inserire il secondo Numero")


if (!isNaN(fNum) && !isNaN(sNum)) {
  // Dichiaro condizioni
    if (fNum > sNum) {
      alert(fNum + " è il più grande!");
    }
    else if (fNum == sNum) {
      alert("I numeri sono uguali");
    }
    else {
      alert(sNum + " è il più grande!");
    }
}

else{
  alert("Input non corretto!")
}
