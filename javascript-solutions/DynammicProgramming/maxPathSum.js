const maxPathSum = (grid, row = 0, col = 0, memo = {}) => {
    const position = row + "," + col
    if (position in memo) return memo[position]
    const inRowBounds = row < grid.length
    const inColBounds = col < grid[0].length
    if (!inRowBounds || !inColBounds) return -Infinity
    const lastValue = grid[grid.length - 1][grid[0].length - 1]
    if (row === grid.length - 1 && col === grid[0].length - 1) return lastValue
    const positionValue = grid[row][col]
    const downSum = maxPathSum(grid, row + 1, col, memo)
    const rightSum = maxPathSum(grid, row, col + 1, memo)
    memo[position] = Math.max(downSum, rightSum) + positionValue
    return memo[position]
}
const grid = [
    [1, 3, 12],
    [5, 1, 1],
    [3, 6, 1],
]
console.log(maxPathSum(grid))
