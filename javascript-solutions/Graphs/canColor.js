const canColor = (graph) => {
    // can't just do simple cycle detection
    // alternate colors for each node
    // if current not colored, its not visited
    // color the node , color the neighbors the other colored
    // can use true for red false for blue for example
    // return false if node seen and its not the color we want to
    const colored = {}
    for (let node in graph) {
        if (!(node in colored)) {
            if (!confirmColors(node, graph, colored, false)) {
                return false
            }
        }
    }
    return true
}

const confirmColors = (node, graph, colored, currentColor) => {
    if (node in colored) return colored[node] === currentColor
    console.log(node)
    colored[node] = currentColor

    for (let neighbor of graph[node]) {
        if (!confirmColors(neighbor, graph, colored, !currentColor)) {
            return false
        }
    }
    return true
}

console.log(canColor({
    x: ["y"],
    y: ["x", "z"],
    z: ["y"]
}))
