var totalFruit = function (fruits) {
    if (!fruits || !fruits.length) return 0
    const fruitMap = new Map()
    let max = 1
    let start = 0
    let end = 0
    while (end < fruits.length) {
        if (fruitMap.size <= 2) {
            fruitMap.set(fruits[end], end)
            end++
        }
        if (fruitMap.size > 2) {
            let min = fruits.length - 1
            for (const value of fruitMap.values()) {
                min = Math.min(min, value)
            }
            start = min + 1
            fruitMap.delete(fruits[min])
        }

        max = Math.max(max, end - start)

    }
    return max
};
