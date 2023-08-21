var lettersContainer = [
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
];
var letterCombinationsFunc = function (digits) {
    var result = [];
    if (digits.length === 0)
        return result;
    var dfs = function (index, path) {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        var letters = lettersContainer[Number(digits[index]) - 2];
        for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {
            var letter = letters_1[_i];
            dfs(index + 1, path + letter);
        }
    };
    dfs(0, '');
    return result;
};
console.log(letterCombinationsFunc('23'));
