console.log("The faulty calculator")

/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)

let a =prompt("Enter first number")
let b = prompt("enter the opration")
let c = prompt("enetr second number")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",




}
if(random > 0.1){
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the alert is ${eval(`${a} ${b} ${c}`)}`)
}
else{
    c= obj[c]
     alert(`the alert is ${eval(`${a} ${b} ${c}`)}`)
}