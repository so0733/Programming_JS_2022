let first = true;
let second = false;

if (first) {  
    console.log('첫 번째 조건 충족합니다.');
    if (second) {
        console.log('두 번째 조건 충족합니다.');
    } else {
        console.log('두 번째 조건 불충족합니다.');
    }
} else {
    console.log('첫 번째 조건 불충족 합니다.');
}