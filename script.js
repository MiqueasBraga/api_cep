const findEstados = () => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let inputEstado = document.getElementById('Estado')


        let estados = ''

        json.forEach(estado => {
            estados += `<option value=${estado.sigla}>${estado.nome}</option>`
            
        });

    
        console.log(estados)
        inputEstado.innerHTML = estados
        
    })
}

findEstados()