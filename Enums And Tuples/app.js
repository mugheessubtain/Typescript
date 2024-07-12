"use strict";
/*  TUPLES */
// A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.
let basicColor;
// normal array
let basicColors;
basicColors = ["red", "green", "blue"];
let mixArry;
// normal array
let mixArry2;
// readonly defines we cannot make any changes in array we can only read it
mixArry2 = ["mughees", 16, true];
/*  ENUMS */
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["pending"] = 0] = "pending";
    OrderStatus[OrderStatus["confirmed"] = 1] = "confirmed";
    OrderStatus[OrderStatus["shipped"] = 2] = "shipped";
    OrderStatus[OrderStatus["delieved"] = 3] = "delieved";
})(OrderStatus || (OrderStatus = {}));
console.log(OrderStatus.confirmed);
//if we doesnot defines values it gives index like number 
var Province;
(function (Province) {
    Province["sindh"] = "Sindh";
    Province["punjab"] = "Punjab";
    Province["balochistan"] = "Balochistan";
    Province["KPK"] = "KPK";
})(Province || (Province = {}));
console.log(Province.sindh);
// difference between object and enum is : and = in values
var HTTPCode;
(function (HTTPCode) {
    HTTPCode[HTTPCode["success"] = 200] = "success";
    HTTPCode[HTTPCode["badReqest"] = 400] = "badReqest";
    HTTPCode[HTTPCode["myMistake"] = 500] = "myMistake";
})(HTTPCode || (HTTPCode = {}));
/*use with key*/
console.log(HTTPCode.myMistake);
/*use with value*/
console.log(HTTPCode[200]);
var MathConst;
(function (MathConst) {
    MathConst[MathConst["PI"] = 3.14] = "PI";
    MathConst[MathConst["ranNum"] = Math.random()] = "ranNum";
    MathConst[MathConst["sum"] = 14] = "sum";
})(MathConst || (MathConst = {}));
console.log(MathConst.PI);
console.log(MathConst.sum);
console.log(MathConst.ranNum);
/* CASTING   */
// IN CASTING WE CAN OVERRIDE A TYPE
// mtlb force khar ky apni passand ki type dety hein 
//There are times when working with types where it's necessary to override the type of a variable, such as when incorrect types are provided by a library.
let name1 = prompt("what is your name?");
// iss ma undefined bhi aa sakhta ya null agr user cancel khar dy toh
let username = name1;
let username2 = name1;
// console.log(typeof(name1));
console.log(name1);
