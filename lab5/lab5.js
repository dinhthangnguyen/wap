"use strict";

// 1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-thenelse construct available in Javascript.

function max(num1, num2) {
    if (!Number(num1) || !Number(num2)) {
        return NaN;
    }

    if (num1 > num2) {
        return num1;
    }
    return num2;
}

console.log("max: " + max(3, "a"));
console.log("max: " + max(3, 4));

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(num1, num2, num3) {
    if (!Number(num1 || !Number(num2) || !Number(num3))) {
        return NaN;
    }

    return max(max(num1, num2), num3);
}

console.log("maxOfThree: " + maxOfThree(3, 5, 7));
console.log("maxOfThree: " + maxOfThree(3, 5, "a"));

// 3: Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(s) {
    if (s.length != 1) {
        return false;
    }
    let vowel = "ueoai"
    return vowel.indexOf(s.toLowerCase()) != -1 ? true : false;
}

console.log("isVowel: " + isVowel("b"));
console.log("isVowel: " + isVowel("a"));
console.log("isVowel: " + isVowel("A"))

//4: Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in the
// given array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)
function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
   
    return total;
}

console.log("sum: " + sum([1, 2, 3, 4]))

function multiply(array) {
    if (array.length == 0) {
        return 0;
    }
    if (array.length == 1) {
        return array[0];
    }

    let total = array[0];
    for (let i = 1; i < array.length; i++) {
        total *= array[i];
    }
    return total;
}

console.log("multiply: " + multiply([1, 2, 3, 4]))

// 5: Define a function reverse(str) that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj"

function reverse(str) {
    if (str.length <= 1) {
        return str;
    }
    let result = "";
    for(let i = str.length -1;i>= 0;i--) {
        result += str[i];
    }
    return result;
}
console.log(reverse("jag testar"))

// 6 Write a function findLongestWordLength() that takes an array of words and returns the length of the longest one.

function findLongestWordLength(stringArray) {
 return stringArray.reduce ((prev, next) => {
    return prev.length > next.length ? prev: next
 }).length
}

console.log(findLongestWordLength(["abc","dcef","ddddsdsdbbb","ggggg","acccc"]))

// 7: Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters

function filterLongWords(wordArray, i) {
    return wordArray.filter((element) => element.length > i);
}

console.log("filterLongWords: " + filterLongWords(["abc","defg","12345"],3))

// 8: Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 12 + 22 +32 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach
function computeSumOfSquares(numberArray) {
    return numberArray.map((element) => element * element)
    .reduce((e1, e2) => e1 + e2);
}

console.log("computeSumOfSquares: " +  computeSumOfSquares([1,2,3]))

// 9: Write a function named, printOddNumbersOnly, that takes as input, an array of numbers and it finds and prints
// only the numbers which are odd.

function printOddNumbersOnly(numberArray) {
    numberArray.filter(e => e %2 != 0).forEach(element => {
        console.log(element)
    });
}
printOddNumbersOnly([1,2,3,4,5])

// 10: Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 22 +42 = 20.
function computeSumOfSquaresOfEvensOnly (numberArray) {
   return numberArray.filter(e => e %2 == 0)
    .map(e => e *e)
    .reduce((e1,e2) => e1 + e2);
}

console.log("computeSumOfSquaresOfEvensOnly: " + computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

// 11: Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach. 

function sumFuntional(array) {
    return array.reduce((e1,e2) => e1 + e2)
  
}
console.log("sumFuntional: " + sumFuntional([1, 2, 3, 4]))

function multiplyFunctional(array) {
    return array.reduce((e1,e2) => e1 * e2)
}
console.log("multiplyFunctional: " + multiplyFunctional([1, 2, 3, 4]))

/*
12: Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as
output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output)
*/

function printFibo(n, a, b) {
    if (n < 1) {
        return;
    }
    if (n == 1 ) {
        console.log(a);
    }
    if (n == 2) {
        console.log([a,b].toString())
    }
    let count = 2;
    let array = [a,b];
    while (count < n) {
        let length = array.length;
        count++;
        array.push(array[length-2] + array[length-1])
    }
    console.log(array.toString())
}
printFibo(6,0,1);
printFibo(10,0,1);