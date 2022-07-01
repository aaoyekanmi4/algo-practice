var orangesRotting = function (grid) {

    let minutes = -1
    let freshOranges = 0
    let queue = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) queue.push([i, j])
            if (grid[i][j] === 1) freshOranges++
        }
    }
    queue.push('marker')
    while (queue.length) {

        let current = queue.shift()
        if (current === 'marker') {
            minutes++
            if (queue.length) {
                queue.push('marker')
            }
        }
        else {

            let row = current[0]
            let col = current[1]
            let neighbors = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
            neighbors.forEach((neighbor) => {

                let row = neighbor[0]
                let col = neighbor[1]
                const inRowBounds = 0 <= row && row < grid.length
                const inColBounds = 0 <= col && col < grid[0].length
                if (inRowBounds && inColBounds) {

                    if (grid[row][col] === 1) {
                        freshOranges--

                        grid[row][col] = 2
                        queue.push(neighbor)
                    }
                }

            })

        }
    }

    return freshOranges === 0 ? minutes : -1
};
