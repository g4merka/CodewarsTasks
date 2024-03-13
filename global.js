function calc(operation, a, b) {
    if (operation == 'add') {
        return a + b;
    }
    else if (operation == 'multi') {
        return a * b;
    }
    else if (operation == 'subtract') {
        return a - b;
    }
}
let add = calc('add', 3, 2);
console.log('a + b = ', add);
let multi = calc('multi', 3, 2);
console.log('a * b = ', multi);
let subtract = calc('subtract', 3, 2);
console.log('a - b = ', subtract);