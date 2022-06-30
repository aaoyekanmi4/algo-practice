const main = () => {
    const allConstructTab = (target, wordbank) => {
        const table = new Array(target.length + 1).fill().map(() => [])
        // table 0 represents an empty string
        table[0] = [[]]
        for (let i = 0; i < table.length; i++) {
            for (let word of wordbank) {
                if (target.slice(i, i + word.length) === word) {
                    const newCombos = table[i].map((subarray) => [...subarray, word])
                    table[i + word.length].push(...newCombos)
                }
            }
        }
        return table[target.length]
    }
    console.log(allConstructTab('purple', ['p', 'ur', 'le', 'purp']))
}
main()
