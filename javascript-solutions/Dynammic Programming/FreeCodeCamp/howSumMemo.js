const main = () => {
    const howSum = (targetSum, nums, memo = {}) => {
        if (targetSum in memo) return memo[targetSum]
        if (targetSum === 0) return []
        if (targetSum < 0) return null
        for (let num of nums) {
            const remainder = targetSum - num
            const remainderResult = howSum(remainder, nums, memo)
            if (remainderResult !== null) {
                memo[targetSum] = [...remainderResult, num]
                return [...remainderResult, num]
            }
        }
        memo[targetSum] = null
        return null
    }
    console.log(howSum(8, [2, 3, 5]))
}
main()

