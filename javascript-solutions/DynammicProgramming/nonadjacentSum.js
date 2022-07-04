const main = () => {
    
    // const nonAdjacentSum = (nums) => {
    //   // todo
    //   let pick0 = 0
    //   let pick1 = 0
    //   let result
    //   for (let num of nums) {
    //     result = Math.max(pick0 + num, pick1)
    //     pick0 = pick1
    //     pick1 = result
    //   }
    //   return result
    // };

    // const nonAdjacentSum = (nums) => {
    //   if (nums.length === 0) return 0
    //   const include = nums[0] + nonAdjacentSum(nums.slice(2))
    //   const exclude = nonAdjacentSum(nums.slice(1))
    //   return Math.max(include, exclude)
    // }

    const nonAdjacentSum = (nums, i = 0, memo = {}) => {
        if (i in memo) return memo[i]
        if (nums.length <= i) return 0
        const include = nums[i] + nonAdjacentSum(nums, i + 2, memo)
        const exclude = nonAdjacentSum(nums, i + 1, memo)
        memo[i] = Math.max(include, exclude)
        return memo[i]
    }
}
