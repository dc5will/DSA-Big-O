'use strict';

/* 
============ Definitions ====================
- Algorithm = clearly set of instructions to solve a problem
- Algorithms performance is analyzed in terms of SPACE or TIME.
- Space complexity = amount of physical memory that an algorithm requires to complete (think recursion = stacks of recursive function calls)
- Time complexity = number of operations an algorithm requires to complete.
- Big-O = describes time complexity of an algorithm. Use it to say how much time is needed for an algorithm to complete its work with a given input. Helps us understand best-case, worst-case, and average-case performance.

============ Big O classifications ============
- Constant time O(1) = "holy grail". No matter the size of input, the algorithm will take the same amount of time to complete.
- Logarithmic time (O(log n)) = 2nd best. Takes longer with larger inputs, but the running time increases slowly
- Linear time O(n) = running times that are DIRECTLY proportional to the size (n) of the input.
- Polynomial time O(n^k) = running time that would be some input size n raised to some constant power k. Nested loops. Algorithm that requires 2 levels of looping over an input
- Exponential time O(2^n) = running times that grow rapidly with any increase in input size.
*/