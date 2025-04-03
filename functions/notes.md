# Functions

console.log is different than a function returning something.

this does not work:
const sum = add(1,2)

1. you can only return one thing from a function
2. return statements end the function. anything after it wont run.
3. returning can stop the whole function even from inside nested loops. different than 'break' keyword.

function isPurple(color){
if (color.toLowerCase() === 'purple'){
return true
}
return false
}

function isPurpose(color){
return color.toLowerCase() === 'purple'
}

function containsPurple(colorArray){
for (let color of colorArray){
if(color === 'purple'){
return true
}
}
return false
}

when using the same exact code logic in multiple places, you can extract it out into a separate function.

## Scope

Scope is the part of your code that has access to certain variables.

### Function scope

inside the function, you have things created inside.
outside the function, you do not have access to things created inside the function.
let/const/var are all bound by function scope.
variables set before function are unchanged by what's happening inside function.

let bird = 'duck'
function doSomething(){
let bird = 'pheasant'
}
bird // would still be duck because the function is self-contained.

### Block scope

Blocks of code inside {...} like in for loops, if statements, etc.

Variables created outside blocks cope are available before, inside block, and after, and can be changed by the code block that affects outside the block.

let/const dont mess with outside block scope. let/const are block scoped.
var impacts outside block scope. var is function scoped!

### Lexical scope

Nested functions have access to variables declared in its parent functions.
Does not work the other way. Declarations in inner fxs are not available outside them because of function scoping.

When nested functions, inner fx has access to variables declared in the outer fx.
The reason this works is that js will first look inside inner(), and if it doesnt find one, it'll keep looking for it outside of inner() within outer()

## Function expression. Putting a name on a function. can put anonymous or named fx into a variable.

const variable = functionGoesHere

Functions are objects in javascript.

const square = function (num){reutrn num\*num}
square(5) //25

### Functions are objects

can collect functions together
define 4 functions, put them all into an array.
const operations = [add, subtract, multiply, divide]
operations[1](100,4) //96

for (let func of operations){
let result = func(30,5)
console.log(result)
} // 35,25,150,6

const thing = {doSomething: multiply}

thing.doSomething(50,2) //100
//we created a 'method'.

## Callback functions

Anytime we pass a function A to another function B, and A is executed inside of B, A is a callback.
function B(A){A()} //A is a callback

often we pass anonymous functions as callbacks since we dont care about reusing it, we just need it to work.

## Hoisting

console.log(animal)
var animal = 'dog'

hoisting VAR
this does not error, just returns undefined. javascript hoists up the variable declaration first, then it runs the code and eventually the animal variable is set to 'dog'.
js defines var initializations first, then later sets it.

hoisting LET/CONST
consolg.log('shrimp')
let shrimp = 'shrimp'
errors.
LET does not hoist like VAR did. same for const.

hoisting FUNCTION
howl()
function howl(){console.log('awoo')} //function statement is hoisted.

but if set to a variable, it hoists only the initialization, not the value.
hoot()
var hoot = function (){console.log('hoothoot')} // hoot exists, but cant call it to use the function itself. it's known to exist, but not its value.
this is a "function expression". works the same way as var/let for setting variables.

## Arrow Functions

anonymous function that is more compact
() => {}
function(x) {return x*x}
(x) => {return x*x}

the () is optional when there is only one parameter
x => {return x\*x}
empty parentheses is required when theres no parameter

implicit returns
works for when there's a simple expression being returned; not doing other logic first (not making variable, making conditionals)

const square = n => (
n\*n
)
the () here is to make it read a multiline expression
can use implicit return when it's very obvious to js what to return and it cant get lost in logic along the way.

## Built-in Array Methods

All arrays have built in functions as part of what makes it an array.
We are trying to run a fx once per element in the array.

### For Each

const nums = [9,8,7,6,5,4,3,2,1]
nums.forEach(function(nameItSomethingAboutTheValueItRepresents){
console.log(num*2) //it does this code for every element in the array.
})
function printTriple(n){console.log(n*3)}
numbers.forEach(printTriple) //console logs 3x every element in the array one by one.

