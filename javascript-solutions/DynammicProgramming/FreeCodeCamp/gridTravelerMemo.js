const main = () => {
    const gridTravelerMemo = (m, n, memo = {}) => {
        let key = m + ',' + n
        if (key in memo) return memo[key]
        if (m === 0 || n === 0) return 0
        if (m === 1 || n === 1) return 1
        memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo)
        return memo[key]
    }
    console.log(gridTravelerMemo(18, 18))
}
main()
