const Hangman = function(word, numberOfGuess){
    this.word = word
    this.numberOfTries = numberOfGuess
}

const first = new Hangman('cat',2)
const second = new Hangman('Peter',3)
console.log(first)
console.log(second)



