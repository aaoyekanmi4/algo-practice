//O(n * n^2)
const main = () => {
    var subsets = function (nums) {
        const result = []
        function backtrack (start, sub) {
            result.push(sub.slice())
            for (let i = start; i < nums.length; i++) {
                sub.push(nums[i])
                backtrack(i + 1, sub)
                sub.pop()
            }
        }
        backtrack(0, [])
        return result
    };
    console.log(subsets([1, 2, 3]))
}
main()
