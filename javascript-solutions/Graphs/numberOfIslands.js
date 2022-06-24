/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0
    let visited = new Set()

    const searchGrid = (grid, i, j, visited) => {

        const inRowBounds = 0 <= i && i < grid.length
        const inColumnBounds = 0 <= j && j < grid[0].length
        if (!inRowBounds || !inColumnBounds) return false

        if (grid[i][j] === '0') return false
        let coordinates = i + ',' + j
        if (visited.has(coordinates)) return false

        visited.add(coordinates)
        
        searchGrid(grid, i - 1, j, visited)
        searchGrid(grid, i + 1, j, visited)
        searchGrid(grid, i, j + 1, visited)
        searchGrid(grid, i, j - 1, visited)

        return true
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (searchGrid(grid, i, j, visited) === true) {
                count++
            }
        }
    }
    return count
}
