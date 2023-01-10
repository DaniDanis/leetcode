# https://leetcode.com/problems/richest-customer-wealth/submissions/

# You are given an m x n integer grid accounts where accounts[i][j] is the amount of
# money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
# A customer's wealth is the amount of money they have in all their bank accounts.
# The richest customer is the customer that has the maximum wealth.


class Solucao:
    def maior_fortuna(self, contas):
        maior_fortuna = 0
        for conta in contas:
            conta_fortuna = 0
            for quantidade in conta:
                conta_fortuna += quantidade
            if conta_fortuna > maior_fortuna:
                maior_fortuna = conta_fortuna
        return maior_fortuna


# Não copie essas linhas para o site do LeetCode
solucao_1 = Solucao().maior_fortuna([[1,2,3],[3,2,1]])
print(f"A primeira fortuna é de {solucao_1}.")
solucao_2 = Solucao().maior_fortuna([[1,5],[7,3],[3,5]])
print(f"A segunda fortuna é de {solucao_2}." )
solucao_3 = Solucao().maior_fortuna([[2,8,7],[7,1,3],[1,9,5]])
print(f"A terceira fortuna é de {solucao_3}.")

