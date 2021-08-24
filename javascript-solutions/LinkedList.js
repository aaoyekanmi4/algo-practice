class Node {
    constructor (val, next = null) {
        this.val = val
        this.next = next
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }
    insertFirst (val) {
        this.head = new Node(val, this.head)
    }
}
