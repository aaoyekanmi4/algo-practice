const main = () => {
    const allConstructMemo = (target, wordbank) => {
        if (target === '') return [[]]
        const result = []
        for (let word of wordbank) {
            if (target.indexOf(word) === 0) {
                const suffix = target.slice(word.length)
                const suffixWays = allConstructMemo(suffix, wordbank)
                const targetWays = suffixWays.map((way) => [word, ...way])
                result.push(...targetWays)
            }
        }
        return result
    }
    console.log(allConstructMemo('skateboard', ['sk', 'ate', 'bo', 'ard', 'skate', 'board']))
}
main()
