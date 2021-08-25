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
        this.head = new Node(arr[0])
        let current = this.head
        let idx = 1
        while (idx < arr.length) {
            current.next = new Node(arr[idx])
            current = current.next
            idx++
        }
        return this.head
    }
}

module.exports = { LinkedList, Node }
