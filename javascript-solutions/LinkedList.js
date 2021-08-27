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
    insertMany (arr) {
        let idx = this.head ? 0 : 1
        if (!this.head) {
            this.head = new Node(arr[0])
        }
        let current = this.head
        while (idx < arr.length) {
            current.next = new Node(arr[idx])
            current = current.next
            idx++
        }
        return this.head
    }
}

module.exports = { LinkedList, Node }
