# https://leetcode.com/problems/merge-two-sorted-lists/description/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
from typing import Optional

# Aqui é definido o que é uma ListNode, para conseguir simular os input/output do Leetcode
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

        
class Solution:
    def mergeTwoLists(self, lista_1: Optional[ListNode], lista_2: Optional[ListNode]) -> Optional[ListNode]:
        lista_resultado = temp = ListNode
        while lista_1 is not None and lista_2 is not None:
            if lista_1.val < lista_2.val:
                temp.next = lista_1 #3
                lista_1 = lista_1.next
            else:
                temp.next = lista_2 #3
                lista_2 = lista_2.next
            temp = temp.next
        temp.next = lista_1 or lista_2
        return lista_resultado.next


#Não copiar dessa linha para baixo
# Essa função cria listas node, para facilitar ao realizar tarefas e conseguir realizar os desafios no VSCODE em Python.
def _cria_listas_node(lista_input):
    inicio = temp = ListNode
    for x in lista_input:
        temp.next = ListNode(x)
        temp = temp.next
    lista_node = inicio.next
    return lista_node


# Essa função pega uma lista node e devolve uma lista comum em python
def _tira_da_lista_node(lista_node):
    lista = []
    while lista_node is not None:
        lista.append(lista_node.val)
        lista_node = lista_node.next
    return lista

# Parte que realiza a chamada das funções para validar se esta dando tudo certo
lista_x = [1,2,4]
lista_y = [1,3,4]
lista_1 = _cria_listas_node(lista_x)
lista_2 = _cria_listas_node(lista_y)
lista_node = Solution().mergeTwoLists(lista_1=lista_1 , lista_2=lista_2)
resposta = _tira_da_lista_node(lista_node)
print(resposta)
assert resposta == [1,1,2,3,4,4]
print("Deu tudo certo")

