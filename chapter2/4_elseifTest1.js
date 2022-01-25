const score = 90;
if (score >= 90) {                      // 90점 이상
    console.log('A+');
} else if (score < 90 && score >= 80) { // 90점 미만 80점 이상
    console.log('A');
} else if (score < 80 && score >= 70) { // 80점 미만 70점 이상
    console.log('B+');
} else if (score < 70 && score >= 60) { // 70점 미만 60점 이상
    console.log('B');
} else {                                // 60점 미만
    console.log('F')
}
