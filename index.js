/*syntax:([parameters]) {
    return value;
}*/



// let x= function x() {
//     console.log("X function") // first class function
// }
// x()

// let x= () => {
//     console.log("X function") // arrow function
// }
// x()


// let x = () => console.log("X function")
// x()          // if arrow function has single statement no need of currly braces 






// function y(a) {
//     console.log(a+10)
// }
// y(10)


// let y=(a) => console.log(a+10)
// y(10) 


// let y= a => console.log(a+10) // if arrow function has single statement no need of parenthesis
// y(10)


// function z(a,b) {
//     console.log(a+b)
// }
// z(10,20)


// let z = (a,b) => console.log(a+b) // if arrow function has more than one parameter parenthesis is mandatory
// z(10,20)




// function a() {
//     return "Jvascript Awesome"
// }
// a()


// let a = () => {
//     return "Jvascript Awesome"  // if we are using return keyword curly braces is mandatory
// }
// console.log (a())


// let a = () => "Javascript Awesome" // implict return type  if you have a single statements and if you want to return a value
// console.log (a())           // if we have mores statements must need curly braces  and return keyword


// function b (a) {
//     return a+10
// }

// let b= (a) => {
//     return a+10
// }

// let b = a => a+10
// console.log(b(10))




// function c(x,y) {
//     return x+y
// }
// console.log(c(10,30))


// let sumOfTwoNumbers =(x,y) =>  x+y  // implict return type
// console.log(c(10,30))






// function isEven(num) {
//     if(num %2 == 0) {
//         return "Even Number"
//     }else {
//         return "odd number"
//     }
// }
// console.log(isEven(4))


// let isEven = num => {
//     if(num %2 == 0) {
//         return "Even Number"
//     }else {
//         return "odd number"
//     }
// }
// console.log(isEven(4))


// let isEven = num => {
//     return(num %2 == 0) ?"Even Number": "odd number"
// }
// console.log(isEven(4))


// let isEven = num => (num %2 == 0) ?"Even Number": "odd number"
// console.log(isEven(4)) // no need of curly braces




// function subtract(a,b) {
//     return a-b
// }

// let subtract=(a,b) => (a-b)


// function isPositive(x) {
//     return x>0
// }
// let isPositive= x => x>0  //boolean value comes true or false 



// function max(a,b) {
//     if(a>b) {
//         return a;
//     }
//     return b
// }


// let max=(a,b)=>(a>b) ? a:b





// function funOne() {
//     console.log("Hello")
// }
// demo(print)  // named

// funOne(function(){
//     console.log("Hello") // anonymous
// })


// funOne(()=>console.log("Hello")) // arrow



function sample(x,y,z) {
    x()
    y()
    z()
}
function print1() {
    console.log("X")
}
function print2() {
    console.log("Y")
}
function print3() {
    console.log("Z")
}
sample(print1,print2,print3)

sample(function (){console.log("X")},function () {console.log("Y")},function () {console.log("Z")})

sample (()=>console.log("X"),()=>console.log("Y"),()=>console.log("Z"))


 

function A(callback1,callback2) {
    console.log(callback1())
    console.log(callback2())
}
function B() {
    return "Javascript"
}
function C() {
    return "is Awesome"
}
A(B,C)

A(()=> "Javascript", ()=> "isAwesome")
A(()=> {return "Javascript"},()=> {return "is Awesome"})





function caller(mul,sum) {
    console.log(mul(10))
    console.log(sum(30))
}
function multiplyBy2(num) {
    return num*2
}
function sumOf10(num) {
    return num+10
}
caller(multiplyBy2, sumOf10)


caller(num=>num*2 ,num=> num+10)



function demoFunction(callback1,callback2,callback3) {
    console.log(callback1(10,30))
    console.log(callback2(30))
    console.log(callback3())
}
demoFunction((a,b)=> a+b, a=> a+40, ()=>"Hahahaha")


function demoFunction(callback1,callback2,callback3) {
    console.log(callback1(10,30))
    console.log(callback2(30))
    console.log(callback3())
}
function first(a,b) {
    return a+b
}
function second(a) {
    return a+40
}
function third() {
    return "Hahahaha"
}
(demoFunction(first,second,third))


// let demoFunction=(callback1,callback2,callback3) => {
//     console.log(callback1(10,30))
//     console.log(callback2(30))
//     console.log(callback3())
// }
// function firstOne(a,b) {
//     return a+b
// }
// function secondOne(a) {
//     return a+40
// }
// function thirdOne() {
//     return "Hahahaha"
// }
// (demoFunction(firstOne,secondOne,thirdOne))



//1.	Write an arrow function that takes two parameters, a and b, and returns their sum.
let sum=(a,b)=>console.log(a+b) 
sum(2,3)
  // or
let z = (a,b) => console.log(a+b) 
z(10,20)


//2.	Create an arrow function that takes a single parameter name and returns a greeting message: “Hello, {name}!”
let word=(nameOf)=>`Hello , ${nameOf}!`
console.log(word("Akshara"))
          // or

let greet = (name) => "Hello, " + name + "!";
console.log(greet("Akshara"))
        // or
let greeting = (name) => {
    return "Hello, " + name + "!";
};
console.log(greeting("Akshara"))







//3.	Write an arrow function that checks if a number is even and returns true if it is, or false otherwise.
let even= a =>(a % 2===0)
console.log(even(4))
console.log(even(5))



//4.	Write an arrow function that accepts a number and returns true if the number is greater than 10, or false otherwise
let greater= b=>(b>10)
console.log(greater(15))
console.log(greater(5))



//5.	Create an arrow function that takes two strings, compares their lengths, and returns the longer string. If both have the same length, return “Equal length.”


let longerLength=(str1,str2) => str1.length>str2.length ? str1 :str1.length < str2.length ? str2 : "Equal length"
console.log(longerLength("Akshara", "Shruthi"))
console.log(longerLength("javascript", "java"))     
 
              // or

let biggerLength = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1;
    } else if (str1.length < str2.length) {
        return str2;
    } else {
        return "Equal length.";
    }
};
console.log(biggerLength("Akshara", "Shruthi"))
console.log(biggerLength("javascript", "java"))     
 


