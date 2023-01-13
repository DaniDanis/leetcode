// https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/

// You are given a positive integer num. You may swap any two digits of num that have the same parity 
// (i.e. both odd digits or both even digits).
// Return the largest possible value of num after any number of swaps.

var largestInteger = function(num) {
    let numEmString = String(num)
    let array = numEmString.split('')
    let listaPar = []
    let listaImpar = []
    // Monta as lista de numeros pares e impares
    for (x of array) {
        x = Number(x)
        if (x%2 == 0) {
            listaPar.push(x)
        } else {
            listaImpar.push(x)
        }
    }
    listaPar.sort()
    listaImpar.sort()
    // Os contadores servem para localizar o ultimo item das listas,
    // sempre que a gente acessar um item a gente vai somar mais um.
    let contadorPar = 1
    let contadorImpar = 1
    // Remonta o array, considerando sempre o maior de cada lista
    for (y in array) {
        let valor = Number(array[y])
        if (listaPar.includes(valor)) {            
            array[y] = listaPar[listaPar.length - contadorPar]
            contadorPar ++
        } else {
            array[y] = listaImpar[listaImpar.length - contadorImpar]
            contadorImpar ++
        }
    }
    num = Number(array.join(''))
    return num
};

console.log(largestInteger(4395812395))