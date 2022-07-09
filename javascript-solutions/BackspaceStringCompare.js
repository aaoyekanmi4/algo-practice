var backspaceCompare = function (s, t) {

    const skipBackspaces = (str, ans = '', skip = 0) => {
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === '#') {
                skip++
            } else if (skip > 0) {
                skip--
            } else {
                ans = str[i] + ans
            }
        }
        return ans
    }

    return skipBackspaces(s) === skipBackspaces(t)

};
