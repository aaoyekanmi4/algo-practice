var search = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    while (start <= end) {
        let midpoint = end - start // 2
        if (target < nums[midpoint]) {
            end = midpoint - 1
        }
        else if (target > nums[midpoint]) {
            start = midpoint + 1
        }
        else {
            return midpoint
        }
    }
    return -1
};
