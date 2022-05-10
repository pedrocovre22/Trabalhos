const selecionarProdutos = function (opcao) {
    let resultado = document.getElementById('resultado')

    switch (opcao) {

        case 'uva':

            console.log('Opção selecionada é Uva')

            resultado.innerHTML = "Opção selecionada é: Uva"

            break;

        case 'laranja':

            console.log('Opção selecionada é Laranja')

            resultado.innerHTML = "Opção selecionada é: Larana"

            break;

        case 'maçã':

            console.log('Opção selecionada é Maçã')

            resultado.innerHTML = "Opção selecionada é: Maçã"

            break;

        default:

            console.log('Opção inválida!');

            resultado.innerHTML = "Opção inválida"

            break;

    }

}
