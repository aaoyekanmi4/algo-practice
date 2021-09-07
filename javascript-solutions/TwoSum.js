const main = () => {
    const twoSum = (nums, target) => {
        const differenceMap = new Map()
        for (let i = 0; i < nums.length; i++) {
            let difference = target - nums[i]
            if (differenceMap.has(difference)) {
                return [i, differenceMap.get(difference)]
            }
            else {
                differenceMap.set(nums[i], i)
            }
        }
    }
    console.log(twoSum([2, 7, 11, 15], 9))

    const twoSumTwoPointer = (nums, target) => {
        const sortedNums = nums.slice().sort((a, b) => a - b)
        let low = 0
        let high = sortedNums.length - 1
        while (low < high) {
            if ((nums[low] + nums[high]) > target) {
                high--
            }
            else if ((nums[low] + nums[high]) < target) {
                low++
            }
            else {
                return [low, high]
            }
        }
    }
    console.log(twoSumTwoPointer([3, 5, -4, 8, 11, 1, -1, 6], 10))
}
main()
