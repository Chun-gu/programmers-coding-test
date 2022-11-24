/**
 * 주어진 정수 배열에서 최빈값을 반환하는데 최빈값이 여러 개면 -1을 반환하는 함수
 * @param {number[]} array 정수 배열
 * @returns {number} 최빈값 또는 -1
 */
function solution(array) {
  // 배열에 존재하는 각 숫자들의 개수를 기록하는 객체를 만든다.
  const numberState = array.reduce((obj, number) => {
    // 현재 number가 obj에 존재하지 않으면 1을 할당하고 존재하면 1을 더한다.
    obj[number] = (obj[number] || 0) + 1;
    return obj;
  }, {});

  // 최빈값을 넣어둘 배열을 만든다.
  const modes = [];
  // 가장 많은 출현 빈도를 구한다.
  const mode = Math.max(...Object.values(numberState));
  // 객체를 순회하면서 가장 많은 출현 빈도를 value로 갖는 number를 modes 배열에 넣는다.
  for (const [number, count] of Object.entries(numberState)) {
    if (count === mode) modes.push(parseInt(number));
  }

  // modes 배열의 길이가 1보다 크다면 최빈값이 여러 개라는 뜻이므로,
  // -1을 반환하고 아니라면 첫번째 인덱스의 값을 반환한다.
  return modes.length > 1 ? -1 : modes[0];
}
