const rareRouting = (n, roads) => {
  // todo
  const parents = []
  for (let i = 0; i < n; i++) {
    parents.push(i)
  }
  const rank = Array(n).fill(1)


  for (let road of roads) {
    const [city1, city2] = road

    if (!union(rank, parents, city1, city2)) {
        return false
        }
  }
   if (!rank.find((city) => city === n)) {
     return false
   }

  return true
  }


 const find = (parents, n1) => {
    let result = n1
    while (result !== parents[result]) {
        //path compression optimization
        parents[result] = parents[parents[result]]

        //update result to be its parent
        result = parents[result]
    }
    return result
    }

  const union = (rank, parents, n1, n2) => {
        n1 = find(parents, n1)
        n2 = find(parents, n2)
    if (n1 === n2) return false
     if (rank[n2] > rank[n1]) { // if n2 a bigger component
        parents[n1] = n2       // make n2 the parent of n1
        rank[n2] += rank[n1] // increase parent rank by the size joining component
    } else {
        parents[n2] = n1
        rank[n1] += rank[n2]
    }
    return true
  }
console.log(rareRouting(4, [
  [0, 1],
  [0, 2],
  [0, 3],
  [3, 2]
]))
