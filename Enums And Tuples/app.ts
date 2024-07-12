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

