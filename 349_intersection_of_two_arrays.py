# https://leetcode.com/problems/intersection-of-two-arrays/submissions/

# Given two integer arrays nums1 and nums2, return an array of their intersection.
# Each element in the result must be unique and you may return the result in any order.

# Dados dois arrays de numeros inteiros, lista_1 e lista_2, retorne a intersecção deles.
# Cada elemento no resultado precisa ser unico, e o resultado pode ser em qualquer ordem.
from typing import List

class Solution:
    def intersection(self, lista_1: List[int], lista_2: List[int]) -> List[int]:
        resposta = []
        for x in lista_1:
            if x in lista_2:
                if not x in resposta:
                    resposta.append(x)
        return resposta


lista_1 = [1,2,3,4,5,6,7,8]
lista_2 = [4,4,4,4,5,5,5,6,6,6]
resposta = Solution().intersection(lista_1, lista_2)
resposta.sort
assert resposta == [4,5,6]
print(resposta)
print("Deu tudo certo!!!")