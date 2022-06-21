const main = () => {

    const connectedComponentCount = (edges) => {

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
        const visited = new Set()
        let count = 0
        for (let node in graph) {
            if (explore(graph, node, visited) === true) {
                count++
            }
        }
        return count
    }
    const explore = (graph, current, visited) => {
        if (visited.has(String(current))) return false
        visited.add(String(current))
        for (let neighbor of graph[current]) {
            explore(graph, neighbor, visited)
        }
        return true
    }
    console.log(connectedComponentCount([[2, 3], [1, 2], [1, 3]]))
}
main()
