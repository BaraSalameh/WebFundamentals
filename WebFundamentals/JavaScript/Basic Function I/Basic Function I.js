//1
function a(){
    return 35;
}
console.logcopy(a()); // prints the returned value  '35' to the function a

//2
function a(){
    return 4;
}
console.log(a()+a()); // prints 8 -> 4+4


//3
function a(b){
    return b;
}
console.log(a(2)+a(4)); // prints 6


//4
function a(b){
    console.log(b); // prints 3
    return b*3; // returns 9
}
console.log(a(3)); // prints 9


//5
function a(b){
    return b*4; // returns 10*4 = 40
    console.log(b); // not compiled beacause it's after a return statement
 }
 console.log(a(10));  // prints 40


 //6
 function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15)); //prints 4


//7
function a(b,c){
    return b*c;
}
console.log(10,3); // prints 10 3 
console.log( a(3,10) ); // prints 30


//8
function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3); // prints 3
console.log(4); // prints 4


//9
function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i); // prints 2 -> 5 -> 8 -> 11
    }
}
a();


//10
function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10); 
console.log(a(0,10)); 
/*
prints 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9  
       0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 0
*/


//11
function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
// prints nothing without calling the function



//12
function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}
// prints nothing without calling the function


//12
var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z); // prints 10


//13
var z = 10;
function a(){
    var z = 15;
    console.log(z); // prints 15
}
a();
console.log(z); // prints 10


//14
var z = 10;
function a(){
    var z = 15;
    console.log(z); // prints 15
    return z;
}
z = a();
console.log(z); // prints 15



 
    

