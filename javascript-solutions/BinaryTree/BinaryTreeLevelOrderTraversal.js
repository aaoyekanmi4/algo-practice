var levelOrder = function (root) {
    const result = []
    if (!root) return result
    const queue = [root]
    while (queue.length) {
        let level = []
        let level_length = queue.length
        for (let i = 0; i < level_length; i++) {
            let current = queue.shift()
            level.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        if (level.length) result.push(level)
    }
    return result
};
