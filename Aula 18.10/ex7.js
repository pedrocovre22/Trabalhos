var horaInicio = parseFloat(prompt("Insira a hora de início do jogo"))
var horaFim = parseFloat(prompt("Insira a hora de fim do jogo"))

if (horaInicio >= horaFim) {
    var duracao = 24 - horaInicio + horaFim
}
else {
    var duracao = horaFim - horaInicio
}

console.log("O jogo durou " + duracao + " horas");
