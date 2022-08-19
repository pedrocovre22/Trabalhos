let produto = "Soja"
let regiao = "Sul"

switch (regiao) {
    case 'Sul':
        console.log('Regiao SUL', 'Produto:', produto)
        break;
    case 'Norte':
        console.log('Regiao NORTE', 'Produto:', produto)
        break;
    default:
            console.log('Produto sem regiao')
            break;
}
