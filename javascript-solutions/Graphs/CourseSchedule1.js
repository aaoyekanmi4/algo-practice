var canFinish = function (numCourses, prerequisites) {
    const visited = new Set()

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

    
    const dfs = (node, visited, graph) => {
        if (visited.has(node)) return false
        if (!graph[node].length) return true
        visited.add(node)
        for (let neighbor of graph[node]) {
            if (!dfs(neighbor, visited, graph)) return false
        }
        visited.delete(node)
        graph[node] = []
        return true
    }

    for (let node in graph) {
        if (!dfs(node, visited, graph)) return false
    }
    return true
};
