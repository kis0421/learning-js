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