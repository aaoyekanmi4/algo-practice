var mergeTwoLists = function (l1, l2) {
    const linkedList = new ListNode()
    let current = linkedList
    while (true) {
        if (!l1) {
            current.next = l2
            break
        }
        if (!l2) {
            current.next = l1
            break
        }
        if (l1.val <= l2.val) {
            current.next = l1
            l1 = l1.next
        }
        else {
            current.next = l2
            l2 = l2.next
        }
        current = current.next
    }
    return linkedList.next
};
