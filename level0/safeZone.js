/**
 * @param {number[][]} board 지뢰가 매설된 지역의 지도
 * @returns {number} 안전한 지역의 칸 수
 */
function solution(board) {
  // 지도의 가로 길이와 세로 길이를 구한다.
  const width = board[0].length;
  const height = board.length;

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      // 현재 지역이 1이라면
      if (board[r][c] === 1) {
        // 현재 지역을 포함해 주변 9칸을 돌면서
        for (let i = -1; i < 2; i++) {
          for (let j = -1; j < 2; j++) {
            // r, c가 0 이상이고 width와 height를 넘지 않는 지역이고
            if (0 <= r + i && r + i < height && 0 <= c + j && c + j < width) {
              // 해당 지역이 0(falsy)라면 9을 할당한다.
              board[r + i][c + j] ||= 9;
            }
          }
        }
      }
    }
  }

  let answer = 0;
  // 2차원 배열을 순회하면서
  board.forEach((row) => {
    // cell이 0(falsy)라면 answer에 1을 더한다.
    row.forEach((cell) => cell || answer++);
  });

  return answer;
}

const board = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));
