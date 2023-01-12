# https://leetcode.com/problems/maximum-depth-of-binary-tree/


# Definition for a binary tree node.
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
        
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        return 'nada'



lista_raiz = [3, 9, 20, None, None, 15, 7]
def _criar_tree_node(lista_raiz):
    inicio = temp = TreeNode
        for x in lista_raiz:
            temp.next = ListNode(x)
            temp = temp.next
        lista_node = inicio.next
        return lista_node