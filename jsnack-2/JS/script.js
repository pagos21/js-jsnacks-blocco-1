

function unisci(){
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;

  if (nome == "" || cognome == "") {
      alert("Campo 'Nome', 'cognome' obbligatori!");
      document.getElementById("nome").value = "";
      document.getElementById("cognome").value = "";

  }
  if (/\d/.test(nome)) {
      alert("Ci sono dei numeri nel tuo nome?!");
      document.getElementById("nome").value = "";
  }

  if (/\d/.test(cognome)) {
      alert("Ci sono dei numeri nel tuo cognome?!");
      document.getElementById("cognome").value = "";
  }

  console.log(nome + " " + cognome);
}

// seconda opzione

btn.addEventListener("click" ,function() {
  var nome = document.getElementById("nome").value;
  var cognome = document.getElementById("cognome").value;
  var btn = document.getElementById("btn");
  console.log(nome + " " + cognome);
});


// Con parseInt converti tutto a numeri interi e se inserisci un char ritorna NaN
