const main = () => {
    const edges = [[1,0], [1, 4], [0, 2], [3,2], [4, 2]]
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

    const graph = buildGraph(edges)
    console.log(graph)
    //For directed acyclic we don't need the visited set
    const hasPath = (src, dst, graph, visited = new Set()) => {
        console.log(src)
        if (visited.has(src)) return false
        visited.add(src)
        if (src === dst) return true
        for (let neighbor of graph[src]) {
            if (hasPath(neighbor, dst, graph, visited) === true) return true
        }
        return false
    }
    console.log(hasPath(4, 0, graph))
}
main()
