function findFibonacciNumber(n) {
    if (n <= 0) {
        return 0;
    }

    let number = [0, 1, 1];
    let current = 0;
    for(let i = 2; i < n; i++) {
        current = number[i] + number[i - 1];
        number.push(current);
        console.log(`F${i + 1}. Current: ${current}.`);
    }

    return current;
}

const n = 9;
console.log(`Number of Fibonacci ${n} is ${findFibonacciNumber(n)}`);