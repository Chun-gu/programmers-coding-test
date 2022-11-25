// @ts-check
/**
 * @param {number} n k진수로 바꿀 정수
 * @param {number} k 진수
 * @returns {number} 조건에 맞는 소수의 개수
 */
function solution(n, k) {
  return (
    n
      // k진수로 변환한다.
      .toString(k)
      // 0을 기준으로 나눈다.
      .split("0")
      // 값들을 순회하며 거른다.
      .filter((value) => {
        // 값이 '1'이거나 빈 문자열이면 false를 반환한다.
        if (value === "1" || value === "") return false;
        // 소수인지 판별한다.
        for (let i = 2; i <= Math.floor(Math.sqrt(+value)); i += 1) {
          // 소수가 아니라면 false를 반환한다.
          if (+value % i === 0) return false;
        }
        // 소수라면 true를 반환한다.
        return true;
        // 길이를 구해 반환한다.
      }).length
  );
}
