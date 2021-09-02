const { LinkedList } = require("./LinkedList.js")

const main = () => {
    const findMiddle = (head) => {
        let slow = head
        let fast = head
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    const newList = new LinkedList()
    const testList = newList.insertMany([1, 2, 3, 4, 5, 6, 7, 8])
    console.log(findMiddle(testList))
}
main()
