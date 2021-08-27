class TreeNode {
    constructor (val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
    insert (num) {
        if (num < this.val) {
            if (this.left) {
                this.left.insert(num)
            }
            else {
                this.left = new TreeNode(num)
            }
        }
        if (num > this.val) {
            if (this.right) {
                this.right.insert(num)
            }
            else {
                this.right = new TreeNode(num)
            }
        }
    }
    BFS (node) {
        let queue = [node]
        let values = []
        while (queue.length) {
            let current = queue.shift()
            values.push(current.val)
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
        return values
    }
    preOrderDFS (node) {
        const values = []
        let current = node
        function traverse (current) {
            values.push(current.val)
            if (current.left) traverse(current.left)
            if (current.right) traverse(current.right)
        }
        traverse(current)
        return values
    }
}
