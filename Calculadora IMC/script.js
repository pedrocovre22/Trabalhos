
function calculate() {
    var altura = document.getElementById("altura").value / 100;
    var peso = document.getElementById("peso").value;

  
    var imc = (peso / altura ** 2).toFixed(2);
    console.log(imc)
    var text=imc
    if (imc < 18.5) {
      text+=" Magreza"
    } else if (imc < 24.9) {
      text+=" Normal"
    } else if (imc < 29.9) {
      text+=" Sobrepeso"
    } else if (imc < 39.9) {
      text+=" Obesidade I"
    } else if (imc > 39.9) {
      text+=" Obesidade II"
    }
    document.getElementById("text").innerText=text

  }

  function limpar () {
      document.getElementById("altura").value = 0
      document.getElementById("peso").value = 0
      document.getElementById("text").innerText=""
    }
