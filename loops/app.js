// for (let i = 99; i >= 0; i--) {
//   if (i > 1) {
//     console.log(i, 'bottles of beer')
//   } else if (i == 1) {
//     console.log('1 bottle of beer')
//   } else if (i == 0) {
//     console.log('no more bottles of beer')
//   }
// }

// let word = 'stressed'
// let reversedWord = ''
// for (let i = word.length - 1; i >= 0; i--) {
//   reversedWord += word[i]
// }

// const targetNum = Math.floor(Math.random() * 10) + 1
// let guess = Math.floor(Math.random() * 10) + 1
// while (guess !== targetNum) {
//   console.log(`Target: ${targetNum}. Guess: ${guess}`)
//   guess = Math.floor(Math.random() * 10) + 1
// }
// console.log(`You win! Target: ${targetNum}. Guess: ${guess}`)

const movieReviews = { Arrival: 9.5, Alien: 9, Amelie: 8, 'In Bruges': 9 }
// for (let movie of Object.keys(movieReviews)) {
//   console.log(movie, movieReviews[movie])
// }

// for (let key of Object.keys(movieReviews)) {
//   console.log(key)
//   console.log(movieReviews[key])
// }

//get average rating
// let sum = 0
// let ratings = Object.values(movieReviews)
// for (let rating of ratings) {
//   sum += rating
//   console.log(rating)
//   console.log(sum)
// }
// console.log(sum / ratings.length)

const jeopardyWinnings = {
  regular: 2522700,
  watson: 300000,
  champions: 500000,
  decades: 100000,
}
for (let prop in jeopardyWinnings) {
  console.log(prop)
}
