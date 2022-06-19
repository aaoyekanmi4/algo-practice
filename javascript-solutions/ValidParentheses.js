const main = () => {

    /**
     * @param {string} s
     * @return {boolean}
     */
    var isValid = function (s) {
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        }
        const stack = []
        for (let i = 0; i < s.length; i++) {
            let character = s[i]
            if (map[character]) {
                stack.push(character)
            }
            else {
                if (!stack.length) {
                    return false
                }
                let open = stack.pop()
                if (map[open] !== character) {
                    return false
                }
            }
        }
        return stack.length ? false : true
    }
}

main();
