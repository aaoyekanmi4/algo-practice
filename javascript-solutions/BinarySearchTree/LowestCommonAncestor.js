const main = () => {
    var lowestCommonAncestor = function (root, p, q) {
        let node = root
        if (p.val < node.val && q.val < node.val) {
            return lowestCommonAncestor(node.left, p, q)
        }
        if (p.val > node.val && q.val > node.val) {
            return lowestCommonAncestor(node.right, p, q)
        }
        return node
    }
    console.log()
}
main();
