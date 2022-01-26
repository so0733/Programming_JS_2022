const target =  ['가','나','다','라','마'];
const result = target.includes('다');   // '다' 요소가 target에 있는지 찾기
const result2 = target.includes('카');  // '카' 요소가 target에 있는지 찾기

console.log(result);    // '다' 있음
console.log(result2);   // '카' 없음

const target2 = ['라','나','다','라','다'];
const result3 = target2.indexOf('다');      // indexOf : 앞에서 부터 주어진 값이 있는지 찾음 (인덱스 2에 있음)
const result4 = target2.lastIndexOf('라');  // lastIndexOf : 뒤에서 부터 찾음 (인덱스 3에 있음)
const result5 = target2.indexOf('가');      // 존재하지 않은 값을 찾으면 결과값은 -1

console.log(result3);
console.log(result4);
console.log(result5);