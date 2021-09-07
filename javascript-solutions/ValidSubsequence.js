function isValidSubsequence (array, sequence) {
    let arrIdx = 0
    let seqIdx = 0
    while (arrIdx < array.length && seqIdx < sequence.length) {
        if (sequence[seqIdx] === array[arrIdx]) {
            arrIdx++
            seqIdx++
        } else {
            arrIdx++
        }
    }
    return seqIdx === sequence.length
}
