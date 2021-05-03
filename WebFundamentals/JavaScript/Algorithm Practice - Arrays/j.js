/*Challenge 1: Print Values and Sum

Print each array value and the sum so far
The expected output will be: */

var testArr = [6,3,5,1,2,4];
var sum=0;

for(var i = 0 ; i < testArr.length ; i++){
    sum += testArr[i];
    console.log("Num:\t"+testArr[i]+"\tSum\t"+sum);
}

/*Challenge 2: Value * Position

Multiply each value in the array by its array position
The expected output will be:*/


var newArr = [];
for(var i = 0 ; i < testArr.length ; i++){
    newArr.push(testArr[i]*i);
}

console.log(newArr);