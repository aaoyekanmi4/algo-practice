const main = () => {
    const buyAndSellStock = (prices) => {
        let min = Infinity
        let max = 0
        for (let i = 0; i < prices.length; i++) {
            if (prices[i] < min) min = prices[i]
            if (prices[i] > max) {
                max = Math.max(max, prices[i] - min)
            }
        }
        return max
    }
    console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]))
    const buyAndSellStock2Pointers = (prices) => {
        let left = 0
        let right = 1
        let maxProfit = 0
        for (let i = 0; i < prices.length; i++) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                maxProfit = Math.max(profit, max)
            } else {
                left = right
            }
            right++
        }
        return maxProfit
    }
    console.log(buyAndSellStock2Pointers([7, 1, 5, 3, 6, 4]))
}
main()
