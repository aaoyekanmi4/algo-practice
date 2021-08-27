const main = () => {
    const countBits = (num) => {
        const numOfOnes = [0]
        for (let i = 1; i <= num; i++) {
            //shifting bits to the right 1 is dividing by 2
            //we add i %2 to get extra 1 from odd numbers
            numOfOnes[i] = numOfOnes[i >> 1] + i % 2
        }
        return numOfOnes
    }
    console.log(countBits(5))

}
main()
