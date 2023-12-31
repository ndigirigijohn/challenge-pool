function knapsack(items, maxWeight) {
  const n = items.length;
  const dp = Array.from({ length: n + 1 }, () => Array(maxWeight + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    const { val, w } = items[i - 1];
    for (let j = 1; j <= maxWeight; j++) {
      if (w > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w] + val);
      }
    }
  }

  let i = n;
  let j = maxWeight;
  const selectedItems = [];

  while (i > 0 && j > 0) {
    if (dp[i][j] !== dp[i - 1][j]) {
      selectedItems.push(items[i - 1].id);
      j -= items[i - 1].w;
    }
    i--;
  }

  return selectedItems;
}

const items = [
  { id: 'a', val: 10, w: 3 },
  { id: 'b', val: 6, w: 8 },
  { id: 'c', val: 3, w: 3 },
];

const maxWeight = 8;

const result = knapsack(items, maxWeight);
console.log(result); // Output: ['a', 'c']
