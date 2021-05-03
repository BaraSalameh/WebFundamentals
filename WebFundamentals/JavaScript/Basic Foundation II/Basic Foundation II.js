//Biggie Size
function biggy(arr){
    var word = "big";
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            arr[i] = word;
        }
    }
    return arr;
}
var arr = [-1,2,4];
console.log(biggy(arr));


//Print Low, Return High
function lowHight(arr){
    var high = arr[0];
    var low = arr[0];
    for(var i = 1 ; i < arr.length ; i++){
        if(high < arr[i]){
            high = arr[i];
        }
        if(low > arr[i]){
            low = arr[i];
        }
    }
    console.log("Low value\t"+low);
    return high;
}
var arr = [1,2,3];
console.log(lowHight(arr));


//Print One, Return Another
function printReturn(arr){
    console.log(arr[arr.length-2]);
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] % 2 != 0){
            return arr[i];
        }
    }
}
var arr = [4,3,4,6];
console.log(printReturn(arr));


//Double Vision
function doubleNewArr(arr){
    var newArr = [];
    for(var i = 0 ; i < arr.length ; i++){
        newArr.push(arr[i]*2);
    }
    return newArr;
}
var arr = [1,2,3];
console.log(doubleNewArr(arr));


//Count Positives
function countPos(arr){
    var counter = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            counter++;
        }
    }
    arr[arr.length-1] = counter;
    return arr;
}
var arr = [ -2,-1,4];
console.log(countPos(arr));


//Evens and Odds
function evenAndOdd(arr){
    var evenRowCounter = 0;
    var oddRowCounter = 0;
    for(var i = 0 ; i < arr.length-2 ; i++){
        if(arr[i] %2 == 0 && arr[i+1]%2 == 0 && arr[i+2]%2 == 0){
            console.log("Even more so!");
        }
        if(arr[i] %2 != 0 && arr[i+1]%2 != 0 && arr[i+2]%2 != 0){
            console.log("That's odd!");
        }

    }

}
var arr = [1,2,4,6,5,7,3];
console.log(evenAndOdd(arr));


//Increment the Seconds
function incrementTheSeconds(arr){
    for(var i = 0 ; i < arr.length ; i++){
        if(i%2 != 0){
            arr[i] = arr[i]+1;
            console.log(arr[i]);
        }else{
            console.log(arr[i]);
        }
    }
    return arr;
}
var arr = [1,2,3,4,5];
console.log(incrementTheSeconds(arr));


//Previous Lengths
function PreviousLength(arr){
    var newArr = [];
    for(var i = 0 ; i < arr.length-1 ; i++){
        newArr.push(arr[i].length);
    }
    for(var i = 1 ; i < arr.length ; i++){
        arr[i] = newArr[i-1];
    }
    return arr;
}
var arr = ["hello","dojo","awesome"];
console.log(PreviousLength(arr));


//Add Seven
function addSeven(arr){
    var newArr = [];
    for(var i = 0 ; i < arr.length ; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
var arr = [1,2,3];
console.log(addSeven(arr));


//Reverse Array
function reverseSameArray(arr){
    var flag;
    for(var i = 0,j = arr.length-1; i<j ; i++,j--){
        flag = arr[j];
        arr[j] = arr[i];
        arr[i] = flag;
    }
    return arr;
}
var arr = [1,2,3,4,5];
console.log(reverseSameArray(arr));


//Outlook: Negative
function negativeArray(arr){
    var newArr = [];
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] > 0){
            newArr.push(arr[i]*-1);
        }else{
            newArr.push(arr[i]);
        }

    }
    return newArr;
}
var arr = [-1,2,0,-3];
console.log(negativeArray(arr));


//Always Hungry
function hungry(arr){
    var counter = 0;
    for(var i = 0 ; i < arr.length ; i++){
        if(arr[i] == 'food'){
            console.log("Yummy");
            counter++;
        }
    }
    if(counter == 0){
        console.log("I'm hungry!");
    }
}
var arr = ["hungry","food"];
console.log(hungry(arr));


//Swap Toward the Center
function swapTowardCenter(arr){
    var flag;
    for(var i = 0, j = arr.length-1 ; i < 3 ; i+=2,j-=2){
        flag = arr[j];
        arr[j] = arr[i];
        arr[i] = flag;
    }
    console.log(arr);
}
var arr = [1,2,3,4,5,6];
swapTowardCenter(arr);


//Scale the Array
function scaledArray(arr,num){
    for(var i = 0 ; i < arr.length ; i++){
        arr[i]*=num;
    }
    return arr;
}
var arr = [1,2,3];
console.log(scaledArray(arr,3));