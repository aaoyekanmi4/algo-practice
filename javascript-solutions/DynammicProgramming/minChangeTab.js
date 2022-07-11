const main = () => {


    const minCoinsSumTab = (targetSum, coins) => {
        const table = Array(targetSum + 1).fill(targetSum)
        table[0] = 0
        for (let i = 1; i <= targetSum; i++) {
            for (let coin of coins) {

                    if (coin <= i) {
                        table[i] = Math.min(table[i], table[i - coin] + 1)
                    }
                }

        }
       
        return table[targetSum]
    }
    console.log(minCoinsSumTab(16, [3, 2, 5, ]))
}
main()
