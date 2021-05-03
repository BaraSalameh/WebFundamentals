//Predict 1
function greeting(){
    return "Hello";
    console.log("World"); //This line dies because it come's after a return statement.
}

var word = greeting(); // This line store's the result of the function which is "Hello".
console.log(word); // This line prints The value of the variable word which is Hello;

//predict 2
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5); /*
                        This line store's the output of the function variable sum which is  8
                        and affects the function to print
                        Summing Numbers!
                        num1 is: 3
                        num2 is: 5
                        */

var result2 = add(4,7); /*This line store's the output of the function variable sum which is  11
                        and affects the function to print
                        Summing Numbers!
                        num1 is: 4
                        num2 is: 7
                        */

console.log(result1);   //This line prints the value of the result1 variable which is 8.
console.log(result2);   //This line prints the value of the result2 variable which is 11.

                        /*
                        The Out put will be like this ->
                        Summing Numbers!
                        num1 is: 3
                        num2 is: 5
                        Summing Numbers!
                        num1 is: 4
                        num2 is: 7
                        8
                        11
                        */

//Predict 3
function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
//This block of code will not print anything beacuse it hasn't been called.
/*
if we assumed we sent the number 5 it will print this lines ->
0
1
2
3
4
*/
