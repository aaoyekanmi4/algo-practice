function riverSizes (matrix) {

    const sizes = []
    const visited = Array.from({ length: matrix.length }, () => (
        Array.from({ length: matrix[0].length }, () => false)))

    const getNeighbors = (i, j, matrix, visited) => {
        const neighbors = []
        if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j])
        if (i < matrix.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j])
        if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1])
        if (j < matrix[i].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1])
        return neighbors
    }

    const traverseNode = (i, j, matrix, visited, sizes) => {
        let currentRiverSize = 0
        const stack = [[i, j]]
        let currentNode
        while (stack.length) {
            currentNode = stack.pop()
            i = currentNode[0]
            j = currentNode[1]
            if (visited[i][j]) continue
            visited[i][j] = true
            if (matrix[i][j] === 0) continue
            currentRiverSize++
            const neighbors = getNeighbors(i, j, matrix, visited)
            for (let neighbor of neighbors) {
                stack.push(neighbor)
            }
        }
        if (currentRiverSize > 0) sizes.push(currentRiverSize)
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (visited[i][j]) continue
            traverseNode(i, j, matrix, visited, sizes)

        }
    }
    
    return sizes
}
