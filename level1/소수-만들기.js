function solution(nums) {
  let count = 0;
  let sums = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        sums.push(sum);
      }
    }
  }
  for (let i = 0; i < sums.length; i++) {
    if (primeNumber(sums[i])) {
      count++;
    }
  }
  return count;
}

function primeNumber(nums) {
  for (let i = 2; i * i <= nums; i++) {
    if (nums % i === 0) return false;
  }
  return true;
}
