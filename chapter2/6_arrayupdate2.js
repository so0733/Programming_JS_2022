const target = ['나','다','라','마','바'];
target.unshift('가');   // 배열 맨 앞에 '가' 요소 추가
console.log(target);

const target2 = ['가','나','다','라','마'];
target2.push('바');     // 배열 맨 뒤에 '바' 요소 추가
console.log(target2);

const target3 = ['a','b','c','d','e'];
target3[0]='h';
console.log(target3);   // 배열 'a'가 'h'로 수정되어 출력됨

const target4 = ['일','이','삼','사','오'];
target4[3] ='넷';       // 인덱스 3 자리 '사'를 '넷'으로 수정
console.log(target4);
