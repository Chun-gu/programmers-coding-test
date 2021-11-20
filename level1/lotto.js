function solution(lottos, win_nums) {
    // 당첨 번호의 최대 개수 = (lottos와 win_nums 두 배열에 공통으로 존재하는 숫자의 개수 + lottos에 존재하는 0의 개수) or 0
    // 당첨 번호의 최소 개수 = (lottos와 win_nums 두 배열에 공통으로 존재하는 숫자의 개수) or 0
    
    // 당첨 번호의 개수가
    // 0개일 때 6등,
    // 1개일 때 6등,
    // 2개일 때 5등, 
    // 3개일 때 4등, 
    // 4개일 때 3등, 
    // 5개일 때 2등, 
    // 6개일 때 1등으로
    // 당첨 번호의 개수와 등수의 합이 0개일 때를 제외하면 7이므로
    // 7에서 당첨 번호의 개수를 빼면 등수가 나온다.

    // 배열 lottos의 요소들 중, 배열 win_nums에 포함되어 있거나(include) 0인 요소들을 골라내서(filter) 새로운 배열을 만든다. 
    // 그 배열의 길이(length, 당첨 번호의 개수)를 구해서 길이가 0(falsy)일 경우엔 1로 취급한다. 
    // 7에서 길이를 빼면 최고 순위가 나온다. 
    let highest = 7 - (lottos.filter((elem) => win_nums.includes(elem) || elem == 0).length || 1);

    // 배열 lottos의 요소들 중, 배열 win_nums에 포함된(include) 요소들을 골라내서(filter) 새로운 배열을 만든다. 
    // 그 배열의 길이(length, 당첨 번호의 개수)를 구해서 길이가 0(falsy)일 경우엔 1로 취급한다. 
    // 7에서 길이를 빼면 최저 순위가 나온다.
    let lowest = 7 - (lottos.filter((elem) => win_nums.includes(elem)).length || 1);

    const answer = [highest, lowest];
    return answer;
}
