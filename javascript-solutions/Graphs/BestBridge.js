const main = () => {
    const bestBridge = (grid) => {

        const offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]]

        const inBounds = (row, col) => {
            const rowInBounds = 0 <= row && row < grid.length
            const colInBounds = 0 <= col && col < grid[0].length
            return rowInBounds && colInBounds
        }

        const getNeighbors = (row, col) => {
            const neighbors = []
            for (let offset of offsets) {
                const [rowDiff, colDiff] = offset
                let newRow = rowDiff + row
                let newCol = colDiff + col
                neighbors.push([newRow, newCol])
            }
            return neighbors
        }

        const findIsland = (row, col, grid, firstIsland) => {
            if (grid[row][col] !== 'L' || !inBounds(row, col)) return false
            const position = row + "," + col
            if (firstIsland.has(position)) return false
            firstIsland.add(position)

            const neighbors = getNeighbors(row, col)
            for (let neighbor of neighbors) {
                const [row, col] = neighbor
                findIsland(row, col, grid, firstIsland)
            }
            return true
        }

        const getFirstIsland = (grid, firstIsland) => {
            for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[0].length; j++) {
                    if (findIsland(i, j, grid, firstIsland) === true) {
                        return firstIsland
                    }
                }
            }
        }

        const firstIsland = getFirstIsland(grid, new Set())

        const firstIslandArray = []
        firstIsland.forEach((square) => {
            let count = 0
            const row = Number(square[0])
            const col = Number(square[2])
            firstIslandArray.push([row, col, count])
        })
        const queue = [...firstIslandArray]
        const visited = new Set(firstIsland)

        while (queue.length) {
            let current = queue.shift()
            let [row, col, count] = current
            let position = row + "," + col

            if (grid[row][col] === 'L' && !firstIsland.has(position)) {
                return count - 1
            }
            const neighbors = getNeighbors(row, col)
            for (let neighbor of neighbors) {
                const [row, col] = neighbor
                let position = row + "," + col
                if (inBounds(row, col) && !visited.has(position)) {
                    queue.push([row, col, count + 1])
                    visited.add(position)
                }
            }
        }

    }

    const grid = [
        ["W", "W", "W", "W", "W"],
        ["W", "W", "W", "W", "W"],
        ["L", "L", "W", "W", "L"],
        ["W", "L", "W", "W", "L"],
        ["W", "W", "W", "L", "L"],
        ["W", "W", "W", "W", "W"],
    ]
    console.log(bestBridge(grid));
}
main()
