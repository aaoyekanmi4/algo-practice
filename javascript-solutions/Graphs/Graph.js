class Graph {
    constructor () {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge (v1, v2) {
        if (!this.adjacencyList[v1].includes(v2)) {
            this.adjacencyList[v1].push(v2)
        }
        if (!this.adjacencyList[v2].includes(v1)) {
            this.adjacencyList[v2].push(v1)
        }
    }

    removeEdge (v1, v2) {
        this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2].filter(v => v !== v1)
    }

    removeVertex (vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjacencyList(vertex)
    }

    dfsRecursive (vertex) {
        const result = []
        const visited = {}

        const dfsHelper = (vertex) => {
            result.push(vertex)
            visited[vertex] = true
            this.adjacencyList[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    return dfsHelper(neighbor)
                }
            })
        }
        dfsHelper(vertex)
        return result
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("E", "F")
graph.addEdge("D", "E")
graph.addEdge("D", "F")
console.log(graph)
console.log(graph.dfsRecursive("A"
))
