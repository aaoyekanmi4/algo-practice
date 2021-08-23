const main = () => {
    //finding single number in array that's not duplicate
    const findSingleNumber = (arr) => {
        let duplicate = 0
        for (let i = 0; i < arr.length; i++) {
            duplicate ^= arr[i]
        }
        return duplicate
    }
    console.log(findSingleNumber([1, 1, 2, 2, 3, 4, 4]))
}
main()
