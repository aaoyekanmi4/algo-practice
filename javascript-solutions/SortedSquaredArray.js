// Solution 1
function sortedSquaredArray (array) {
    return array.map((val) => val * val)
        .sort((a, b) => a - b)
}

// Solution 2
function sortedSquaredArray (array) {
    let sorted = new Array(array.length).fill(0)
    let lo = 0
    let hi = array.length - 1
    for (let i = array.length - 1; i >= 0; i--) {
        if (Math.abs(array[lo]) > Math.abs(array[hi])) {
            sorted[i] = array[lo] * array[lo]
            lo++
        } else {
            sorted[i] = array[hi] * array[hi]
            hi--
        }
    }
    return sorted
}
