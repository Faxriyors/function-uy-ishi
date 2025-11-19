function num(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}

num(5, 9);

function sum() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(sum());   

function user(name, age) {
    console.log("Salom, " + name + "! Siz " + age + " yoshdasiz.");
}

user("Faxriyor", 14);

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));  

function nima(num) {
    if (num % 3 === 0) {
        return "Ha";
    } else {
        return "Yo'q";
    }
}

console.log(nima(9));   
console.log(nima(10));