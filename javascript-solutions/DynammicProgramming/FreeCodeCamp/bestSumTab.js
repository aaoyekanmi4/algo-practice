const main = () => {
    const bestSumTab = (targetSum, nums) => {
        const table = Array(targetSum + 1).fill(null)
        table[0] = []
        for (let i = 0; i <= targetSum; i++) {
            if (table[i] !== null) {
            for (let num of nums) {
                    const combo = [...table[i], num]
                    if (!table[i + num] || combo < table[num + i].length) {
                        table[num + i] = combo
                    }
                }
            }
        }
        return table[targetSum]
    }
    console.log(bestSumTab(100, [4, 10, 100]))
}
main()
