
var winnerCounterHead = 0;
var winnerCounterCross = 0;
var bracketCounter0 = "";
var bracketCounter1 = "";

// document.getElementById("btn2").addEventListener("click", function(){
//   console.log(winnerCounterHead, winnerCounterCross);
// });

btn.addEventListener("click" ,function() {
  var numR = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  if (numR %2 == 0 ) {
    document.getElementById("coin").src = "img/testa.png";
    document.getElementById("winner").innerHTML = "Vince Testa!";
    winnerCounterHead += 1;
    bracketCounter0 += "*";
    document.getElementById("winnerCounterHead").innerHTML = "È Uscito testa per " + winnerCounterHead + " volte " + "[" + bracketCounter0 + "]";

  }
    else {
      document.getElementById("coin").src = "img/croce.png";
      document.getElementById("winner").innerHTML = "Vince Croce!";
      winnerCounterCross += 1;
      bracketCounter1 += "*";

      document.getElementById("winnerCounterCross").innerHTML = "È Uscito croce per " + winnerCounterCross + " volte " + "[" + bracketCounter1 + "]";
    }

    if (winnerCounterHead > winnerCounterCross) {
      document.getElementById("leader").innerHTML = "Sta vincendo Testa!";
    }

    else if (winnerCounterHead == winnerCounterCross) {
      document.getElementById("leader").innerHTML = "Pareggio!!!";
    }

    else {
        document.getElementById("leader").innerHTML = "Sta vincendo Croce!";
    }

    if (parseInt(winnerCounterHead) + parseInt(winnerCounterCross) >= 20){
      alert("Ti stai divertendo vero? :)")
    }
});




// btn.addEventListener("click" ,function() {
//   var numR = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
//   console.log(numR);
//
//   if (numR %2 == 0 ) {
//     document.getElementById("mio_p").classList.remove("numero_pari")
//     console.log("Pari rimosso")
//   }
//
//   else {
//     document.getElementById("mio_p").classList.remove("numero_dispari")
//     console.log("Dispari rimosso")
//   }
// });


// function unisci(){
//   var nome = document.getElementById("nome").value;
//   var cognome = document.getElementById("cognome").value;
//
//   if (nome == "" || cognome == "") {
//       alert("Campo 'Nome' 'cognome' obbligatori!")
//       location.reload();
//   }
//   if (/\d/.test(nome)) {
//       alert("Ci sono dei numeri nel tuo nome?!")
//       location.reload();
//   }
//
//   if (/\d/.test(cognome)) {
//       alert("Ci sono dei numeri nel tuo cognome?!")
//       location.reload();
//   }
//
//   console.log(nome + " " + cognome);
// }
//
// // seconda opzione
//
// btn.addEventListener("click" ,function() {
//   var nome = document.getElementById("nome").value;
//   var cognome = document.getElementById("cognome").value;
//   var btn = document.getElementById("btn");
//   console.log(nome + " " + cognome);
// });


// Con parseInt converti tutto a numeri interi e se inserisci un char ritorna NaN
// Dichiao prima variabile + eccezioni
  // var fNum = prompt("Inserire il primo Numero")
  // var sNum = prompt("Inserire il secondo Numero")
//
//
// if (!inNaN(num1) && !inNaN(num2)) {
//   // Dichiaro condizioni
//     if (fNum > sNum) {
//       alert(fNum + " è il più grande!");
//     }
//     else if (fNum == sNum) {
//       alert("I numeri sono uguali");
//     }
//     else {
//       alert(sNum + " è il più grande!");
//     }
// }

  // if (/\s/.test(fNum)) {
  //     alert("Ci sono degli spazi nei campi!")
  //     location.reload();
  // }
  // else if (/\D/.test(fNum)) {
  //     alert("Ci sono caratteri nel campo!")
  //     location.reload();
  //   }

    // Dichiao seconda variabile + eccezioni


//
//     if (/\s/.test(sNum)) {
//         alert("Ci sono degli spazi nel campo")
//         location.reload();
//     }
//     else if (/\D/.test(sNum)) {
//         alert("Ci sono caratteri nel campo!")
//         location.reload();
//       }
//
//
// // Dichiaro condizioni
//   if (fNum > sNum) {
//     alert(fNum + " è il più grande!");
//   }
//   else if (fNum == sNum) {
//     alert("I numeri sono uguali");
//   }
//   else {
//     alert(sNum + " è il più grande!");
//   }
