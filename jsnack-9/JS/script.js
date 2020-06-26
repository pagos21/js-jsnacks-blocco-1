
var invitati = ["DiCaprio", "Dude", "Homer", "Lenny"];

var name = prompt("Nome.\nAuto conversione della prima lettera");
name = name[0].toLocaleUpperCase() + name.slice(1).toLowerCase();

if (/\s/.test(name) || /\d/.test(name)) {
  throw new Error("Input errato!")
}

founded = false;
for (var i = 0; i < invitati.length; i++) {
  if (name == invitati[i]) {
    founded = true;
  }
}

if (founded) {
  console.log("Sei il benvenuto");
}

else {
  console.log("No!");
}
