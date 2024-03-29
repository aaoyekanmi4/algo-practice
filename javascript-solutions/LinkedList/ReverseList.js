const main = () => {
    const reverseList = (head) => {
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
}
main()
