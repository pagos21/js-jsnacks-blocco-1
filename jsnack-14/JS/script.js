
  var sum = 0;
  for (var i = 0; i <= 5; i++){
    var num = parseInt(prompt(i + "Numero:"));

    if(isNaN(num)){
      alert("No");
      break;
    }
    
    sum += num;
  }

  media = sum / 5;
  console.log(media.toFixed(2));
