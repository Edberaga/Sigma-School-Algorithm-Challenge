function findSingleNumber(nums) {
    const array = [];
    
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        for(let j = 0; j < nums.length; j++) {
            if(i === j) {
                continue;
            }
            if(nums[i] === nums[j]) {
                console.log(`${nums[i]} at index ${i}, is the same as ${nums[j]} at index ${j}`);
                count++;
            }
        }
        if(count === 0) {
            array.push(nums[i]);
        }
    }

    return array;
}

const nums = [2, 4, 6, 2, 4];
const result = findSingleNumber(nums);
console.log(`The single number are... ${result}`);