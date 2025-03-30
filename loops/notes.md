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

while loops are great for when you don't know how many times a loop will run.
