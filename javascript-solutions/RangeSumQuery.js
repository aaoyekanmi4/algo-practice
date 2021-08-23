const main = () => {
    const NumArray = function (nums) {
        let sums = []
        let sum = 0
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            sums.push(sum)
        }
        this.sums = sums
    }
    NumArray.prototype.findSum = function (left, right) {
        return this.sums[right] - this.sums[left - 1]
    }
    const numArray1 = new NumArray([2, 3, 4, 5, 6, 2, 3, 4, 5,])
    console.log(numArray1.findSum(2, 6))
}
main()
