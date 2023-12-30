// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const N = A.length;

    if (N === 0) {
        return 0;
    }

    let currentNode = 0;
    let count = 0;

    while (currentNode !== -1) {
        currentNode = A[currentNode];
        count++;
    }

    return count;
}


console.log("Solution:", solution([1, 4, -1, 3, 2]));