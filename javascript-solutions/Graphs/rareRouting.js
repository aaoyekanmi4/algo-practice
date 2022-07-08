// Similar to redundant edge except check for there being a path between all cities
const rareRouting = (n, roads) => {
    const graph = buildGraph(roads)
    const visited = new Set()
    const valid = validate(graph, 0, visited, null)
    return valid && visited.size === n
}

const buildGraph = (edges) => {
    const graph = {}
    for (let edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

const validate = (graph, node, visited, previousNode) => {
    if (visited.has(String(node))) return false
    visited.add(String(node))

    for (let neighbor of graph[node]) {
        if (neighbor !== previousNode && validate(graph, neighbor, visited, node) === false) {
            return false
        }
    }
    return true
}
