
var levelOrderLevelLength = function (root) {
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

var levelOrderSentinal = function (root) {
    const result = []
    if (!root) return result
    const queue = [root]
    const sentinal = null
    queue.push(sentinal)
    let prev
    let current
    while (queue.length) {
        let level = []
        current = queue.shift()
        prev = current

        while (current) {
            level.push(current.val)
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        if (level.length) result.push(level)
        if (queue.length) queue.push(sentinal)
    }
    return result
}

var levelOrder2Queues = function (root) {
        const result = []
        if (!root) return result
        let currentQ = []
        let nextLevelQ = [root]


        while (nextLevelQ.length) {

            currentQ = nextLevelQ
            nextLevelQ = []
            let level = []
            while (currentQ.length) {

                let current = currentQ.shift()
                level.push(current.val)
                if (current.left) nextLevelQ.push(current.left)
                if (current.right) nextLevelQ.push(current.right)

            }
            if (level.length) result.push(level)

        }
        return result
    }

