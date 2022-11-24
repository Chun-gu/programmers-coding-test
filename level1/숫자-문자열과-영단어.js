function solution(s) {
  /*  
    주어진 문자열에서 영단어를 해당 숫자로 replace하는 문제다.
    s.replace("zero", 0).replace("one", 1)...식으로 replace를 쭈욱 이어붙이려고 했지만,
    교체 대상만 달라지는 메소드를 반복 작성하는 건 효율적이지 않은 것 같아서 반복문으로 만들기로 했다.
    먼저 교체할 단어들이 담긴 배열 words를 만들고, */
  let words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  /* 
    해당 배열을 쭉 돌면서 반복하는 코드를 작성했다.
    for (let i = 0; i < words.length; i++) {
        s = s.replace(words[i], i);
    }
    잘 작동하는 듯 싶었지만, 같은 영단어가 두 개 이상 담긴 문자열은 처음으로 나오는 영단어만 숫자로 교체하는 데 그쳤다.
    예를 들어, 인자가 oneone4seveneight이면 반환값이 1one478이 되는 식이다.
    이는 replace()가 대상 문자열을 탐색하면서 교체 대상 문자열에 일치하는 첫 문자열만 교체하고 탐색을 그만두기 때문이다.
    이걸 해결하려면 인자에 숫자가 남아있는지 검사하는 로직과 더이상 숫자가 남아있지 않을 때까지 반복하는 로직을 추가해야 했다.
    복잡한 길을 가는 대신, replace()의 교체 대상 문자열로 정규표현식을 사용하기로 했다. 
    정규표현식의 g(global)이라는 플래그가 일치하는 문자열 전부를 교체 가능하게 해주기 때문이다.

    아래와 같이 교체 대상 문자열에 정규식을 넣고 반복문을 돌렸는데 또다른 문제가 생겼다.
    for (let i = 0; i < words.length; i++) {
        s = s.replace(/words[i]/g, i);
    }
    words[i]가 변수로 인식되지 않고 문자열로 인식되어서 교체 대상 문자열이 /zero/g, /one/g 등이 아니라 /words[i]/g가 된 것이다. 
    이를 해결하기 위해 정규표현식 객체로 정규표현식을 생성하여 교체 대상 문자열의 자리에 넣어줬다.
    */

  for (let i = 0; i < words.length; i++) {
    let regex = new RegExp(words[i], "g");
    s = s.replace(regex, i);
    console.log(s);
  }

  const answer = Number(s);
  return answer;
}
