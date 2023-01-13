// https://leetcode.com/problems/valid-parenthesis-string/

// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

// The following rules define a valid string:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".


var checkValidString = function(s) {
    let valida = 0
    let coringas = 0
    let coringas_reut = 0
    let lista_auxiliar = s
    for (caracter of s) {
        if (caracter == '(') {
            valida++
        } else if (caracter == ')') {
            valida--
            if (valida < 0 && coringas > 0) {
                coringas--
                valida++
                lista_auxiliar = lista_auxiliar.replace('*','')
                lista_auxiliar = lista_auxiliar.replace(')','')
            } else if (valida < 0) {
                return false
            } else if (lista_auxiliar.indexOf('*') < lista_auxiliar.indexOf('(')) {
                coringas_reut ++
                lista_auxiliar = lista_auxiliar.replace('*','')
                lista_auxiliar = lista_auxiliar.replace(')','')                
            } else {
                lista_auxiliar = lista_auxiliar.replace('(','')
                lista_auxiliar = lista_auxiliar.replace(')','')                
            }
        } else if (caracter == '*') {
            coringas ++
        }
    }
    if (coringas > valida && valida > 0){
        let tamanho = lista_auxiliar.length - 1
        for (var x = 0; x < tamanho; x++) {
            if (lista_auxiliar.indexOf('*') < lista_auxiliar.indexOf('(')) {
                lista_auxiliar = lista_auxiliar.replace('*','')
                coringas--
            } else {
                valida --
                coringas --
                lista_auxiliar = lista_auxiliar.replace('(','')
                lista_auxiliar = lista_auxiliar.replace('*','')
            }
        }
        for (var y = 0; y < coringas_reut-1; y++) {
            lista_auxiliar = lista_auxiliar.replace('(','*')
        }
        tamanho = lista_auxiliar.length
        for (var z = 0; z < tamanho; z++){
            lista_auxiliar = lista_auxiliar.replace('*', '')
        }
        if ((coringas >= valida && valida >= 0) || lista_auxiliar.length == 0) {
            return true
        } else {
            return false
        }
    } else if (valida == 0) {
        return true
    } else if (coringas + coringas_reut > valida) {
        return true
    } else {
        return false
    }
}






s = "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
resposta = checkValidString(s)
if (resposta) {
    console.log("Deu certo")
} else {
    console.log("Deu errado")
}
s = "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
resposta = checkValidString(s)
if (!resposta) {
    console.log("Deu certo")}
    else {
        console.log("Deu errado")
    }
s = "(*))"
resposta = checkValidString(s)
if (resposta) {
    console.log("Deu certo")}
    else {
        console.log("Deu errado")
    }
s = "(()(())()())*((()(())))*()(*)()()(*((()((*(*))))()*()(()((()(*((()))*(((())(())))*))(()*))(()*)"
resposta = checkValidString(s)
if (resposta) {
    console.log("Deu certo")}
    else {
        console.log("Deu errado")
    }
s = "(())((())()()(*)(*()(())())())()()((()())((()))(*"
resposta = checkValidString(s)
if (!resposta) {
    console.log("Deu certo")}
    else {
        console.log("Deu errado")
    }
