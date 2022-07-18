const main = () => {
    function DecreasingSize3 (nums) {
        const list = []
        function backtrack (tempList, nums, prev, start) {
            if (tempList.length === 3) {
                list.push(tempList.slice())
            }
            for (let i = start; i < nums.length; i++) {
                if (i > start && nums[i] == nums[i - 1]) continue // skip duplicates
                if (nums[i] < prev) {
                    tempList.push(nums[i])
                    backtrack(tempList, nums, nums[i], i + 1)
                    tempList.pop()

                }
            }
        }
        backtrack([], nums, prev = Infinity, 0)
        return list
    }



    console.log(DecreasingSize3([5, 3, 4, 2, 1]))
}
