function maxProfit(costPerCut, salePrice, lengths) {
    let maxProfit = 0;
  
    for (let saleLength = 1; saleLength <= Math.max(...lengths); saleLength++) {
      const salePricePerRod = salePrice * saleLength;
      let profit = 0;
  
      for (const rodLength of lengths) {
        const uniformRods = Math.floor(rodLength / saleLength);
  
        if (uniformRods > 0) {
          const extraCut = rodLength % saleLength > 0 ? 1 : 0;
          const totalCuts = uniformRods - 1 + extraCut;
  
          const costs = totalCuts * costPerCut;
          const revenues = uniformRods * salePricePerRod;
  
          if (revenues > costs) {
            profit += revenues - costs;
          }
        }
      }
  
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  
    return maxProfit;
  }
  

  console.log(maxProfit(1, 10, [26, 103, 59]));