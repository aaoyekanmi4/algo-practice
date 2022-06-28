var findOrder = function (numCourses, prerequisites) {
    const visited = new Set()
    const cycle = new Set()
    const result = []

    const buildGraph = (numCourses, prerequisites) => {
        const graph = {}
        for (let i = 0; i < numCourses; i++) {
            graph[i] = []
        }
        for (let edge of prerequisites) {
            const [a, b] = edge
            graph[a].push(b)
        }
        return graph
    }
    const graph = buildGraph(numCourses, prerequisites)

    const dfs = (node, visited, cycle, graph) => {
        if (cycle.has(String(node))) return false
        if (visited.has(String(node))) return true

        cycle.add(String(node))
        for (let neighbor of graph[node]) {
            if (!dfs(neighbor, visited, cycle, graph)) return false
        }
        cycle.delete(String(node))
        visited.add(String(node))

        result.push(node)
        return true
    }

    for (let node in graph) {
        if (!dfs(node, visited, cycle, graph)) return []
    }
    return result
};
