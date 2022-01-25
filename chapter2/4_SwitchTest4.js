let fruit = '사과';
if (fruit === '사과') {
    console.log('사과 입니다.');
} else if (fruit === '배') {
    console.log('배 입니다.');
} else if (fruit === '포도') {
    console.log('포도 입니다.');
} else {
    console.log('뭔지 모르겠습니다.');
}

switch (fruit) {
    default:
        console.log('뭔지 모르겠습니다.');
        break;
    case '사과':
        console.log('사과');
        break;
    case '배':
        console.log('배');
        break;
    case '포도':
        console.log('포도');
        break;
}