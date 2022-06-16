function cycleInGraph (edges) {

    const visited = {}
    const inStack = {}

    const dfsHelper = (edge) => {
        visited[edge] = true
        inStack[edge] = true

        for (let e of edges[edge]) {
            if (visited[e]) {
                if (inStack[e]) return true
            }
            else {
                const hasCycle = dfsHelper(e)
                if (hasCycle) return true
            }
        }
        inStack[edge] = false
    }

    for (let i = 0; i < edges.length; i++) {
        const hasCycle = dfsHelper(i)
        if (hasCycle) return true
    }
    
    return false
}
