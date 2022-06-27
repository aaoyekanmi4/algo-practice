var merge = function (intervals) {
    if (intervals.length == 1 || !intervals) return intervals
    let currentIdx = 1
    const sortedIntervals = intervals.slice().sort((a, b) => a[0] - b[0])
    const result = [sortedIntervals[0]]
    while (currentIdx < sortedIntervals.length) {
        let lastAddedInterval = result[result.length - 1]
        if (sortedIntervals[currentIdx][0] <= lastAddedInterval[1]) {
            lastAddedInterval[1] = Math.max(sortedIntervals[currentIdx][1], lastAddedInterval[1])
        } else {
            result.push(sortedIntervals[currentIdx])
        }
        currentIdx++
    }
    return result
}
