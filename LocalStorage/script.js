let usuários = []

const addUsuários = () => {
    let nome = document.getElementById('nome').value
    let nome = document.getElementById('email').value
    let nome = document.getElementById('senha').value

    if(localStorage.getItem('usuarios') !=null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
        usuarios.forEach(usuarios => {
            console.log(usuarios[0], usuarios[1])
            tbody.innerHTML += "<tr> <td>"+usuario[0]+"</td> <td>"+usuario[1]+"</td> </tr>"
            
        });
    }else {
        tbody.innerHTML += "<tr> <td>Vazio</td> <td>Vazio</td> </tr>"
    }

    usuários.push([nome, email, senha])
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
}

const listUsuarios = () => {
    let tbody = document.getElementById('table-linha')

    tbody.innerHTML += "<tr> <td>Pedro</td> <td>pedro_covre@estudante.sesisenai.org.br<td> </tr>"

}
