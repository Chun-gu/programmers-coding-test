// 배열 board는 인형이 쌓여있는 모습을 나타낸 2차원 배열이다.
// board의 길이가 총 row의 개수이며, 내부 배열 하나의 길이가 총 column의 개수이다.
const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
// 배열 moves는 크레인이 인형을 집으러 쭉 내려갈 column의 번호이다.
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

function solution(board, moves) {
  // 변수 basket은 크레인이 집은 인형이 들어갈 바구니이다.
  const basket = [];
  // 변수 answer는 터트려져 사라진 인형의 개수이다.
  let answer = 0;

  // 2차원 배열을 탐색해야하므로 이중 for문을 사용해야 한다.
  // 크레인이 인형을 뽑는 총 횟수는 배열 moves의 길이이다.
  for (let i = 0; i < moves.length; i++) {
    // 크레인이 하나의 컬럼에서 배열 board의 길이만큼 밑으로 내려간다.
    for (let j = 0; j < board.length; j++) {
      // 변수 curr는 크레인이 내려가면서 지나치는 한 칸으로, 인형이 없으면 0이다.
      // board[0][0] => 0
      // board[1][0] => 0
      // board[2][0] => 0
      // board[3][0] => 4
      let curr = board[j][moves[i] - 1];
      // curr 값이 0이 아니고(해당 칸에 인형이 있고),
      if (curr !== 0) {
        // curr 값(인형의 번호)가 배열 basket의 마지막 요소와 같지 않다면,
        if (curr !== basket[basket.length - 1]) {
          // curr 값(인형의 번호)를 배열 basket에 추가한다.
          basket.push(curr);
          // curr 값(인형의 번호)가 배열 basket의 마지막 요소와 같다면,
        } else if (curr === basket[basket.length - 1]) {
          // basket의 마지막 요소를 제거하고,
          basket.pop();
          // 터트려져 사라진 인형의 수를 나타내는 변수 answer에 2를 더한다.
          answer += 2;
        }
        // 인형을 집었으니 해당 칸의 값을 0으로 바꾼 뒤,
        board[j][moves[i] - 1] = 0;
        // 이미 하나의 인형을 뽑았으니 크레인이 더이상 밑으로 내려가지 않고
        // 다음 column으로 이동하기 위해 내부 반복문에서 빠져나온다.
        break;
      }
    }
  }
  return answer;
}
