const target = ['a','b','c','d','e'];
target[5] = 'f';
console.log(target);    // 'f'가 맨 뒤에 추가되어 출력됨

const target2 = ['가','나','다','라','마'];
target2[target2.length] = '바';
console.log(target2);   // '바'가 맨 뒤에 추가되어 출력됨

const target3 = ['나','다','라','마','바'];
target3[0] = '가';
console.log(target3);   // '가'가 첫번째 요소로 변경되어 출력됨