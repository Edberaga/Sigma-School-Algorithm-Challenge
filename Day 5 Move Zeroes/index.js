const array = [0, 2, 0, 5, 7, 0, 1];

function moveZeroes(arr) {
  let countZeroes
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      arr.push(0);
    }
  }
  return arr;
}

console.log(`Array after moving zeroes: [${moveZeroes(array)}]`);