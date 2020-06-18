btn.addEventListener("click" ,function() {
  var numR = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  console.log(numR);
  document.getElementById("mio_p").classList.add("numero_pari", "numero_dispari")


  if (numR %2 == 0 ) {
    document.getElementById("mio_p").classList.remove("numero_pari")
    console.log("Pari rimosso");
  }

  else {
    document.getElementById("mio_p").classList.remove("numero_dispari")
    console.log("Dispari rimosso");
  }
});
