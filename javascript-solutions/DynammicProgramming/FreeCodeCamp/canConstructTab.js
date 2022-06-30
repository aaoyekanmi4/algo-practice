const main = () => {
    const canConstructTab = (target, wordbank) => {
        const table = new Array(target.length + 1).fill(false)
        // table 0 represents an empty string
        table[0] = true
        for (let i = 0; i < table.length; i++) {
            if (table[i] === true) {
                for (let word of wordbank) {
                    if (target.slice(i, i + word.length) === word) {
                        table[i + word.length] = true
                    }
            }
            }
        }
    return table[target.length]
    }
    console.log(canConstructTab('abcdef', ['ab', 'cd', 'def']))
}
main()
