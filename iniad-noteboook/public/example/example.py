from collections import deque
from typing import Literal, Optional

Sign = Literal["+", "-", "*", "/"]


class Node:
    def __init__(
        self: "Node",
        value: Sign | int,
        left: Optional["Node"] = None,
        right: Optional["Node"] = None,
    ) -> None:
        self.value: Sign | int = value
        self.left = left
        self.right = right


def compute(node: Node, stack: deque[int]) -> None:
    node.value
    if node.left is not None:
        compute(node.left, stack)
    if node.right is not None:
        compute(node.right, stack)
    if node.value == "+":
        stack.append(stack.pop() + stack.pop())
    elif node.value == "-":
        stack.append(-stack.pop() + stack.pop())
    elif node.value == "*":
        stack.append(stack.pop() * stack.pop())
    elif node.value == "/":
        stack.append(int(1 / (stack.pop() / stack.pop())))
    else:
        stack.append(node.value)


tree = Node("*", Node("+", Node("-", Node(9), Node(3)), Node(1)), Node(6))
stack: deque[int] = deque()
compute(tree, stack)
print(stack[0])
