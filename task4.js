// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript
//1) Problem
// Fix the code to get the largest of three.

// Code:

aa = (f,s,t) => {
//  let f,s,t; variable redecalaration is not necessary as we given variable as parameter
 console.log(f,s,t);
 if(f>s && f>t){ // proper indentation and semicolon given for following the syntex;
    console.log(f);}
 else if(s>f && s>t){
    console.log(s);}
 else{
    console.log(t);}
}
aa(1,2,3);
// — — — — — — — — — — — — — — — — — — — — — — — — —
//2) Problem
// Fix the code to Sum of the digits present in the number

// Code:

let n = 123;
console.log(add(n));
function add(n)
{
let temp = n.toString().split(""); // introduce a array temp and do a type casting a number to string and then to array
let sum = 0;  // begins with sum =0
for(var i=0;i<n.length;i++){
    sum+=parseInt(temp[i]); // again type casting a  string to number
 }
 return sum;
}
// — — — — — — — — — — — — — — — — — — — — — — — — —
//3) Problem
// Fix the code to Sum of all numbers using IIFE function

// Code:

const arr = [9,8,5,6,4,3,2,1];
(function(arr) {
 let sum = 0;
 for (var i = 0; i <= arr.length; i++)  { // semicolon removed
 sum += arr[i];
 }
 console.log(sum);
 //return sum;  // we console.log the same so return is not necessary
})(arr);// aruguments must be passed

// — — — — — — — — — — — — — — — — — — — — — — — — —
//4) Problem
// Fix the code to gen Title caps.

// Code:

var arro = ["guvi", "geek", "zen", "fullstack"];
var ano = function(arro) {
 for (var i = 0; i <= arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arro);// input aruguments must be passed
// — — — — — — — — — — — — — — — — — — — — — — — — —
//5) Problem
// Fix the code to return the Prime numbers

// Code:

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<num;i++){ // check condition upto num not including the number
 if(num%i!==0)
 {
isPrime = false;
return isPrime
}
}
return isPrime;
return num===1;
});
console.log(myPrime);
// — — — — — — — — — — — — — — — — — — — — — — — — —
//6) Problem
// Fix the code to sum the number in that array

// Code:

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sumofArray = (a, b) => a + b;
const sum = num.reduce(sumofArray);
console.log(sum);
// — — — — — — — — — — — — — — — — — — — — — — — — —

//7) Fix the code to rotate an array by k times and return rotated array using IIFE function

// Code:

var array = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = array.length % k;
(function() {
 let arr = [];
 out = arr.slice(k + 1, arr.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = arr[i];
 count += 1;
 }
 console.log(out);})();
// — — — — — — — — — — — — — — — — — — — — — — — — —

//8) Fix the code to gen Title caps.

// Code:

var array1 = ["guvi", "geek", "zen", "fullstack"];
(function(arr) { //param given
 for (var i = 0; i < arr.length; i++) {  // condition changed to "<="
 console.log(arr[i][0].toUpperCase() + arr[i].substr(1)); //changed arr[0][i];
 }
})(array1); //array1 passed
// — — — — — — — — — — — — — — — — — — — — — — — — —

//9) print all odd numbers in an array using IIFE function

// Code:

var array2 = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function(arr) {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {  //!not equal zero
 console.log(arr[i]);
 }}
})(array2); //array2 passed
// — — — — — — — — — — — — — — — — — — — — — — — — —

//10)  Fix the code to reverse.

// Code:

(function(str){
 let str1 = str.split("").reverse().join("");  //decalre a str1 with let
 console.log(str1); 
})("abcd")
// — — — — — — — — — — — — — — — — — — — — — — — — —

//11) Fix the code to remove duplicates.

// Code:

var res = function(arr){
 let newArr = [];  //decalre a newArr with let before the loop starts
 for(var i=0; i < arr.length; i++){
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
 } }
 console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])
// — — — — — — — — — — — — — — — — — — — — — — — — —

//12) Fix the code to give the below output:

// Expected Output:

// [
// {firstName: “Vasanth”, lastName: “Raja”, age: 24, role: “JSWizard”},
// {firstName: “Sri”, lastName: “Devi”, age: 28, role: “Coder”}
// ]

// Code:

var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
var final=[]
while(array.length!=0)
{
 var outer_remove = array.shift();
 let new_object ={};//Empty new objecet declare
 while(outer_remove.length!=0)
 {
 var inner_remove = outer_remove.shift()
 var key = inner_remove[0]
 var value =inner_remove[1]
 new_object[key]=value
 }
 final.push(new_object) //push afer each inner loop complete
}
console.log(final);  //console log to see the desired output
// — — — — — — — — — — — — — — — — — — — — — — — — —

//13) Fix the code to give the below output:

// Sum of odd numbers in an array

// Code:


var as=[12,34,5,6,2,56,6,2,1];
var s=as.reduce(function(a,c){
 if(c%2!=0)
 {
 return a+c;
 }
 return a;},0);  //given the default accumlator value as zero in reduce
console.log(s);
// — — — — — — — — — — — — — — — — — — — — — — — — —

//14) Fix the code to give the below output:

// Swap the odd and even digits

// Code:

let aa = data=>{   //declaration must be done let or const
 var a=data;
 var l=""; //temporary varibale must be declared before the loop starts
for(i=0;i<a.length-1;i+=2){
 var s=a[i+1]
 var b=a[i]
 l+=s
 l+=b
//  i=i+1
}
if((a.length%2)!=0){
 l+=a[a.length-1]
}
console.log(l);
}
aa("1234");    //output = 2143;
aa("12345");  //output = 21435;