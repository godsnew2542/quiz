import {
  Ex1_2,
  Ex3_4,
  findPrimesInRange,
  factorial,
  findHypotenuse,
  binaryToDecimal,
  decimalToBinary,
  addMatrices,
  drawPyramid,
} from "./main.js";

const numberList = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrixB = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

function main() {
  const max = Ex1_2(numberList, "max");
  console.log("1: ", max);

  const min = Ex1_2(numberList, "min");
  console.log("2: ", min);

  const asc = Ex3_4(numberList, "asc");
  console.log("3: ", asc);

  const desc = Ex3_4(numberList, "desc");
  console.log("4: ", desc);

  const primesInRange = findPrimesInRange(0, 500);
  console.log("5: ", primesInRange);

  const fac = factorial(5);
  console.log("6: ", fac);

  const hypotenuse = findHypotenuse(3, 4);
  console.log("7: ", hypotenuse);

  const decimal = binaryToDecimal("0111");
  console.log("8: ", decimal);

  const binary = decimalToBinary(30);
  console.log("9: ", binary);

  const resultMatrix = addMatrices(matrixA, matrixB);
  console.log("10: ", resultMatrix);

  const bonus = drawPyramid(5);
  console.log("bonus: ");
  for (let i = 0; i < bonus.length; i++) {
    console.log(bonus[i]);
  }
}

main();
