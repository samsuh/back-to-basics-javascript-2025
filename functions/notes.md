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
