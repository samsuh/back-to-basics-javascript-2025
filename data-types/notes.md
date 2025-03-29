# Data Types

Collections of data

## Arrays

Ordered collections of values
Can declare it as a variable with or without initialized values
let shoppingList = ['cereal', 'cheese', 'ice'];
you could initialize it like this, even though there's no reason to:
new Array(1,2,3,4,5) would create [1,2,3,4,5]

Arrays are indexed starting at index 0, [0]
we can assign index with new values.
shoppingList[1] = "Whole Milk"

to add to the end of an existing array, we can add it
shoppingList[shoppingList.length] = "Tomatoes"
shoppingList[shoppingList.length] = "Potatoes"
but pushing is better. assigning to the index overwrites what's there already

### Array methods

push(), pop(), shift(), unshift()

- Push/Pop END OF ARRAY
- Shift/Unshift START OF ARRAY

Push; add element to the end of an array. pushing to the end returns the new last index.
Pop; removes the last item and returns it to you.
Shift; remove from Start
Unshift; adds to the Start and returns new length
adding multiple items in one command will add them together as passed in, not sequentially.

concat()
merges two or more arrays into one array.
array1.concat(array2) creates a new array that contains the contents of both together
let fruits = ['apple', 'banana']
let veggies = ['asparagus', 'brussel sprouts']
let meats = ['steak', 'chicken breast']

let allFood = fruits.concat(veggies, meats)
starts with fruits array, and adds veggies next, then meats at the end.

includes()
takes a value and returns a boolean of whether the value exists in the array.
optional argument is a starting index of the array to begin the searchFrom index.

indexOf()
takes a value and if it exists, return the index it exists at.
if it does not exist, it returns -1
from index is also an optional argument to start looking from.

reverse()
reverses the array in place. it modifies and replaces the original array

join()
takes argument of 'symbol to add between the values' (the default seperator is a comma) and joins all the values of an array into one string.
non-strings that are joined get turned into strings.

slice()
takes a portion of an array and makes a new array with it. select part of an array into a new one.
array.slice() creates a new copy of the same array.
array.slice(2,5) includes index 2, up to, but not including 5.
if only one argument, it starts there and goes to the end.
let animals = ['shark', 'salmon', 'whale', 'bear','lizard', 'tortoise']
let swimmers = animals.slice(0,3)
let mammals = animal.slice(2,4)
let reptiles = animals.slice(4)
let quadrupeds = animals.slice(-3) go backwards 3 from the end.
animals.slice(-3, -1) go from 3 from the back to 1 from the back.

splice()
remove, replace, or add elements in an array, usually to the middle.
arguments: start/how many things to delete/ new elements to add in
animals.splice(1, 0, 'octopus') // take the animals array, take the 1 index item, remove 0 items, and add in one item called 'octopus'
would return [] since it would return any deleted values.
splice modifies the actual original array.

sort()
it sorts the original array and returns the newly sorted array.
strings sort alphabetically probably by unicode
numbers get converted to a string, then compares unicode values.

- to do sorting, pass in a function to tell it how you want it to sort.

## Reference Types

primitive types store the actual primitive value.
arrays and objects store a reference to the thing at a specific memory location

### Const and arrays

const is immutable.
the reference is still ok, so you can mutate array values inside.
const myArray = ['brown', 'brown']
myArray.push('purple') changes myArray to be ['brown', 'brown', 'purple']

### Arrays of arrays

const colors = [
['1', '2'],
['3', '4'],
['5', '6']
]

colors[2] gives the 2-index array of ['5', '6'].
colors[2][0] gives the '5' which is the 0th index of the 2 index.

const tiktaktoeBoard = [
['O', null, 'X'],
[null, 'X', 'O'],
['X', 'O', null],
]

## Objects

Grouped data with labels.
Pairs of data label and value. key-value pairs.
