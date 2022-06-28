const main = () => {
    const canSumTab = (targetSum, nums) => {
        const table = Array(targetSum + 1).fill(false)
        table[0] = true
        for (let i = 0; i <= targetSum; i++) {
            for (let num of nums) {
                if (table[i] === true) {
                    table[num + i] = true
                }
            }
        }
        return table[targetSum]
    }
    console.log(canSumTab(7, [3, 4]))
}
main()
