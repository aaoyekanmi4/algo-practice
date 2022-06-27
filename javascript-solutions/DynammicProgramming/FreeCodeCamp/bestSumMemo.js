const main = () => {
    const bestSum = (targetSum, nums, memo = {}) => {
        if (targetSum in memo) return memo[targetSum]
        if (targetSum === 0) return []
        if (targetSum < 0) return null
        let shortest = null
        for (let num of nums) {
            const remainder = targetSum - num
            const remainderResult = bestSum(remainder, nums, memo)
            if (remainderResult !== null) {
                const combination = [...remainderResult, num]
                if (shortest === null || combination.length < shortest.length) {
                    shortest = combination
                }
            }
        }
        memo[targetSum] = shortest
        return shortest
    }
    console.log(bestSum(8, [3, 7]))
}
main()
