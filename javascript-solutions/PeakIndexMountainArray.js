var peakIndexInMountainArray = function (arr) {
    let start = 0
    let end = arr.length - 1
    while (start < end) {
        let midpoint = Math.floor((end + start) / 2)
        if (arr[midpoint] < arr[midpoint + 1]) {
            start = midpoint + 1
        } else {
            end = midpoint
        }
    }
    return start
};
