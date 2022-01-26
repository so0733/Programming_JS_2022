const target = ['가','나','다','라','마'];
target.splice(1);       // 해당 인덱스 '나' 부터 끝까지 모든 요소 제거
console.log(target);

const target2 = ['가','나','다','라','마','바','사'];
target2.splice(4);       // 해당 인덱스 '마' 부터 끝까지 모든 요소 제거
console.log(target2);

const target3 = ['가','나','다','라','마'];
target3.splice(1, 3, '타', '파');   // 인덱스 1 '나'부터 3개 요소 먼저 제거 후 요소 자리를 '타'와 '파'로 채움
console.log(target3);