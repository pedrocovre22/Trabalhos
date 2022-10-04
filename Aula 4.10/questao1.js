
var nota1 = parseFloat(prompt("digite nota 1"))
var nota2 = parseFloat(prompt("digite nota 2"))
console.log(nota1);
console.log(nota2);

media = (nota1 + nota2)/2

console.log(media);

if (media >= 6.0) {
    console.log("aprovado")
}
else {
    console.log("exame");
    var exame = parseFloat(prompt("digite nota do exame"))
    var final = (media + exame)/2
    console.log(final);

    if (final >= 6){
        console.log('Aprovado');
        
    } else {
        console.log('Reprovado');
        
    }
}
