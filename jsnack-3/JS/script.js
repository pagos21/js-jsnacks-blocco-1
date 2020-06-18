
document.getElementById("btn").addEventListener("click" ,function() {
  var num = parseInt(prompt("Vai col numero!"));
  var par = document.getElementById("mio_p");

  if (num > 0) {
    par.className = "g_color";
    // oppure .style.background-color = "green"
    // oppure .classList.add("green")
  }

  else if (num < 0) {
    par.className = "r_color";
  }

  else if (num == 0) {
    par.className = "b_color";
  }

  else {
    alert("Ho detto un numero!");
    location.reload();
  }
});
