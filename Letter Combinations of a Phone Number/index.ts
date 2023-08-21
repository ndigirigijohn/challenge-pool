const lettersContainer: string[] = [
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
];

const letterCombinationsFunc = (digits: string): string[] => {


    const result: string[] = [];
    if (digits.length === 0) return result;

    const dfs = (index: number, path: string): void => {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const letters: string = lettersContainer[Number(digits[index]) - 2];
        for (const letter of letters) {
            dfs(index + 1, path + letter);
        }
    };

    dfs(0, '');
    return result;
};

console.log(letterCombinationsFunc('23'));
