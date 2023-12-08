function maxProfit(S) {
    const { costPerCut, salePrice, lengths } = S;
    let maxProfit = 0;

    for (let saleLength = 1; saleLength <= 10000; saleLength++) {
        let totalUniformRods = 0;
        let totalCuts = 0;

        lengths.forEach(length => {
            const cuts = Math.floor(length / saleLength);
            const leftover = length % saleLength;

            totalUniformRods += cuts;

            if (leftover > 0) {
                totalCuts += cuts; // Adjusted to use 'cuts' instead of 'leftover'
            }
        });

        const profit = totalUniformRods * saleLength * salePrice - totalCuts * costPerCut;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}




const S = {
    costPerCut: 1,
    salePrice: 10,
    lengths: [20, 59, 110]
};

console.log(maxProfit(S));
