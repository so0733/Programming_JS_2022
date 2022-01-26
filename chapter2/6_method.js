const debug = {
    log : function(value) {
        console.log(value);
    },
};
debug.log('Hello, Method');

// {} === {}
// 'str' === 'str';
// 123 === 123;
// false === false;
// null === null;
// undefined === undefined;

const a = {name:'소현아'};
const array = [1,2,a];
console.log(a === array[2]);

// 참조
const b = {name:'소현아'};
const c = b;
b.name = 'hero';
console.log(c.name);

// 복사
let aa='소현아';
let bb=aa;
aa='hero';
console.log(bb);