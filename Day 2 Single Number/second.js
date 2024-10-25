function findSingleNumber(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num;
    }
    return result;
}

const nums = [2, 4, 6, 2, 4];
console.log('Single number:', findSingleNumber(nums)); //6