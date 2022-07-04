const countPaths = (grid, row = 0, col = 0, memo = {}) => {
    const position = row + "," + col
    if (position in memo) return memo[position]
    const inRowBounds = row < grid.length
    const inColBounds = col < grid[0].length
    if (!inRowBounds || !inColBounds || grid[row][col] === 'X') return 0
    if (row === grid.length - 1 && col === grid[0].length - 1) return 1
    const downCount = countPaths(grid, row + 1, col, memo)
    const rightCount = countPaths(grid, row, col + 1, memo)
    memo[position] = downCount + rightCount
    return downCount + rightCount
}
