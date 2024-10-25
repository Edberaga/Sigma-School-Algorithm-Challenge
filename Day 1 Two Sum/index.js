function twoSum(arr, target) {
    let target1 = 0;
    let target2 = 0;
    console.log(`Array: ${arr}, target: ${target}`);
    for(let i = 0; i < arr.length; i++) {
      target1 = i;
      // console.log(`First target: ${arr[target1]}`);
      for(let j = 0; j < arr.length; j++) {
        // console.log(`Checking ${arr[target1]} + ${arr[j]} = ${target}`);
        if(i === j) {
          continue; //Skip for same indexes
        }
        if(arr[i] + arr[j] === target) {
          target2 = j;
          // console.log(`TRUE! ${arr[target1]} + ${arr[target2]} = ${target}`);
          return [target1, target2];
        }
        // console.log(`FALSE! ${arr[target1]} + ${arr[j]} is not ${target}`);
      }
    }
    return -1; //just in case for other case, if none able to find target. return -1
  }
  
  const test_case = [
    [[2,7,11,15], 9], //[0, 1]
    [[3,2,4], 6], // [1, 2]
    [[3,3], 6] //[0, 1]
  ];
  
  for(const test of test_case) {
    console.log(twoSum(test[0], test[1]));
  }