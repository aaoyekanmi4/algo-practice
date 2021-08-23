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
}
main()
