function solution(array, commands) {
  let answer = [];

  for (let l = 0; l < commands.length; l++) {
    // 이차배열 commands의 l번째 배열에 담긴 숫자를 순서대로 i, j, k에 구조분해 할당한다.
    const [i, j, k] = commands[l];
    // array의 i번째 수부터 j개를 잘라내(slice)는데 배열은 자리수가 0부터 시작하므로 i-1 해준다.
    // 이후 잘라낸 배열을 정렬(sort)하는데, 배열에 한자리 수만 있다면 compareFunction이 없어도 되지만,
    // array의 각 원소는 1 이상 100 이하이므로, 오름차순 정렬해주는 compareFunction을 넣어준다.
    const processedArray = array.slice(i - 1, j).sort(function (a, b) {
      return a - b;
    });
    // array를 자르고 정렬한 processedArray에서 k-1번째 수를 변수 kthNumber에 대입한다.
    const kthNumber = processedArray[k - 1];
    // 변수 kthNumber를 배열 answer에 push한다.
    answer.push(kthNumber);
  }
  return answer;
}
