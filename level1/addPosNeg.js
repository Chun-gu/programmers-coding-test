function solution(absolutes, signs) {
    // 음수와 양수를 담을 배열 relatives
    const relatives = [];
    for (let i = 0; i < absolutes.length; i++) {
        // 배열 signs의 i번째 요소가 true라면
        // 배열 absolutes의 i번째 요소를 배열 relatives에 push
        if (signs[i] === true) {
            relatives.push(absolutes[i]);
            // 배열 signs의 i번째 요소가 false라면
            // 배열 absolutes의 i번째 요소에 -를 붙여서 배열 relatives에 push
        } else {
            relatives.push(-absolutes[i]);
        }
    }
    // 배열 relatives에 reduce 메서드를 이용해서 합 구하기
    const answer = relatives.reduce((a, b) => {
        return a + b;
    });
    return answer;
}
