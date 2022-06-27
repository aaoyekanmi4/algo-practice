var groupAnagrams = function (strs) {
    const map = {}
    const result = []
    const strsCopy = strs.slice()
    const sortedStrs = strsCopy.map((word) => word.split('').sort().join(''))
    for (let i = 0; i < strs.length; i++) {
        if (!map[sortedStrs[i]]) map[sortedStrs[i]] = []
        map[sortedStrs[i]].push(strs[i])

    }
    for (let group in map) {
        result.push(map[group])
    }

    return result
};
