// https://leetcode.com/problems/permutations/

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.


var minimumMoney = function(transactions) {
    let dinheiroAtual = 0
    let minimoNecessario = 0
    let gastoMaximo = 0
    for (let transaction of transactions) {
        if(transaction[0] > transaction[1]){
            dinheiroAtual += transaction[0] - transaction[1]
            if (minimoNecessario > transaction[1]) {
                continue
            } else {
                minimoNecessario = transaction[1]
            }
        } else {
            if (gastoMaximo > transaction[0]) {
                continue
            } else {
                gastoMaximo = transaction[0]
            }
        }
    }
    if (minimoNecessario > gastoMaximo) {
        dinheiroAtual += minimoNecessario
    } else {
        dinheiroAtual += gastoMaximo
    }
    return dinheiroAtual
}





transactions = [[7,2],[0,10],[5,0],[4,1],[5,8],[5,9]]
console.log(minimumMoney(transactions) == 18, minimumMoney(transactions))