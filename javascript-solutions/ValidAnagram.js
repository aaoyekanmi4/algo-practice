var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const sortedS = s.split('').sort()
    const sortedT = t.split('').sort()
    for (let i = 0; i < s.length; i++) {
        if (sortedS[i] !== sortedT[i]) return false
    }
    return true
};
