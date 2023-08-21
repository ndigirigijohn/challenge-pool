const container = [
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'

]

const letterCombinations = (digits) => {
    let result = []
    if (digits.length === 0) return result
    const dfs = (index, path) => {
        if (index === digits.length) {
            result.push(path)
            return
        }
        const letters = container[digits[index] - '2']
        for (const letter of letters) {
            dfs(index + 1, path + letter)
        }
    }
    dfs(0, '')
    return result
}

console.log(letterCombinations('23'))