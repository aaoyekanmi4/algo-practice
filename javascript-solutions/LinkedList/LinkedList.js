const main = () => {
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
    const a = new Node('A')
    const b = new Node('B')
    const c = new Node('C')
    const d = new Node('D')

    a.next = b
    b.next = c
    c.next = d
    // A -> B -> C -> D -> Null

    // const printLinkedList = (head) => {
    //     let current = head
    //     while (current !== null) {
    //         console.log(current.val)
    //         current = current.next
    //     }
    // }
    const printLinkedList = (head) => {
        if (head === null) return
        console.log(head.val)
        printLinkedList(head.next)
    }
    printLinkedList(a)
}
main()

module.exports = { Node, LinkedList }
