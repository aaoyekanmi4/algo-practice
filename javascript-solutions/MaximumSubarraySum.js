const main = () => {
    const maximumSubarray = (arr) => {
        let currentMax = -Infinity
        let overallMax = -Infinity
        for (let i = 0; i < arr.length; i++) {
            currentMax = Math.max(arr[i], arr[i] + currentMax)
            if (currentMax > overallMax) {
                overallMax = currentMax
            }
        }
        return overallMax
    }
    console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
}
main()
