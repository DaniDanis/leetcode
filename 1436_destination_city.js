// https://leetcode.com/problems/destination-city/

var destCity = function(caminhos) {
    let listaCidades = []
    let listaRepetidas = []
    let cidadesDestino = []
    for (let caminho of caminhos) {
        for(let cidade of caminho) {
            if (listaCidades.includes(cidade)) {
                listaRepetidas.push(cidade)
            } else {
                listaCidades.push(cidade)
                if (caminho.indexOf(cidade) == 1) {
                    cidadesDestino.push(cidade)
                }
            }
        }
    }
    for (let cidadeDestino of cidadesDestino) {
        if (!listaRepetidas.includes(cidadeDestino)) {
            return cidadeDestino
        }
    }
};


// caminhos = input
var caminhos = [["B","C"],["D","B"],["C","A"]]
var output = "A"
var resposta = destCity(caminhos)
if (resposta = output) {
    console.log("Deu certo!")
}
