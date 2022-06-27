const main = () => {
    //The idea is to break down the input into it's smallest pieces, arrange them and then bubble
    //back up using recursion
    function permute (nums) {
        const result = []
        //base case
        if (nums.length === 1) return [nums.slice()]

        for (let num of nums) {
            let n = nums.shift()
            const perms = permute(nums)
            for (let perm of perms) {
                perm.push(n)
            }
            perms.forEach((perm) => result.push(perm))
            nums.push(n)
        }
        return result
    }
    console.log(permute([1, 2, 3]))
}
main()
