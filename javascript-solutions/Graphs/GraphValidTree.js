/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
    if (edges.length !== n - 1) return false
    const visited = new Set()
    const buildGraph = (edges) => {
        const graph = {}
        for (let i = 0; i < n; i++) {
            graph[i] = []
        }
        for (let edge of edges) {
            const [a, b] = edge
            graph[a].push(b)
            graph[b].push(a)
        }
        return graph
    }
    const graph = buildGraph(edges)

    const dfs = (graph, node, visited) => {

        if (visited.has(String(node))) return false
        visited.add(String(node))
        for (let neighbor of graph[node]) {
            dfs(graph, neighbor, visited)
        }
        return true
    }

    dfs(graph, 0, visited)
    return visited.size === n
}
