// return minimum number of coins to make amount
const main = () => {
    const minChange = (amount, coins) => {
        const result = minChangeHelper(amount, coins)
        return result === Infinity ? -1 : result
    }

    const minChangeHelper = (amount, coins, memo = {}) => {
        if (amount < 0) return Infinity
        if (amount in memo) return memo[amount]
        if (amount === 0) return 0
        let min = Infinity

        for (let coin of coins) {
            const newAmount = amount - coin
            const numOfCoins = minChangeHelper(newAmount, coins, memo) + 1
            min = Math.min(numOfCoins, min)
        }
        memo[amount] = min
        return memo[amount]
    };
    console.log(minChange(23, [2, 5, 7]))
}
main()