note you can get the index in a forEach by passing a second parameter.
nums.forEach(num, idx){//code}

### Map

Takes in callback, and returns an array filled with result of calling callback on every element of the array.

const texts = ["bottle", "cup", "mug", "thermos"]
const capitalized = texts.map(function(t){return t.toUpperCase()}) // ran toUpperCase on every element and put it in a new array and retured new array.
map has to return new value out. otherwise itll return something (undefined), so returning the value will populate it with info you actually want.
capture the returned new array into a variable.
can return in whatever format you want the output to be, like in an object.

### Find

.find()
returns ONE ELEMENT
returns the value of the FIRST element that satisfies the testing function
"test function" returns true of false and is used to test every element.

const goodBook = books.find(b => b.rating >= 4.3)

### Filter

returns a new array containing only elements that satisfy the test function
Test all elements. Test OK, KEEP element.
"test function" returns boolean. run against every element in array. keep TRUE.

const query = 'the'
const results = books.filter(b => {
const title = book.title.toLowerCase()
return title.includes(query.toLowerCase())
})

### Every

checks each element in an array for a test function. if ALL elements satisfy the test, return one 'true'
words.every(word => word.length === 3) //true

pass in boolean test function.

### Some

same as every but if some elements satisfy, return true.
every must have all elements satisfy to return true.

### Sort

sorted in place. original array is changed and returned.
you have to pass .sort() a "compare function" and two parameters "a,b" or "first,second" or whatever you name it.
if the function returns <0, sorts a before b
else if function returns 0, leaves a and b unchanged
else if function returns >0, sorts b before a.

const prices = [1,20,55,1159132,331,1531]
const sort1 = prices.sort((a,b) => a - b)
first element goes into a, second element goes into b. compared using passed function and sorted based on result of comparing the two elements.
second element goes into a, third element goes into b. compare. sort.
third element goes into a, fourth element goes into b. compare. sort.
etc.
if you dont want to mutate in place, you can .slice() beforehand into a new variable.

sort based on comparing object values.
books.sort((a,b) => {
a.rating - b.rating
})

### Reduce

Distill a bunch of stuff in an array down into one thing.

#### Reduce to get total

ex: Sum all the values, finding the maximum value in an array. many things into one value.
[1,2,3,5].reduce((accumulator,currentValue) => {
return accumulator + currentValue
})
accumulator starts at arr[0], currentValue starts at arr[1]
accumulator stores the accumulated total value as we go through the array.
1+2//3. 3 goes into the accumulator value.
3+3//6 accumulator + next value
6+5//11
reduce returns the total accumulated value of the whole array.

#### Reduce to get MAX

arr.reduce((max, currentVal) => {
if (currentVal > max) return currentVal
return max
})
the return goes into the first parameter slot for the subsequent run against the next element.

we can also use in Math.max(x,y)
arr.reduce((max, currentVal) => Math.max(max,currentVal))

reduce can take in a default accumulator value to start off with.
arr.reduce((x,y)=>{}, defaultValue)

#### Tallying using Reduce

const votes = ['y', 'y', 'n', 'y', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y', 'y', 'n', ]
{y: 5, n: 8}
const results = votes.reduce(callback, {})
const results = votes.reduce((tally, value), {
if (tally[value]){tally[value]++} else {tally[value]=1}
return tally
})

const results = votes.reduce((tally, val) => {
tally[val] = (tally[val] || 0) +1
return tally
})
first time through "tally[val] || 0" equals "undefined || 0" which equals 0.

books array to group by ratings floored.

books.reduce((sortedBooks, val) => {
const key = Math.floor(val.rating) //get current book's rating floored.
if (!sortedBooks[key]){ //if that category of stars doesnt exist, create it as []
sortedBooks[key] = []
}
sortedBooks[key].push(val) //put the whole currentbook in the appropriate key group.
return sortedBooks
}, {})
