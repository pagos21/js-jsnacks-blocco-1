
var arr = [];

for (var i = 0; i < 6; i++) {
  var input = prompt(i + " numero");
  if (/\s/.test(input) || /\w/.test(input)) {
    throw new Error("Input errato!")
  }
  if (input %2) {
    arr.push(input)
  }
}

console.log(arr.toString());
