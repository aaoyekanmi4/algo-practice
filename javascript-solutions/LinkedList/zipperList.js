const zipperLists = (head1, head2) => {
    // todo
    //when count even take from 2 odd from 1
    let count = 0
    let tail = head1
    let current1 = head1.next
    let current2 = head2

    while (current1 && current2) {
        if (count % 2 === 0) {
            tail.next = current2
            current2 = current2.next
        } else {
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count++
    }
    // if one chain empty, just attach the rest of the other one to tail
    if (!current1) tail.next = current2
    if (!current2) tail.next = current1

    return head1
};
