const main = () => {
    const Blocks = [
        {
            Grocery: true,
            Movies: false,
            Laundry: false,
        },
        {
            Grocery: false,
            Movies: true,
            Laundry: false
        },
        {
            Grocery: false,
            Movies: false,
            Laundry: true,
        },
        {
            Grocery: true,
            Movies: true,
            Laundry: false
        }
    ]

    const Reqs = ["Grocery", "Laundry"]

    function getBestBlocks () {
        let reqDistances = []
        for (let req of Reqs) { //m
            let currentBlock = 0
            while (currentBlock < Blocks.length) {
                let minDistance = Infinity
                for (let i = 0; i < Blocks.length; i++) {
                    if (Blocks[i][req]) {
                        if (Math.abs(currentBlock - i) < minDistance) {
                            minDistance = Math.abs(currentBlock - i)
                        }
                    }
                }
                if (reqDistances[currentBlock]) {
                    reqDistances[currentBlock].push(minDistance)
                }
                else {
                    reqDistances[currentBlock] = [minDistance]
                }
                currentBlock++
            }
        }
        console.log(reqDistances)
        let maxDistancesForBlock = reqDistances.map((distances) => Math.max(...distances))
        let bestBlockValue = Math.min(...maxDistancesForBlock)
        let bestBlocks = []
        maxDistancesForBlock.map((block, index) => {
            if (block === bestBlockValue) {
                bestBlocks.push(index)
            }
        })
        return bestBlocks
    }
    console.log(getBestBlocks())
}
main()
