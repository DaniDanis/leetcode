# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

# Aprendizados legais desse exercicio, quando a gente passa o input em forma de variavel para chamada exemplo:
#   nums = [1,1,2]
#   resposta = Solution().removeDuplicates(nums)
# Ao fazer modificações "in-place", conseguimos alterar essa lista sem necessariamente retornar ela pela função.

from typing import List

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        indice_nums = 0
        # Temos que retirar -1 aqui por conta de como funciona a lista, os indices começam a contagem 
        # do zero(0), e a lista começa a contagem a partir do um(1).
        tamanho_nums = len(nums)-1
        while indice_nums < tamanho_nums:
            if nums[indice_nums] == nums[indice_nums+1]:
                del nums[indice_nums+1]
                tamanho_nums -= 1
            else:
                indice_nums += 1 
        return len(nums)


nums = [1,1,2]
resposta = Solution().removeDuplicates(nums)
assert resposta == 2
assert nums == [1,2]
nums = [1,1,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,7]
resposta = Solution().removeDuplicates(nums)
assert resposta == 7
assert nums == [1,2,3,4,5,6,7]
print("Passou em tudo")
