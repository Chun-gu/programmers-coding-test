// @ts-check
/**
 * @param {string} s 특정 튜플을 표현하는 집합이 담긴 문자열
 * @returns {number[]} s가 표현하는 튜플이 담긴 배열
 */
function solution(s) {
  // "{", "}"를 찾아서 "{"인 경우 "[", "}"인 경우 "]"로 바꾼다.
  const stringifiedSubTuples = s.replace(/[{}]/g, (substring) =>
    substring === "{" ? "[" : "]"
  );
  /**
   * 이차원 배열로 parse한 뒤, 길이의 오름차순으로 정렬한다.
   * @type {number[][]}
   */
  const subTuples = JSON.parse(stringifiedSubTuples).sort(
    (a, b) => a.length - b.length
  );

  const tuple = subTuples.reduce((currTuple, subTuple) => {
    // 튜플에 중복되는 원소가 있는 경우의 풀이
    // currTuple.forEach((value) => {
    //   // currTuple과 subTuple의 겹치는 원소를 찾아서 subTuple에서 해당 원소를 잘라낸다.
    //   const index = subTuple.indexOf(value);
    //   if (index !== -1) subTuple.splice(index, 1);
    // });
    // // subTuple에서 겹치는 원소를 모두 잘라내고 남은 원소를 currTuple에 push한다.
    // currTuple.push(subTuple[0]);

    // 중복되지 않는 원소를 구해서 현재 튜플에 넣는다.
    const [newValue] = subTuple.filter((value) => !currTuple.includes(value));

    currTuple.push(newValue);

    return currTuple;
  }, []);

  return tuple;
}
