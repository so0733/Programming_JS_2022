const target = ['가','나','다','라','마'];
target.pop();           // 마지막 요소 '마' 제거
console.log(target);

const target2 = ['가','나','다','라','마'];
target2.shift();           // 첫 번째 요소 '가' 제거
console.log(target2);

const target3 = ['가','나','다','라','마'];
target3.splice(1, 1);       // (1 : '가' 시작 인덱스, 1 : '나' 제거)
console.log(target3);

const target4 = ['가','나','다','라','마'];
target4.splice(2, 2);       // (2 : '나' 시작 인덱스, 2 : '다','라' 제거)
console.log(target4);

const target5 = ['가','나','다','라','마','바','사','아'];
target5.splice(4, 3);       // (4 : '라' 시작 인덱스, 3 : '마','바','사' 제거)
console.log(target5);