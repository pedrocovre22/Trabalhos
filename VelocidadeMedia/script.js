let velocidades = []

function calculate() {

    if (localStorage.getItem('velocidades') !== null) {
        velocidades = JSON.parse(localStorage.getItem('velocidades'))
    }

    var dist = document.getElementById("deslocamento").value
    var speed = document.getElementById("tempo").value;

    document.getElementById("velocidadeMedia").value = dist / speed;
    velocidades.push(document.getElementById("velocidadeMedia").value)
    document.getElementById('velocidades').value = velocidades
    localStorage.setItem('velocidades', JSON.stringify(velocidades))
}


function limpar() {
    document.getElementById("deslocamento").value = 0
    document.getElementById("tempo").value = 0
    document.getElementById("velocidadeMedia").value = 0
}

