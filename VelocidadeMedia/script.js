function  calculate( )
    {
        var dist = document.getElementById("deslocamento").value
        var speed = document.getElementById("tempo").value;

        document.getElementById("velocidadeMedia").value = dist / speed;
    }

    function limpar () {
        document.getElementById("deslocamento").value = 0
        document.getElementById("tempo").value = 0
        document.getElementById("velocidadeMedia").value= 0
      }
