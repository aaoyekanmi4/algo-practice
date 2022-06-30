class Graph {
    constructor () {
        this.adjacencyList = {}
    }

    addVertex (vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge (v1, v2, weight) {
        this.adjacencyList[v1].push({ vertex: v2, weight })
        this.adjacencyList[v2].push({ vertex: v1, weight })
    }
}

//
