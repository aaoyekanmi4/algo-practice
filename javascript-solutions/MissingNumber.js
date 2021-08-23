const main = () => {
    //finding missing number in array
    const findMissingNumber = (arr) => {
        let missingNum = arr.length
        for (let i = 0; i < arr.length; i++) {
            missingNum ^= i
            missingNum ^= arr[i]
        }
        return missingNum
    }
    console.log(findMissingNumber([4, 1, 2, 3, 0]))
}
main()
