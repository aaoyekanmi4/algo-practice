const main = () => {
    const countConstructTab = (target, wordbank) => {
        const table = new Array(target.length + 1).fill(0)
        // table 0 represents an empty string
        table[0] = 1
        for (let i = 0; i < table.length; i++) {
                for (let word of wordbank) {
                    if (target.slice(i, i + word.length) === word) {
                        table[i + word.length] += table[i]
                    }
                }
            }
        return table[target.length]
    }
    console.log(countConstructTab('purple', ['p', 'ur', 'le', 'purp']))
}
main()
