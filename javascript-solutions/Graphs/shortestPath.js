const main = () => {

    const shortestPath = (startNode, endNode, edges) => {
        let visited = new Set ()


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
        //breadth-first search of graph
        const bfs = (current, target, graph, visited) => {
            let count = 0
            const queue = [[startNode, count]]
            while (queue.length) {

                let current = queue.shift()
                count++

                if (current[0] === target) {
                    return [target, current[1]]
                }
                for (let neighbor of graph[current[0]]) {
                    if (!visited.has(neighbor)) {
                        visited.add(current)
                        queue.push([neighbor, count])

                    }
                }
            }
            return null
        }
        const result = bfs(startNode, endNode, graph, visited)
        return result
    }
    const edges = [
        ['w', 'x'],
        ['x', 'y'],
        ['z', 'y'],
        ['z', 'v'],
        ['w', 'v']
    ];
    console.log(shortestPath('w', 'z', edges))
}
main()
