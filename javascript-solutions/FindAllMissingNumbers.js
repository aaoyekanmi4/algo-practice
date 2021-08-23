const main = () => {
    const findAllMissingNumbers = (arr) => {
        const missingNumbers = []
        for (let i = 0; i < arr.length; i++) {
            let idxToMark = Math.abs(arr[i]) - 1
            if (arr[idxToMark] > 0) {
                arr[idxToMark] *= -1
            }
        }
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                missingNumbers.push(i + 1)
            }
        }
        return missingNumbers
    }
    console.log(findAllMissingNumbers([4, 3, 1, 2, 3, 1, 1, 8]))
}
main()
