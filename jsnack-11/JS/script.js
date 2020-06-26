
btn.addEventListener("click", function(){
  var num =parseInt( document.getElementById("num").value);

  for (var i = 1; i <= num; i++) {
      console.log(i**3);
  }

})
