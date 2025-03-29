# Primitive Types

## Javascript has the following primitive types

1. Number
2. String
3. Boolean
4. Null
5. Undefined
   Symbol and BigInt also exist, but are much less commonly used.

### Number

Javascript does not have different types of numbers like float, decimal, etc. "Number" contains positive and negative numbers, whole integers, and decimals.

#### Mathematical operations

Addition
3+4
Subtraction
4-2
Multiplication
2\*2
Division
8/4
Exponentiation
4\*\*4
Modulo
20%5

#### PEMDAS

(3-9) \* 2
3-9 first then outside parentheses

NaN "Not-a-number" is actually a Number in javascript
0/0
NaN

NaN + 5 = NaN

1/0
Infinity in javascript

-1/0
negative infinity

0
-0
zero and negative-zero are values

Quiz
1.5 + 1.5 * 2
math priority; 1.5*2 first = 3 + 1.5 = 4.5

(10 % 6) ** 2
parentheses first. 10 mod 6 is 4.
4 ** 2 = 16

200 + 0/0
0/0 is Nan so any math involving that will result in NaN.

## Variables

"let"
"const"
let someName = value;

let age = 72;
age

let hens = 4;
let roosters = 2;
hens + roosters = 6

hens = hens-1 = 3

There are lexically bound words that you cant use, like "let" or "document".

"const" is immutable. you cannot reassign the value later. cannot increment or anything.

## Unary Operators

let counter = 0;
counter++ increments by 1
counter-- decrements by 1

+= increments and sets together
-= decrements
let bonusMultiplier = 3;
score \*= bonusMultiplier;

let eggCount = 42;
eggCount +2; // does not set eggCount variable, just a temporary math operation eggCount is still 42.

const rating = 7.5;
rating = 8;
cannot reassign, so 7.5 will remain unchanged, with an error occurring from the reassignment attempt.

let wind_speed = 76;
wind_speed += 5; //81
wind_speed--; //80
note, should be camelCased, not snake_cased

### Booleans

True or False

Variables can change types.
let something = 12;
something = 'potato' //valid reassignment

### Strings

Strings are text values wrapped in quotes. Double or single is fine, but cannot mix.

"dsnjagjds1412safsadg"

typeof opertor tells you the type of whatever is after it.

typeof 87 is "number"

string + string concatenates the strings.

mixing types is weird.
"hi" + 1
will turn the 1 into a string and concat.

#### String index

Every character in a string has an index from 0.

you can work with the indexes to manipulate the string.
access the index using []

let mySong = "SongName"
mySong[0] would be "S"

Strings have a .length function
"hello".length is 5

let gibberish = "sdgjabsdgasdkugb27bgwebgw92b208haw;og"
gibberish[gibberish.length-1] would be "g"

strings are immutable, and you cannot overwrite an index. you must create a new string with the change.

#### String methods

- search within a string
- replace parts of a string
- change case

Two groups of string methods, ones that run with and without arguments.

##### Without arguments: thing.method()

let msg = "say something"
msg.toUpperCase() would be "SAY SOMETHING"
note that this does not overwrite the original msg variable, but would be creating a new string, that we can put in a new variable or overwrite the old variable with.
let msg2 = msg.toUpperCase()

trim will remove leading and trailing spaces inside the string
let greeting = ' saying something '
let greeting = greeting.trim() would make it just "saying something"

can chain methods like
let color = ' purple '
color.trim().toUpperCase() would be "PURPLE"

##### With arguments: thing.method(arguments)

indexOf returns the starting index of the argument (first instance if theres multiple)

let tvShow = 'catdog'
tvShow.indexOf('cat') would return 0
tvShow.indexOf('dog') would return 3
tvShow.indexOf('doesntexist') would return -1 meaning it was not found

slice takes slices of the string and gives you a piece of it
"baseball".slice(4) would return from the 4th index "ball"
this does not overwrite the original.

slice can take one or two arguments; (startingIndex, endingIndex)
let str = "abcdefghijklmnoprstuvwxyz"
str.slice(2,5) gives "cde"
note that it does not include the endingIndex character.
a0b1 "c2d3e4" f5g6

