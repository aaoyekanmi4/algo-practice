const parents = []
const rank = new Array(n).fill(1)
for (let i = 0; i < n; i++) {
    parents.push(i)
}
        // parents = [0, 1, 2, 3, 4] for n = 5


const find = (n1) => {
    //first set parent to itself
    let result = n1

    // while node is not parent of itself
    while (result !== parents[result]) {

        //path compression optimization
        parents[result] = parents[parents[result]]

        //update result to be its parent
        result = parents[result]
    }
    return result
}
const union = (n1, n2) => {
    n1 = find(n1) // find parent of node
    n2 = find(n2)
    if (n1 === n2) { // if they have the same parent
        return 0 // no union performed
    }
    if (rank[n2] > rank[n1]) { // if n2 a bigger component
        parents[n1] = n2       // make n2 the parent of n1
        rank[n2] += rank[n1] // increase parent rank by the size joining component
    } else {
        parents[n2] = n1
        rank[n1] += rank[n2]
    }
    return 1 
}
