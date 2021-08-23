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
    console.log(climbingStairs(3))
}

main()


