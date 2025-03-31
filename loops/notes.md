#Loops

## For Loop

for (let i = 1; i <= 10; i++){
console.log(i)
}

starting an incrementer named "i" which starts at 1, run the code and increment i++ each loop until i no longer meets the middle condition of being <=10.
runs while the middle condition is still true
watch out for infinite loops

the i++ part must assign the new i value.
i + 1 would not work.
i += 1 would work
i = i + 1 would work

### for loops in arrays

for (let i = 0; i < array.length; i++){
console.log(i, array[i])
}

let word = 'stressed'
let reversedWord = ''
for (let i = word.length-1; i >= 0; i--){
reverseWord.push(word[i])
}

length is the length starting from 1
indices start from the 0th place.

### nested for loops

for (let i = 0; i <= 10; i++){
console.log('outer loop' + i)
for (let j = 0; j<= 10; j++){
console.log('inner loop' + j)
}
}

outer loop increments once. inner loop runs its full looped cycle.

## While Loop

while something is true, run this code.
while(somethingIsTrue){run this code}
note that the code running inside should try to make the condition false if you want the loop to eventually stop.

while loops are great for when you don't know how many times a loop will run.
while (!gameOver) {gameLogic}

const targetNum = Math.floor(Math.random() * 10) +1
let guess = Math.floor(Math.random()*10)+1
while (guess !== target){
console.log(`Target: ${target}. Guess: ${guess}`)
guess = Math.floor(Math.random()\*10)+1
}
console.log(`You win! Target: ${target}. Guess: ${guess}`)

## Break

When javascript hits 'break', the loop ends and exits current loop immediately.
if it's a nested loop, break only exits the inner loop.
you could do it in a forloop but it's not as useful since you can stop at the end condition

while (true){
if(condition === true) break
}

## For Of

For (variable of an iterable){run code}

let subreddits = ['soccer', 'askreddit', 'books']
for (let sub in subreddits){console.log(sub)}
for (let thething in array)

iterables: strings, array
objects NOT ITERABLE.

forOf is great when you just need the value in the iterable.
forOf is not good when you also need access to the index of the iterable. for is better.

for better: need access to index AND value
forOf better: just need value.

objects not iterable; you can forOf over just the keys or just values.
Objects dont have indices, so movieReviews[1] means nothing.

Object.keys()
Object.values()

Instead of iterating over the whole object, can iterate over a collection of just the keys or just the values.

let keys = movieReviews.keys()
for (let key in keys){run code}

## For In

for OF iterates over VALUESof an iterable.
for IN iterates over KEYS of an iterable.

const jeopardyWinnings = {
regular: 2522700,
watson: 300000,
champions: 500000,
decades: 100000
}
for (let prop in jeopardyWinnings){
console.log(prop)
}
not recommended to use for-in with arrays, even though it would work and give you the key, which is the index.

FOR IN = keys
FOR OF = VALUES
