/* WORKING SOLUTION, NEEDS TO BE OPTIMIZED FOR BETTER PERFOMANCE */
function solution(A, B, C) {
    // Helper functions
    const toBin = (N) => (N >>> 0).toString(2);

    // Get conforming numbers for a given integer
    const getConforms = (N) => {
        const binArr = toBin(N).split("");
    

        const otherBits = binArr.reduce((indices, bit, index) => {
            if (bit === '0') {
                indices.push(index);
            }
            return indices;
        }, []);

        const binNums = [];
        const currentNewBinNum = new Array(binArr.length).fill('0');

        for (let i = 0; i < Math.pow(2, otherBits.length); i++) {
            const currDecBinArr = toBin(i).split("").reverse();
            for (let j = 0; j < otherBits.length; j++) {
                if (currDecBinArr[j]) {
                    currentNewBinNum[otherBits[j]] = currDecBinArr[j];
                }
            }
            binNums.push(currentNewBinNum.slice().reverse().join(""));
        }

        return binNums;
    };

    // Get conforming numbers for each input
    const conformingNumbers = [
        ...new Set(getConforms(A).concat(getConforms(B), getConforms(C)))
    ];

    return conformingNumbers.length;
}

console.log("Solution:", solution(1073741727, 1073741631, 1073741679));
