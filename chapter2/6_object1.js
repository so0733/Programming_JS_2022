const so = {
    name: '소현아',
    year: 1995,
    month: 11,
    date : 7,
    gender: 'M',
};

console.log(so.name);
console.log(so['name']);
console.log(so.date);
console.log(so['date']);
console.log(so.hello);

// 객체 속성 수정

so.gender = 'F';
console.log(so.gender);

delete so.gender;
console.log(so.gender);