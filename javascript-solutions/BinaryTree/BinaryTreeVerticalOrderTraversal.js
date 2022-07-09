var verticalOrder = function (root) {
    const result = []
    const columnTable = {}
    let minCol = Infinity
    let maxCol = -Infinity
    let column = 0
    const queue = [[root, column]]
    if (!root) return result

    while (queue.length) {
        pair = queue.shift()
        root = pair[0]
        column = pair[1]

        if (root) {
            if (!columnTable[column]) {
                columnTable[column] = []
            }
            columnTable[column].push(root.val)
            minCol = Math.min(minCol, column)
            maxCol = Math.max(maxCol, column)
            queue.push([root.left, column - 1])

            queue.push([root.right, column + 1])
        }
    }

    for (let i = minCol; i <= maxCol; i++) {
        console.log(i)
        result.push(columnTable[i])
    }
    return result
};
