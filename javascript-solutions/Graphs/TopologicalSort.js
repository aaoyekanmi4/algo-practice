const topologicalOrder = (graph) => {
    // todo
    const numParents = {}
    for (let node in graph) {
        numParents[node] = 0
    }

    for (let node in graph) {
        for (let child of graph[node]) {
            numParents[child]++
        }
    }
    const ready = []
    for (let node in graph) {
        if (numParents[node] === 0) {
            ready.push(node)
        }
    }
    const order = []
    while (ready.length) {
        let current = ready.pop()
        order.push(current)
        for (let child of graph[current]) {
            numParents[child]--
            if (numParents[child] === 0) {
                ready.push(child)
            }
        }

    }
    return order
};
