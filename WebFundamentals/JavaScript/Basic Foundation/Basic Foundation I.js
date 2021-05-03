//Get 1 to 255
function oneToTFF(){
    var newArr = [];
    for(var i = 1 ; i < 256 ; i++){
        newArr.push(i);
    }
    return newArr
}

console.log(oneToTFF());


//Get even 1000
function getEven(){
    var sum = 0;
    for(var i = 2 ; i < 1001 ; i+=2){
        sum+=i;
    }
    return sum;
}
console.log(getEven());


//Sum odd 5000
function getOdd(){
    var sum = 0;
    for(var i = 1 ; i < 5000 ; i+=2){
        sum += i;
    }
    return sum;
}
console.log(getOdd());


//Iterate an array
function sumArray(arr){
    var sum = 0;
    for(var i = 0 ; i < arr.length ; i++){
        sum += arr[i];
    }
    return sum;
}
var arr = [1,5,8,9];
console.log(sumArray(arr));


//Find max
function maximum(arr){
    var max = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
var arr = [1,5,3,-2,9];
console.log(maximum(arr));


//Find average
function average(arr){
    var sum = 0;
    var avg;
    for(var i = 0 ; i < arr.length ; i++){
        sum+= arr[i];
    }
    avg = sum/arr.length;
    return avg;
}
var arr = [1,4,4];
console.log(average(arr));


//Array odd
function oddNumbers(){
    var newArr = [];
    for(var i = 1 ; i < 50 ; i+=2){
        newArr.push(i);
    }
    return newArr
}

console.log(oddNumbers());


//Greater than Y 
function greaterThanY(arr,y){
    var counter = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > y){
            counter++;
        }
    }
    return counter;
}
var arr = [1,5,3,7,9,2,7];
var y = 3;
console.log(arr,y);


//Squares
function square(arr){
    for(var i = 0 ; i < arr.length ; i++){
        arr[i]*=arr[i];
    }
    return arr;
}
var arr = [1,3,6];
console.log(square(arr));


//Negatives
function removeNegative(arr){
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}
var arr = [-1,2,-3];
console.log(removeNegative(arr));


//Max/Min/Avg
function compintation(arr){
    var max = arr[0];
    var min = arr[0];
    var newArr = [];
    var sum = 0;
    var avg;
    for(var i = 0 ; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
        sum+= arr[i];   
    }
    avg = sum/arr.length;
    newArr.push(max);
    newArr.push(min);
    newArr.push(avg);
    return newArr;
}
var arr = [1,3,5];
console.log(compintation(arr));


//Swap Values
function swaap(arr){
    var flag = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = flag;
    return arr;
}  
var arr = [1,2,3];
console.log(swaap(arr));


//Number to String
function dojoFun(arr){
    var word = "Dojo";
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] < 0){
            arr[i] = word;
        }
    }
    return arr;
}
var arr = [ -5,2,1];
console.log(dojoFun(arr));