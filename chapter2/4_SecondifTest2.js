let first = true;
let second = false;

if (first && second) {  // first와 second 모두 true  
    console.log('첫 번째 조건 충족!');
    console.log('두 번째 조건 충족!');
} else if (first) {     // first만 true
    console.log('첫 번째 조건 충족!');
    console.log('두 번째 조건 불충족!');
} else {                // 둘 다 false
    console.log('첫 번째 조건 불충족')
}