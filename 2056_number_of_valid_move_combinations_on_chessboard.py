# https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/

from typing import List


class Solution:
    def countCombinations(self, pieces: List[str], positions: List[List[int]]) -> int:
        if pieces == "rook":            
            return 'nada'





pieces = ["rook"]
positions = [[1,1]]
resposta = Solution().countCombinations(pieces, positions)
if resposta == 15:
    print("deu bom")

