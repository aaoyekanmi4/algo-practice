const main = () => {
    const canAttendMeetings = (arr) => {
        const sortedIntervals = arr.slice().sort((a, b) => a[0] - b[0])
        console.log(sortedIntervals)
        for (let i = 1; i < sortedIntervals.length; i++) {
            if (sortedIntervals[i][0] < sortedIntervals[i - 1][1]) return false
        }
        return true
    }

    console.log(canAttendMeetings([[0, 30], [5, 10], [15, 20]]))
    console.log(canAttendMeetings([[7, 10], [2, 4]]))
}
main()
