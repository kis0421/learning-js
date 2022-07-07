function solution(count, stairs) {
  function checkIsPossible(k) {
    let index = 0;
    for (let i = 0; i < count; i++) {
      const nextIndex = stairs.findIndex((stair) => stair >= Math.min(stairs[stairs.length - 1], stairs[index] + k));
      if (nextIndex === -1) {
        return false;
      } else {
        index = stairs[nextIndex] <= stairs[index] + k ? nextIndex
          : nextIndex - 1;
      }
      if (index === stairs.length - 1) {
        return true;
      }
    }
    return false;
  }

  let currentIndex = 0;
  let left = 0;
  let right = stairs[stairs.length - 1];

  while (true) {
    currentIndex = Math.floor((left + right) / 2);
    const isPossibvle = checkIsPossible(currentIndex);
    if (isPossibvle) {
      if (checkIsPossible(currentIndex + 1) && !checkIsPossible(currentIndex - 1)) {
        break;
      }
      right = currentIndex - 1;
    } else {
      left = currentIndex + 1;
    }
  }

  return currentIndex
}

/* test
* console.log(solution(2, [1, 3, 5, 7, 9, 10, 13, 80, 90, 100, 105, 300, 400]));
* console.log(solution(2, [1, 3, 5, 7, 9]));
* console.log(solution(2, [1, 3, 5, 7, 12]));
* console.log(solution(2, [1, 3, 5, 7, 12, 17, 35]));
* console.log(solution(2, [1, 100, 101, 102]));
*/
