const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

function solution(lottos, win_nums) {
    console.log(lottos, win_nums);
    // lottos랑 win_nums 비교해서 일치하는 갯수 배열에 저장
    // 0 갯수 배열에 저장
    const lowest =
        7 - (lottos.filter((elem) => win_nums.includes(elem)).length || 1);
    console.log(lowest);
    // const highest = lowest - lottos.filter((elem) => elem == 0).length;
    console.log(lottos.filter((elem) => elem == 0).length == 6 && 5);
    const highest =
        lowest - (lottos.filter((elem) => elem == 0).length == 6 && 5);
    console.log(highest);

    return (answer = [highest, lowest]);
}

console.log(solution(lottos, win_nums));
