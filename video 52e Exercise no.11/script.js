function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(6)); // 720

const n = 6;

const result = Array.from({ length: n }, (_, i) => i + 1)
  .reduce((acc, curr) => acc * curr, 1);

console.log(result); // 720