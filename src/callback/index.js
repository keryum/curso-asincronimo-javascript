function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function mul(num1, num2) {
    return num1 * num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};

console.log(calc(2, 2, rest))

// espacio

setTimeout(function() {
    console.log('Hola JavaScript')
}, 2000)

// espacio

function greetings (name) {
    console.log(`!Hola ${name}`);
}

setTimeout(greetings, 2000, 'Oscar');