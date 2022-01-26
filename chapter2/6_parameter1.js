function a(parameter) {
    console.log(parameter);
}
a('argument');

function b(w, x, y, z) {
    console.log(w, x, y, z);
    console.log(arguments);
}
b('Hello', 'Parameter', 'Argument');

function c (w, x) {
    console.log(w, x);
}
c('Hello', 'Parameter', 'Argument');

function add(x,y) {
    return x+y;
}
console.log(add(3,5));
console.log(add(8,7));