
// Prima alt
  for (i = 0; i <= 1000; i++) {

    var res = Math.pow(2, i);
    if (res > 1000) {
      break;
    }
    console.log(res);

  }

// Più complessa (con Bug)
  var i = 0;
  var res = 0;
  var delay = setInterval(function(){
    res = Math.pow(2, i);

    if(res > 500){
      clearInterval(delay);
     }

    if (true) {
      document.getElementById("lista").innerHTML += "<li>" + res + "</li>";
    }
      i++;
  }, 250);
