function tournamentWinner (competitions, results) {
    let scores = {}
    for (let i = 0; i < results.length; i++) {
        if (results[i] === 0) {
            if (scores[competitions[i][1]]) {
                scores[competitions[i][1]] += 3
            }
            else {
                scores[competitions[i][1]] = 3
            }
        }
        else {
            if (scores[competitions[i][0]]) {
                scores[competitions[i][0]] += 3
            }
            else {
                scores[competitions[i][0]] = 3
            }
        }
    }

    let max = 0
    let winningTeam = ''
    for (let team in scores) {
        if (scores[team] > max) {
            max = scores[team]
            winningTeam = team
        }
    }
    return winningTeam
}
