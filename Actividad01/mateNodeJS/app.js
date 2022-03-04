let mateBasica = require('./mate');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = require("prompt-sync")({ sigint: true });

//suma, resta, multiplicación, división y módulo.
console.log("Ejercicio de Mate");
console.log("1) Suma");
console.log("2) Resta");
console.log("3) Multiplicacion");
console.log("4) División");
console.log("5) Módulo");

var a= 0;
var b= 0;

readline.question('Choose an option \n', input => {
  //console.log(`Hey there ${name}!`);
  switch(`${input}`) {
    case "1":
      a = Number(prompt("Choose first number: "));
      b = Number(prompt("Choose Second number: "));

      console.log("Suma: "+ `${a}` +" + "+ b);
      console.log(mateBasica.suma(a, b));
      break;
    case "2":
      a = Number(prompt("Choose first number: "));
      b = Number(prompt("Choose Second number: "));


      console.log("Resta: "+ a +" - "+ b);
      console.log(mateBasica.resta(a, b));
      break;
    case "3":
      a = Number(prompt("Choose first number: "));
      b = Number(prompt("Choose Second number: "));

      console.log("Producto: "+ a +" * "+ b);
      console.log(mateBasica.producto(a, b));
      break;
    case "4":
      a = Number(prompt("Choose first number: "));
      b = Number(prompt("Choose Second number: "));

      console.log("División: "+ a +" / "+ b);
      console.log(mateBasica.division(a, b));
      break;
    case "5":
      a = Number(prompt("Choose first number: "));
      b = Number(prompt("Choose Second number: "));

      console.log("Modulo:"+ a +" % "+ b);
      console.log(mateBasica.modulo(a, b));
      break;
    default:
      console.log("El input no es válido");
  }

  readline.close();
});
