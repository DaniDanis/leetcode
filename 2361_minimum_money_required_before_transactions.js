// https://leetcode.com/problems/minimum-money-required-before-transactions/submissions/877755964/

// You are given a 0-indexed 2D integer array transactions, where transactions[i] = [costi, cashbacki].

// The array describes transactions, where each transaction must be completed exactly once in some order. At any given moment, you have a certain amount of money. In order to complete transaction i, money >= costi must hold true. After performing a transaction, money becomes money - costi + cashbacki.

// Return the minimum amount of money required before any transaction so that all of the transactions can be completed regardless of the order of the transactions.


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
if (minimumMoney(transactions) == 18, minimumMoney(transactions)) {
    console.log("Deu tudo certo!!!")
}