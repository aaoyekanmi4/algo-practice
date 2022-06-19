const main = () => {
    const containsDuplicatesSet = (arr) => {
        const numSet = new Set(arr)
        return arr.length > numSet.size ? true : false
    }
    console.log(containsDuplicatesSet([1, 1, 4, 3, 2]))

    const containsDuplicatesSort = (arr) => {
        const sortedArray = arr.sort((a, b) => a - b)
        for (let i = 0; i < sortedArray.length - 1; i++) {
            if (sortedArray[i] === sortedArray[i + 1]) return true
        }
        return false
    }
    console.log(containsDuplicatesSort([1, 4, 3, 2, 1]))
}
main()
