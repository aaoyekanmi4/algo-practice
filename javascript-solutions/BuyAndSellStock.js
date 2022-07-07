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

    const buyAndSellStock2Pointers = (prices) => {
        let left = 0
        let right = 1
        let maxProfit = 0
        while (right < prices.length) {
            if (prices[left] < prices[right]) {
                let profit = prices[right] - prices[left]
                maxProfit = Math.max(profit, maxProfit)
            } else {
                left = right
            }
            right++
        }
        return maxProfit
    }
    console.log(buyAndSellStock([7, 1, 5, 3, 6, 4]))
    console.log(buyAndSellStock2Pointers([7, 1, 5, 3, 6, 4]))
}
main()
