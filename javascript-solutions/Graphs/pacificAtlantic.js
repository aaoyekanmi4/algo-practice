const main = () => {
    var pacificAtlantic = function (heights) {
        const pacificQueue = []
        const atlanticQueue = []

        if (!heights) return []

        //Left and right sides
        for (let i = 0; i < heights.length; i++) {
            pacificQueue.push([i, 0])
            atlanticQueue.push([i, heights[0].length - 1])
        }
        //Top and bottom
        for (let j = 0; j < heights[0].length; j++) {
            pacificQueue.push([0, j])
            atlanticQueue.push([heights.length - 1, j])
        }

        const getFlowCells = (heights, queue) => {
            let reachable = new Array(heights.length).fill().map(() => Array(heights[0].length).fill(false))
            const offsets = [[-1, 0], [1, 0], [0, 1], [0, -1]]
            while (queue.length) {
                let current = queue.shift()
                let [row, col] = current
                if (reachable[row][col]) continue
                reachable[row][col] = true
                for (let offset of offsets) {
                    const [offsetRow, offsetCol] = offset
                    let newRow = row + offsetRow
                    let newCol = col + offsetCol

                    if (newRow < 0
                        || newRow > heights.length - 1
                        || newCol < 0
                        || newCol > heights[0].length - 1) {
                        continue

                    }
                    if (heights[newRow][newCol] < heights[row][col]) {
                        continue
                    }

                    if (reachable[newRow][newCol]) continue

                    queue.push([newRow, newCol])
                }
            }
            return reachable
        }
        const pacificReachable = getFlowCells(heights, pacificQueue)
        const atlanticReachable = getFlowCells(heights, atlanticQueue)

        const result = []
        for (let i = 0; i < heights.length; i++) {
            for (let j = 0; j < heights[0].length; j++) {
                if (pacificReachable[i][j] === atlanticReachable[i][j]) {
                    result.push([i, j])
                }
            }
        }
        return result
    }
    console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]))
}
main()
