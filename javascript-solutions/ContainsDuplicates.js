const main = () => {
    const containsDuplicatesSet = (arr) => {
        const numSet = new Set(arr)
        return arr.length > numSet.size ? true : false
    }
    console.log(containsDuplicatesSet([1, 1, 4, 3, 2]))
}
main()
