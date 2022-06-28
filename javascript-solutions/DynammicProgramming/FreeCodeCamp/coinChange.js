// return minimum number of coins to make amount
var coinChange = function (coins, amount) {
    const memo = {}
    function coinHelper (coins, amount, memo) {
        if (amount in memo) return memo[amount]
        if (amount === 0) return 0
        if (amount < 0) return -1
        let fewest = Infinity
        for (let coin of coins) {
            const diff = amount - coin
            const result = coinHelper(coins, diff, memo)
            if (result >= 0 && result < fewest) {
                fewest = 1 + result
            }
        }
        memo[amount] = fewest === Infinity ? -1 : fewest
        return memo[amount]
    } return coinHelper(coins, amount, memo)
};
