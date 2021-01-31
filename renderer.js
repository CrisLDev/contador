const { match } = require('assert');
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, "./numero.txt");

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

function listo() {
    var numero = fs.readFileSync(file);
    document.getElementById("valorr").innerHTML = numero;
}

listo();

document.getElementById('resetear').addEventListener("click", resetear)

function sumar() {
    var numero = fs.readFileSync(file);
    var algo2 = parseFloat(numero);
    return numero = dividir(multiplicar(algo2) + multiplicar(0.05));
}

function multiplicar (a) {
    return a * 1000;
}

function dividir (a) {
    return a / 1000;
}

function resetear() {
    const cero = 0;
    fs.writeFileSync(file, cero, (err) => {
        if(err) throw err;
    })
    document.getElementById("valorr").innerHTML = 0;
}

document.addEventListener('keydown', logKey);
    function logKey(e) {
      if (`${e.code}` == "ArrowRight") {
          var valor = sumar();
          fs.writeFileSync(file, valor, (err) => {
              if(err) throw err;
          })
          document.getElementById("valorr").innerHTML = valor;
          //alert(valor)
      }
      if(`${e.code}` == "ArrowUp"){
            const cero = 0;
            fs.writeFileSync(file, cero, (err) => {
                if(err) throw err;
            })
            document.getElementById("valorr").innerHTML = 0;
      }
    }