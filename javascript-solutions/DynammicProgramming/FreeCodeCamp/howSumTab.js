const main = () => {
    const howSumTab = (targetSum, nums) => {
        const table = Array(targetSum + 1).fill(null)
        table[0] = []
        for (let i = 0; i <= targetSum; i++) {
            if (table[i] !== null) {
                for (let num of nums) {
                    console.log(num + i)
                    table[num + i] = [...table[i], num]
                }
            }
        }
        return table[targetSum]
    }
    console.log(howSumTab(100, [33, 39, 100]))
}
main()
