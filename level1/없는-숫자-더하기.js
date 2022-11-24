// 0부터 9까지 모두 있는 배열의 합이 45이므로
// 45에서 배열 numbers의 요소의 총합을 빼면 된다.
function solution(numbers) {
    // reduce를 이용해서 배열 numbers 요소의 총합 구하기
    const sum = numbers.reduce((prev,curr) => prev + curr);
    const answer = 45 - sum;
    return answer;
}