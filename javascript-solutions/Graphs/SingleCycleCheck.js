function hasSingleCycle (array) {
    let count = 0
    let currentIdx = 0
    while (count < array.length) {
        //we've gotten back to 0 without going through whole array
        if (count > 0 && currentIdx === 0) return false
        count++
        let nextIdx = (currentIdx + array[currentIdx]) % array.length
        currentIdx = nextIdx < 0 ? (nextIdx + array.length) : nextIdx
    }
    return currentIdx === 0
}
