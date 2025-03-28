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
