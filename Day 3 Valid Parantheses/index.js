function isValid(value) {
  for(let i = 0; i < value.length - 1; i++) {
    if((value[i] === '(' && value[i + 1] !== ')') || (value[i] === '[' && value[i + 1] !== ']') || (value[i] === '{' && value[i + 1] !== '}')) {
        return false;
    }
  }
  return true;
}

const test_case = ['(]', '()', '()[]{}'];

for(const test of test_case) {
    console.log(isValid(test));
}