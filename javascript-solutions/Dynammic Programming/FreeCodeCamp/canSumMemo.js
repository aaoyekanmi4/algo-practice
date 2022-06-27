const main = () => {
    const canSum = (targetSum, nums, memo = {}) => {
        if (targetSum in memo) return memo[targetSum]
        if (targetSum === 0) return true
        if (targetSum < 0) return false
        for (let num of nums) {
            const remainder = targetSum - num
            if (canSum(remainder, nums, memo) === true) {
                memo[targetSum] = true
                return true
            }
        }
        memo[targetSum] = false
        return false
    }
    console.log(canSum(9, [2]))
}
main()
