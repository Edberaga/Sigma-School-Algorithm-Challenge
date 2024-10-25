function findSingleNumber(nums) {
    let countValue = {};
    for(let i = 0; i < nums.length; i++) {
        if(countValue[nums[i]] === undefined) {
            countValue[nums[i]] = 1;
        } else {
            countValue[nums[i]]++;
        }
    }
    return Object.keys(countValue).find(key => countValue[key] === 1);
}

const nums = [2, 4, 6, 2, 4];
console.log('Single number:', findSingleNumber(nums)); //6