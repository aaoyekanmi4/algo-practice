const permute = (nums) => {
    const result = []
    let firstElement
    if (nums.length === 1) {
        numsCopy = [...nums]
        return [numsCopy]
    }
    for (let i = 0; i < nums.length; i++) {
        firstElement = nums.shift()
        let perms = permute(nums)
        console.log(perms)
        for (let perm of perms) {
            perm.push(firstElement)
        }
        result.push(perms)
        nums.push(firstElement)
    }
    return result.flat()
}
console.log(permute([1, 2, 3]))
