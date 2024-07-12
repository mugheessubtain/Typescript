"use strict";
let car = {
    name: "mehran",
    isAutomatic: true,
    selfStart: true,
    airCondition: true
};
let specialCar = {
    name: "F16",
    isAutomatic: true,
    selfStart: true,
    airCondition: true,
    fly: true
};
let bike = {
    name: "Ninja H2R",
    isAutomatic: false,
    selfStart: false,
    footRest: true
};
console.log(car);
console.log(specialCar);
console.log(bike);
class superCar {
    constructor(carName, model, varient) {
        this.isAutomatic = true;
        this.name = carName;
        this.model = model;
        this.varient = varient;
    }
    calculateAverage(fuel, milage) {
        let msg = `${this.name} has fuel average of ${milage / fuel}km`;
        console.log(msg);
    }
}
let car1 = new superCar("Haval", 2022, "HEV");
console.log(car1);
car1.calculateAverage(10, 500);
let car2 = new superCar("fortuner", 2023, "Legender");
console.log(car2);
car1.calculateAverage(20, 600);
