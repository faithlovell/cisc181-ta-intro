//Practice writing simple functions in TypeScript

//basics

/**
 * Computes and returns the area of the triangle given its base and height.
 */
function triangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

/**
 * Consumes three numbers and produces their sum. If a number is negative, ignore it.
 */
function addNumbers(first: number, second: number, third: number): number {
  let sum = 0;
  sum += first > 0 ? first : 0;
  sum += second > 0 ? second : 0;
  sum += third > 0 ? third : 0;
  return sum;
}

/**
 * Returns true if the given number is a multiple of 3 or 7, false otherwise.
 */
function isMultiple(num: number): boolean {
  return num % 3 === 0 || num % 7 === 0;
}

//loops

/**
 * Multiplies two numbers together using for loop addition
 */

function multiplicationLoop(x: number, y: number): number {
  let product = 0;
  for (let i = 0; i < y; i++) {
    product += x;
  }
  return product;
}

/**
 * Adds elements of an array using a for..of statement
 * Read about iterators here: https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
 */
function sumArray(arr: number[]): number {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
