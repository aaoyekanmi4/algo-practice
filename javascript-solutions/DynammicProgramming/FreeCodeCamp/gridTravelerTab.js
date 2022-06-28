const main = () => {
    const gridTravelerTab = (m, n) => {
        const table = new Array(m + 1)
            .fill()
            .map(() => Array(n +1).fill(0) )
        table[1][1] = 1

        for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
                const current = table[i][j]
                if (i < m) table[i + 1][j] += current
                if (j < n) table[i][j+1] += current
             }
        }
        return table[m][n]
    }
    console.log(gridTravelerTab(18,18))

}
main()