"$50.61".slice(1) would cut off the 0th index and return from 1 to the end index

replace takes two arguments, what to replace and what to replace it with.
"baseball is great".replace('great', 'ok') returns "baseball is ok"

replace only replaces the first occurence.
'ha ha ha'.replace('ha', 'hee') would give 'hee ha ha'

if our target string does not exist, it will do no replacing and just give back the original.

note that indexOf returns -1 if nothing is found, not returning undefined or null.

##### string escapes

\n newline
\' single quote
\" double quote
\\ backslash
some lesser used ones:
\t tab will add a tab

##### string template literals

Can add embedded expressions, which will be evaluated and then return the result
let variable = 'something'
`I added ${variable}`

interpolate data in the template literal
`comment created ${elapsedTime} minutes ago by ${username}`

##### null vs undefined

both are nothingness.
null "intentional absence of any value"
null = "there is a value here, but its value is nothing."

undefined "there was no value set to it"

##### Math object

Math.PI
Math.round(4.9) is 5
Math.floor(3.99) is 3
Math.pow(2,5) takes the first argument and raises it to the secondargument power. 2\*\*5
Math.random() generates a random number between 0 and 1

Using Math.random()
Math.floor(Math.random() times 10) random number from 0 to 9.
add 1 to go from 1 to 10.
`Math.floor(Math.random() * 10)+1`

typeof operator determines type of a given value
typeof 99 "number"
typeof true "boolean"
typeof "mystery" = "string"

quirk: typeof null is an object.

parseInt returns Int as a whole number
parseFloat returns the number including the decimals

parseInt("21")+1 = 22
parseFloat("33.5") = 33.5

parseInt("$99") = NaN because it doesnt know what to do with the non-number character
parseInt("99cents") = 99 because the numbers are at the front
you could potentially use this to pull off just the number and do math with it.

# Control Flow

## Comparisons

< > <= >=
Compare numbers
String comparisons compare the unicode values.

= assignment
== equality. types dont matter. 0 == false is true. null == undefined is true.
=== strict equality. wont coerce to make them same value. more specific.

!= nonequality
!== strict nonequality

## Conditional Statements

if, else if, else

if true or false, run code inside {}
else ifs must come after an if. within the group of if/elseifs, only one of these can be true.
you can use as many elseifs as you want
else is the catch-all that runs if nothing was true before it. else must have an if before it.

let password;
if (password.length > 6){
if (password.indexOf(' ') === -1){
console.log("Password OK")
} else {
console.log("Password length OK but cannot contain spaces")
}
} else {
console.log("Invalid Password")
}

Truthy Falsy
All values have an inherent truthiness and falsiness
Everything is true except:

- false, 0, "" (empty string), null, undefined, NaN

Logical Operators

&& || !

a && b is only true if both a and b are true
a || b is true if either a is true or b is true
!true = false since ! negates

if (password.length >= 6 && password.indexOf(' ') === -1){
console.log("VALID")
} else {
console.log("INVALID")
}

&&
using && to check if a number is in a range.
if (num > 1 && num <= 10){
console.log("Number is valid, between 1 and 10")
}

||
true || false is true
true || true is also true
let age = 78
if (age < 6 || age >= 65){
console.log("You get in for free!")
} else {
console.log("You must pay")
}

! NOT Operator

Operator precedence
let x = 7;
x == 7 || x === 3 && x > 10;
&& runs first, so it runs like:
(x === 3 && x > 10) which is false, then OR it with x == 7 which is true. so true.
to run it the other way, we have to put parentheses around the OR statement.
! comes before &&

## Switch Statement

let day = 3;
if (day === 1){
}
switch(day){
case 1:
console.log("Monday");
break;
case 2:
console.log("Tuesday");
break;
case 3:
console.log("Wednesday");
break;
}

let emoji = 'sad face';
switch(emoji){
case 'sad face':
case 'happy face':
console.log('yellow')'
break;
}
It runs the code after the true statement until it hits a break.
You can stack multiple cases into one code block.

## Ternary Operator

condition ? expIfTrue : expIfFalse

let num = 7;
num === 7 ? console.log('lucky') : console.log('bad!')
