var nextGreatestLetter = function (letters, target) {
    let start = 0
    let end = letters.length - 1
    if (target >= letters[end]) return letters[0]

    while (start <= end) {
        let midpoint = end - start // 2
        if (target < letters[midpoint]) {
            end = midpoint - 1

        }
        else if (target >= letters[midpoint]) {
            start = midpoint + 1
        }

    }
    return letters[start % letters.length]
};
