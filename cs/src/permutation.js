const targets = [["A", "B", "C", "D"]];
function getPermutation(arr, n) {
  const result = [];
  if (n === 1) {
    return arr.map((i) => [i]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.filter((_, idx) => idx !== index);
    const permutations = getPermutation(rest, n - 1)
    const resultPermutation = permutations.map((v) => [fixed, ...v])
    result.push(...resultPermutation);
  })

  return result
}
console.log(getPermutation(targets[0], 3))
