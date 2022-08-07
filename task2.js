//1) Problem:

// GUVI: Zen Class — Part 2 : Find the culprits and nail them — debugging javascript loops

// Write a code to print the numbers in the array

//Output: 1234567891011

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
// for (var i = 1; i < 11; i--) {
//var i initailised with 0 & increament changed ++ increment operator

for (var i = 0; i <11; i++) {
    new_string += numsArr[i];
}
console.log(new_string);

//2) Problem:

//Write a code to print the numbers in the array

Output: 1,2,3,4,5,6,7,8,9,10,11

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var new_string = "";
 
// for (var i = 1; i < 11; i++) {
//var i initailised with 0 & increament changed ++ increment operator
//  new_string += numsArr[i] + ",";
//include the if condition followed by loop

for (var i = 0; i < 11; i++) {
    if(i===numsArr.length-1)  {
      new_string += numsArr[i];
    }else{
      new_string += numsArr[i] + ",";
      }
  }
console.log(new_string);

//3) Problem:

// Write a code to print from last to first with spaces (Make sure there is no space after the last element 1)

//Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

var new_string = "";

// for (var i = 11; i > 0; i-) {
//var i initailised with array.length-1 & decreament changed -- decreament operator
//  new_string += numsArr[i] + ",";
//include the if condition followed by loop
//  new_string += numsArr[i] + " ";
// }
for (var i = len; i>=0; i--) {
    if(i===0)  {
      new_string += numsArr[i];
    }else{
      new_string += numsArr[i] + " ";
   }
}
console.log(new_string);


//4) Write a code to replace the array value — If the number is even, replace it with ‘even’.

//Output:[ 1, “even”, 3, “even”, 5, “even”, 7, “even”, 9, “even”, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(numsArr[i] %2 == 0 )
 {
//update the even number as String "Even"
//  numsArr[i] = odd
numsArr[i] = "even";
 }
}
console.log(numsArr);;

//5) Problem

//Write a code to replace the array value — If the index is even, replace it with ‘even’.

//Output: [ “even”, 2, “even”, 4, “even”, 6, “even”, 8, “even”, 10, … ]

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (var i = 0; i <=10; i++) {
 if(i %2 == 0 )
 {
numsArr[i] = "even";
//  numsArr[i] = even;
 }
}
console.log(numsArr);

// 6) Problem

//Write a code to add all the numbers in the array

Output: 66

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
for (var i = 0; i <=10; i++) {
 //var sum;
 sum += numsArr[i];
}
console.log(sum);

// 7) Problem

//Write a code to add the even numbers only
Output: 30

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=0;
//for (var i = 0; i <=10; i++) {
for(var i=0;i<=10;i++)  {
    //for if clause braces are addded and i condition change to i<=10;
    if(numsArr[i]%2==0) {    // semicolon has removed
 sum += numsArr[i];
}
}
console.log(sum);;

// 8) Problem

//Write a code to add the even numbers and subract the odd numbers
Output: 94

var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var sum=100;
for (var i = 0; i <=10; i++) {
 if(numsArr[i]%2!=0) // semicolon has removed
 {
//if odd subtarct so change to sum -= numsArr[i] vice versa add for even
sum -= numsArr[i]
 //sum += numsArr[i]
 }else
 {
sum += numsArr[i]
}
}
console.log(sum);

//9) Problem

// Write a code to print inner arrays
// Output:

// Array(5) [ 1, 2, 3, 4, 5 ]
// Array(6) [ 6, 7, 8, 9, 10, 11 ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];  /// elements in array should be separted by ","
for (var i = 0; i < numsArr.length; i++); {  // semi Colon ";" removed
 console.log( numsArr[i])
}

//10) Problem

// /Write a code to print elements in the inner arrays
//Output: 1234567891011

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all="";  // declare a Str_all with empty String""
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;i++ ) // increment the j++ value inside a inner loop
     str_all +=inner_array[j]
}
console.log(str_all);

//11) Problem

//Write a code to replace the array value — If the index is even, replace it with ‘even’.

//Output: [ [“even”, 2, “even”, 4, “even”], [6, “even”, 8, “even”, 10, …] ]

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=0; //str_all variable declaration is not necessary
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ) // increment the j++ value inside a inner loop
      if(j%2 === 0 ) //chcek only the index is even
      {
         numsArr[i][j] = "even";   // update the value even inside a double quotes "even" & numsArr is matrix so for update use both j and j values
       }
}
console.log(numsArr);

//12) Problem

// Write a code to print elements in the inner arrays in reverse
// Output: 11 10 9 8 7 6 5 4 3 2 1

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var str_all=[];  /// declare a variable with a empty array
for (var i =numsArr.length-1 ; i >=0 ; i--) {  //print in reverse so shift loop to reverse and condition also upadted
 var inner_array = numsArr[i];
 for(var j = inner_array.length-1; j >=0 ;j--)  { // braces & condition also upadted
     str_all.push(inner_array[j]);  // push method used for add the everey elment to empty list
}
}
console.log(str_all.join(" "));  // .join method used to change as a string with a params(" ");

//13) Problem

// Write a code to add elements in the inner arrays based on odd or even values
// Output:
// 36
// 30

var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
var sum_odd=0;
var sum_even=0;
for (var i = 0; i < numsArr.length; i++) {
 var inner_array = numsArr[i];
 for(var j = 0 ; j < inner_array.length;j++ ){
 if(inner_array[j]%2!=0)  // check condition inside a inner array and "j" holds the index
 {
 sum_odd += inner_array[j];//inner array and "j" holds the index
 }
 else
 {
 sum_even += inner_array[j];//inner array and "j" holds the index
 }
}
}
console.log(sum_odd);
console.log(sum_even);
