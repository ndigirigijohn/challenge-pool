const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function convertToTitle(columnNumber: number): string {
    let result = ""
    while (columnNumber > 0) {
        columnNumber--
        result = letters[columnNumber % 26] + result
        columnNumber = Math.floor(columnNumber / 26)
    }
    return result
};
