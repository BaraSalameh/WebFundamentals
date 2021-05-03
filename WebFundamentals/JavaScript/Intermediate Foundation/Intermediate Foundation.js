//Sigma
function sigma(num) {
    var sum = 0;
    for (var i = num; i > 0; i--) {
      sum = sum + i;
    }
    console.log(sum);
    return sum;
  }
  sigma(3);
  
  //Factorial
  function factorial(num) {
    var fact = 1;
    for (var i = num; i > 0; i--) {
      fact = fact * i;
    }
    console.log(fact);
    return fact;
  }
  factorial(5);
  
  //fiboancci
  function fibonacci(num) {
    var arr = [0, 1];
    for (var i = 2; i <= num; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  
    return arr[arr.length - 1];
  }
  
  var x = fibonacci(6);
  console.log(x);
  
  //Array: Second-to-Last
  function secondToLast(arr) {
    if (arr.length < 2) {
      return null;
    } else {
      return arr[arr.length - 2];
    }
  }
  
  var newArr = [42, true, 4, "Liam", 7];
  console.log(secondToLast(newArr));
  
  //NthToLast
  function NthToLast(arr, num) {
    if (arr.length < num) {
      return null;
    } else return arr[arr.length - num];
  }
  
  var arr = [2, 4, 54, 268, 9, 6];
  console.log(NthToLast(arr, 3));
  
  //Array: Second-Largest
  function max(arr) {
    var max = arr[0];
  
    for (var i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
  
    return max;
  }
  
  function secondMax(arr) {
    var largestMax = max(arr);
    var sMax = 0;
    for (var i = 0; i < arr.length; i++) {
      if (sMax < arr[i]) {
        if (arr[i] < largestMax) {
          sMax = arr[i];
        }
      }
    }
    return sMax;
  }
  
  var arr = [2, 5, 1, 4, 7, 8, 5, 9];
  console.log(secondMax(arr));
  
  //Double Trouble
  function double(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
      newArr.push(arr[i]);
    }
  
    return newArr;
  }
  
  var arr = [4, 2.14, "ulissess", "hello"];
  console.log(double(arr));
  