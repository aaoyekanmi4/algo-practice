// same as can construct tab
var wordBreak = function (s, wordDict) {
    const dp = Array(s.length + 1).fill(false)
    dp[0] = true
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] === true) {
            for (let word of wordDict) {
                if (s.slice(i, i + word.length) === word) {
                    dp[i + word.length] = true
                }
            }
        }
    }
    return dp[s.length]
};
