/*  TUPLES */


// A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.


let basicColor:string[];
// normal array

let basicColors:[string,string,string];
basicColors=["red","green","blue"];

let mixArry:(string|number|boolean)[];
// normal array

let mixArry2:readonly [string,number,boolean]
// readonly defines we cannot make any changes in array we can only read it
mixArry2=["mughees",16,true];



/*  ENUMS */

// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.





enum OrderStatus{
    pending,
    confirmed,
    shipped,
    delieved
}
console.log(OrderStatus.confirmed);
//if we doesnot defines values it gives index like number 



enum Province{
    sindh="Sindh",
    punjab="Punjab",
    balochistan="Balochistan",
    KPK="KPK"
}
console.log(Province.sindh);

// difference between object and enum is : and = in values


enum HTTPCode {
    success = 200, 
    badReqest = 400,
    myMistake = 500
}

/*use with key*/
console.log(HTTPCode.myMistake);

/*use with value*/
console.log(HTTPCode[200]);





enum MathConst {
    PI = 3.14,
    ranNum = Math.random(),
    sum = 5 + 9
}

console.log(MathConst.PI);
console.log(MathConst.sum);

console.log(MathConst.ranNum);




/* CASTING   */
// IN CASTING WE CAN OVERRIDE A TYPE
// mtlb force khar ky apni passand ki type dety hein 
//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.

let name1=prompt("what is your name?")
// iss ma undefined bhi aa sakhta ya null agr user cancel khar dy toh
let username:string= name1 as string

let username2:string=<string>name1

// console.log(typeof(name1));
console.log(name1);








































// hello world
let start:string="Hello world";
console.log(start);


/*   IMPLICT (INFER) */

let user="mughees";
// decided type automatically in which you written first

// user=2
// gives error

let num=2
// num="mughees"
// error

/*   EXPLICT  */

let user2:string="mutahir";

let num2:number=16;

let isOff:boolean=true;

//you define type 

function greet(userName:string):void{

    console.log(`Welcome ${userName}`);
    
}

greet(user2)


function makeGreeting(userName:string,msg:string):string{

    return `${msg} ${userName}`
}

let greetingMsg=makeGreeting("Mughees","How are you");
console.log(greetingMsg);

//modules
//Instructions
// 1. add type="module" in script tag
// 2. modify tsconfig.json and change target and module properties to ESNext
// 3. run with live server



// import Sum from "./utils/sum.js";
// // import default item we you declare as default must wirtten without {}


// import { userName,age,isStudent } from "./utils/sum.js";
// // import only which you written


// import * as info from "./utils/sum.js"
// // import all things form sum.js file

// import {car as myCar} from "./utils/sum.js"
// // it changes name from car to myCar



// let car={
//     name:"HAVAL",
//     module:"2024"
// }

// console.log(car,myCar);

// let count=Sum(90,1);
// console.log(count);


// console.log(userName,age,isStudent);

// console.log(info);




//utils
// export default function Sum(number1:number,number2:number):number{
//     return number1+number2
// }

// export let userName:string="mughees";


// export let age:number=18;


// export let isStudent:boolean=true;


// export let car={
//     name:"Fortuner",
//     model:"2022"
}


