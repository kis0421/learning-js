const targets = [["A", "B", "C", "D"]];
function getCombinations(arr, n) {
  const results = [];
  if (n === 1) {
    return arr.map((i) => [i]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, n - 1);
    for(const ele of combinations.map((el) => [fixed, ...el])){
     results.push(ele); 
    }
  });
  return results;
}

for (const target of targets) {
  const a = getCombinations(target, 1);
  console.log(a);
  break;
}
