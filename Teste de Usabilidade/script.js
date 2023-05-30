function calcularHoras() {
  var horaInicial = parseInt(document.getElementById("horaInicial").value);
  var minutoInicial = parseInt(document.getElementById("minutoInicial").value);
  var horaFinal = parseInt(document.getElementById("horaFinal").value);
  var minutoFinal = parseInt(document.getElementById("minutoFinal").value);

  var totalMinutos = (horaInicial * 60 + minutoInicial) + (horaFinal * 60 + minutoFinal);
  var resultadoHoras = Math.floor(totalMinutos / 60);
  var resultadoMinutos = totalMinutos % 60;

  if (resultadoMinutos < 0) {
    resultadoMinutos += 60;
    resultadoHoras -= 1;
  }

  var resultado = resultadoHoras.toString().padStart(2, "0") + ":" + resultadoMinutos.toString().padStart(2, "0");

  document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
