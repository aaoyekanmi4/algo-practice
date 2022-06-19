const main = () => {
    var isPalindrome = function (s) {
        const replacedString = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
        let left = 0
        let right = replacedString.length - 1
        while (left < right) {
            if (replacedString[left] !== replacedString[right]) {
                return false
            }
            left++
            right--
        }
        return true
    };
    console.log(isPalindrome('A man a plan a canal: Panama'))
}
main()
