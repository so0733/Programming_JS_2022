const everything = ['사과', 1, undefined, true, '배열', null];
console.log(everything);
console.log(everything.length); // 배열 요소 개수 구하기

const emptyValue = [null, undefined, false, '', NaN];
console.log(emptyValue);
console.log(emptyValue.length); // 배열 요소 개수 구하기

const findLastElement = ['a', 'b', 'c', 'd', 'e'];
console.log(findLastElement);
console.log(findLastElement[findLastElement.length - 1]);   // 마지막 요소 구하기
console.log(findLastElement[findLastElement.length - 2]);
console.log(findLastElement[findLastElement.length - 3]);
console.log(findLastElement[findLastElement.length - 4]);
console.log(findLastElement[findLastElement.length - 5]);

// 1분 퀴즈
const arr = [1,2,3,4,5];
console.log(arr[arr.length-3]);