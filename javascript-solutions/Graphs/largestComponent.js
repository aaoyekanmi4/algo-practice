const main = () => {

    const largestComponent = (graph) => {
        
        const traverseGraph = (node, graph, visited) => {
            let size = 1
            if (visited.has(node)) return 0
            visited.add(node)

            for (let neighbor of graph[node]) {
                size += traverseGraph(neighbor, graph, visited)
            }
            return size
        }

        let maxCount = 0
        let visited = new Set()
        let componentSize = 0

        for (let node in graph) {
            componentSize = traverseGraph(node, graph, visited)
            if (componentSize > maxCount) maxCount = componentSize
        }
        return maxCount
    }

    console.log(largestComponent({
        0: ['8', '1', '5'],
        1: ['0'],
        5: ['0', '8'],
        8: ['0', '5'],
        2: ['3', '4'],
        3: ['2', '4'],
        4: ['3', '2']
    }))
}
main()
