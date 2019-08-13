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

// =========== What is the Big O for this? ================
// TODO: 1) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

// O(1) - constant time

// TODO: 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

// O(n) = linear time

// =============== Even or Odd =====================
// TODO: What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
        return false;
}

// O(1) - constant time because there is only 1 input (value) and only 1 operation

// ================== Are you here? ======================
// TODO: What is the Big O of the following algorithm? Explain answer.
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// O(n^2) = Polynomial. Nested for loop. Two levels of for loops.

// =============== Doubler =======================
// TODO: What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// O(n) = linear because the operation is dependent on size of array. Directly proportional to input size of array




