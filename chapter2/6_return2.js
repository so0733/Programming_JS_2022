function a() {
    return 10;
}
const b = a();
console.log(b);

function c() {
    console.log('Hello');
    return;
    console.log('Return');
}
c();

function d() {
    if (false) {
        return;
    }
    console.log('실행됩니다.');
}
d();