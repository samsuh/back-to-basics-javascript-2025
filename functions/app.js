// Exercise 1: write isValidPassword function
// accepts 2 arguments, password and username
// password must be >8 chars, cannot contain spaces, cannot contain the username
// if all conditions met, then return true. otehrwise return false.

function isValidPassword(password, username) {
  if (password.length < 8) {
    console.log(password.length)
    return false
  }
  if (password.indexOf(' ') !== -1) {
    console.log(password.indexOf(' '))
    return false
  }
  if (password.indexOf(username) !== -1) {
    return false
  }
  return true
}

//Exercuse 2: write a function called 'avg' that takes in an array of numbers and returns the average

function avg(numArray) {
  let sum = 0
  for (let num of numArray) {
    console.log(num)
    sum += num
  }
  return sum / numArray.length
}

//Exercise 3: write a function to check if an input sentence is a pangram (contains every letter in alphabet)

function isPangram(sentence) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let char of alphabet) {
    if (sentence.toLowerCase().indexOf(char) === -1) {
      console.log(char)
      console.log(sentence.indexOf(char))
      return false
    }
  }
  return true
}

//Exercse 4: write a function getCard that returns a random card in the deck as an object; value and suit.

function getCard() {
  const validValues = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ]
  const validSuits = ['hearts', 'clubs', 'diamonds', 'spades']
  const cardValue = Math.floor(Math.random() * validValues.length)
  const cardSuit = Math.floor(Math.random() * validSuits.length)
  return { value: validValues[cardValue], suit: validSuits[cardSuit] }
}

function outer() {
  let movie = 'Amadeus'
  function inner() {
    console.log(movie.toUpperCase())
  }
  inner() // this works because inner was still called within outer() fx.
}
//calling inner() here would not work, because it's outside function scope.

const btn = document.querySelector('button')
btn.addEventListener('click', () => {
  alert('dosomethingafter3sec')
})
