var removeElements = function (head, val) {
    if (!head) {
        return null
    }
    while (head && head.val === val) {
        head = head.next
    }
    let current = head
    while (current) {
        if (current.next && current.next.val === val) {
            current.next = current.next.next || null
        } else {
            current = current.next
        }

    }
    return head
};
