//#region 1 && 2
export function Ex1_2(array, action) {
  let result = null;

  switch (action) {
    case "max":
      array.forEach((element) => {
        if (result == null) {
          result = element;
        } else if (result <= element) {
          result = element;
        }
      });
      break;

    case "min":
      array.forEach((element) => {
        if (result == null) {
          result = element;
        } else if (result >= element) {
          result = element;
        }
      });
      break;
  }

  return result;
}
//#endregion

//#region 3 && 4
export function Ex3_4(array, action) {
  let result = [];

  switch (action) {
    case "asc":
      array.forEach((ele, index) => {
        for (let i = 0; i < array.length - 1 - index; i++) {
          const val1 = array[i];
          const val2 = array[i + 1];

          if (val1 > val2) {
            // สลับค่าตัวเลข
            let temp = val1;
            array[i] = array[i + 1];
            array[i + 1] = temp;
          }
        }
      });
      result = array;
      break;

    case "desc":
      array.forEach((ele, index) => {
        for (let i = 0; i < array.length - 1 - index; i++) {
          const val1 = array[i];
          const val2 = array[i + 1];

          if (val1 < val2) {
            // สลับค่าตัวเลข
            let temp = val1;
            array[i] = array[i + 1];
            array[i + 1] = temp;
          }
        }
      });
      result = array;
      break;
  }
  return result;
}
//#endregion

//#region 5
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

export function findPrimesInRange(start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}
//#endregion

//#region 6
export function factorial(n) {
  if (n < 0) {
    return "ไม่สามารถคำนวณ Factorial ของค่าลบได้";
  } else if (n === 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
//#endregion

//#region 7
export function findHypotenuse(a, b) {
  const c = Math.sqrt(a * a + b * b);
  return c;
}
//#endregion

//#region 8
export function binaryToDecimal(binaryStr) {
  let decimal = 0;
  for (let i = binaryStr.length - 1, j = 0; i >= 0; i--, j++) {
    decimal += parseInt(binaryStr[i]) * Math.pow(2, j);
  }
  return decimal;
}
//#endregion

//#region 9
export function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  } else if (decimal === 1) {
    return "1";
  } else {
    const remainder = decimal % 2;
    const quotient = Math.floor(decimal / 2);
    const binaryOfQuotient = decimalToBinary(quotient);
    return binaryOfQuotient + remainder;
  }
}
//#endregion

//#region 10
export function addMatrices(A, B) {
  let result = [];
  const numRows = A.length;
  const numCols = A[0].length;

  for (let index = 0; index < numRows; index++) {
    const row = [];
    for (let i = 0; i < numCols; i++) {
      row.push(A[index][i] + B[index][i]);
    }
    result.push(row);
  }

  return result;
}
//#endregion

//#region Bonus.
export function drawPyramid(rows) {
  let pp = [];
  for (let index = 1; index <= rows; index++) {
    let row = "";
    for (let i = 1; i <= rows; i++) {
      if (i === index || i === rows - index + 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    pp.push(row);
  }
  return pp;
}

//#endregion
