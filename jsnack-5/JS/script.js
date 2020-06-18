
btn.addEventListener("click" ,function() {
  var fnum = parseFloat(document.getElementById("fnum").value);
  var snum = parseFloat(document.getElementById("snum").value);
  var operator = document.getElementById("operator").value;

  // if (!fnum || !snum) {
  //   alert("numero non valido o inesistente!")
  // }


    if (isNaN(fnum)|| isNaN(snum)) {
      alert("numero non valido o inesistente!")
    }

  if (operator == "+") {
    ris = fnum + snum;
    document.getElementById("risultato").innerHTML = ris;
  }

  else if (operator == "-") {
    ris = fnum - snum;
    document.getElementById("risultato").innerHTML = ris;
  }

  else if (operator == "*") {
    ris = fnum * snum;
    document.getElementById("risultato").innerHTML = ris;
  }

  else if (operator == "/") {
    ris = parseFloat(fnum) / parseFloat(snum);
    if (snum == 0) {
      alert ("Divided by 0")
    }
    document.getElementById("risultato").innerHTML = ris.toFixed(3);
  }
  else {
    alert("Comando sbagliato!")
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
//

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
// if (!isNaN(num1) && !isNaN(num2)) {
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
