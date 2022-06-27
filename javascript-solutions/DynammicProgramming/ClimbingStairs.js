const main = () => {
    const memo = new Map()
    const climbingStairs = (n) => {
        if (n <= 2) {
            return n
        }
        if (memo.has(n)) {
            return memo.get(n)
        }
        let steps = climbingStairs(n - 1) + climbingStairs(n - 2)
        memo.set(n, steps)
        return steps
    }

    const climbingStairsDp = (n) => {
        const dp = []

        dp[0] = 0
        dp[1] = 1
        dp[2] = 2
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i -1] + dp [i -2]
        }
        return dp[n]
    }
    console.log(climbingStairsDp(6))
}

main()


