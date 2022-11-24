/**
 * @param {number} num 연속된 수의 개수
 * @param {number} total num개의 정수를 모두 더한 값
 * @returns {number[]} num개의 연속된 수를 더했을 때 total이 되는 정수들
 */
function solution(num, total) {
  // 중간 위치의 정수를 구한다.
  const center = Math.ceil(total / num);
  // 중간 위치의 정수를 기준으로 한쪽에 위치한 정수들의 개수를 구하는데,
  // 개수가 짝수가 아니라면 1을 빼고 2로 나눈다.
  const sideLength = num % 2 === 0 ? num / 2 : (num - 1) / 2;
  // 연속이 시작되는 정수를 구한다.
  const start = center - sideLength;

  // 연속이 시작되는 정수부터 1씩 증가시켜 총 num개의 정수들의 배열을 반환한다.
  return [...new Array(num)].map((_, i) => start + i);
}
