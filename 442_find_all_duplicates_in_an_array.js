// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

var findDuplicates = function(nums) {
    let lista_repetidos = {}
    let resposta = []
    for (var num of nums) {
        if (lista_repetidos[num]){
            lista_repetidos[num] += 1
        } else {
            lista_repetidos[num] = 1
        }
    }
    for (x in lista_repetidos) {
        if (lista_repetidos[x] == 2){
            resposta.push(x)
        }
    }
    return resposta
};


saida = findDuplicates([4,3,2,7,8,2,3,1])
resposta = [2,3]
if (saida[0] == resposta[0] && saida[1] == resposta[1]) {
    console.log("Deu certo")
}

