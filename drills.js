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

// =================== Naive search =====================
// TODO: What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) = linear because the operation is dependent on size of the array which is directly proportional to input size of the array.

// ==================== Creating pairs ===================
// TODO: What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// O(n^2) = Polynomial. Nested for loop. Two levels of for loops.

// ===================== Compute the sequence ==================
// TODO: What does the following algorithm do? What is its runtime complexity? Explain your answer
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// Adds the first 2 indexes of the array and stores it in a different array.
// It is O(1) - constant because it is appending at the end of the array due to reassigning indices.

// ====================== An efficient search ====================
// TODO: In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// O(log(n)) = logarithmic time - always cuts the amount of items it needs to search in half (divide and conquer). The time complexity increases slowly in a logarithmic fashion.

// ==================== Random element ======================
// TODO: What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) = constant time - simple calculation. Doesn't depend on the length of the array. No iterations occuring.


// ==================== What Am I? =============================
// TODO: What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// The first conditional checks if inputed number is less than 2 or if its a whole number. The for loop checks to see if the inputed number is a prime number.
// O(n) - Linear run time complexity. The for loop that iterates through each item once and only once.









