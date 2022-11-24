// @ts-check
/**
 * @param {number} cacheSize 캐시크기
 * @param {string[]} cities 도시이름 배열
 * @returns {number} 총 실행시간
 */
function solution(cacheSize, cities) {
  // 캐시크기가 0이라면 전부 miss이므로 cities의 길이에 5를 곱해서 반환한다.
  if (cacheSize === 0) return cities.length * 5;

  // 총 실행시간을 0으로 초기화한다.
  let totalRuntime = 0;

  // 캐시를 빈 배열로 초기화한다.
  const cache = [];

  // 도시 이름들을 순회한다.
  cities.forEach((city) => {
    // 현재 도시 이름을 소문자로 변환한다.
    city = city.toLowerCase();
    // 현재 도시가 캐시에 이미 있는지 인덱스를 찾아본다.
    const indexOfHit = cache.indexOf(city);
    // 인덱스가 -1이 아니라면 hit이다.
    const isHit = indexOfHit !== -1;
    // hit이면 실행시간은 1 아니면 miss이므로 5이다.
    const runtime = isHit ? 1 : 5;

    // hit이면 hit인 도시를 캐시에서 잘라낸다.
    if (isHit) cache.splice(indexOfHit, 1);
    // miss이고 캐시 사이즈가 주어진 사이즈에 도달했다면 캐시 맨 앞의 도시를 제거한다.
    else if (cache.length === cacheSize) cache.shift();

    // 현재 도시를 캐시에 넣는다.
    cache.push(city);
    // 총 실행시간에 실행시간을 더한다.
    totalRuntime += runtime;
  });

  return totalRuntime;
}
