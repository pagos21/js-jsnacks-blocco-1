
btn.addEventListener("click", function(){
  var num = document.getElementById("num").value;
  if (!(num.length == 4)) {
    alert("Max/Min 4 cifre, Grazie!");
    location.reload();

  }

plus = 0;
  for (i = 0; i < num.length; i++) {
    plus += parseInt(num[i]);

  }
  console.log(plus);

})
