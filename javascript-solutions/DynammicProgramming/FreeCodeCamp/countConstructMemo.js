const main = () => {
    const countConstructMemo = (target, wordbank, memo = {}) => {
        if (target in memo) return memo[target]
        if (target === '') return 1
        let size = 0
        for (let word of wordbank) {
            if (target.indexOf(word) === 0) {
                const suffix = target.slice(word.length)
                size += countConstructMemo(suffix, wordbank, memo)
            }
        }
        memo[target] = size
        return size
    }
    console.log(countConstructMemo('skateboard', ['sk', 'ate', 'bo', 'ard', 'skate', 'board']))
}
main()
