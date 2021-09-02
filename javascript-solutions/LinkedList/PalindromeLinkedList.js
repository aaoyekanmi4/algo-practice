var isPalindrome = function (head) {
    var reverseList = function (head) {
        let previous = null
        let current = head
        let next = null
        while (current) {
            next = current.next
            current.next = previous
            previous = current
            current = next
        }
        return previous
    }
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let middleReversed = reverseList(slow)
    let current = head
    let reversedCurrent = middleReversed
    while (current && reversedCurrent) {
        if (current.val !== reversedCurrent.val) {
            return false
        }
        current = current.next
        reversedCurrent = reversedCurrent.next
    }
    return true
};
