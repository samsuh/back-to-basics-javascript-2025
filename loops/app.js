// for (let i = 99; i >= 0; i--) {
//   if (i > 1) {
//     console.log(i, 'bottles of beer')
//   } else if (i == 1) {
//     console.log('1 bottle of beer')
//   } else if (i == 0) {
//     console.log('no more bottles of beer')
//   }
// }

let word = 'stressed'
let reversedWord = ''
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i]
}
