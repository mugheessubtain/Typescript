interface Vehicle{
    name:string,
    isAutomatic:boolean,
    selfStart:boolean
}

interface Car extends Vehicle{
    airCondition:boolean
}

interface SpecialCar extends Car{
    fly:boolean
}

interface Bike extends Vehicle{
    footRest:boolean
}

let car:Car={

    name:"mehran",
    isAutomatic:true,
    selfStart:true,
    airCondition:true
}

let specialCar:SpecialCar={
    name:"F16",
    isAutomatic:true,
    selfStart:true,
    airCondition:true,
    fly:true
}

let bike:Bike={
    name:"Ninja H2R",
    isAutomatic:false,
    selfStart:false,
    footRest:true
}



console.log(car);
console.log(specialCar);
console.log(bike);

interface CarInterface{
    name:string;
    model:number;
    varient:string;
    isAutomatic:boolean;
    calculateAverage:(fuel:number,milage:number)=> void;
}

class superCar implements CarInterface{
    name;
    model;
    varient;
    constructor(carName:string,model:number,varient:string){
        this.name=carName;
        this.model=model;
        this.varient=varient
    }
    isAutomatic= true;
    calculateAverage(fuel: number, milage: number){
        let msg=`${this.name} has fuel average of ${milage/fuel}km`
        console.log(msg);
        
    }
}

let car1=new superCar("Haval",2022,"HEV");
console.log(car1);
car1.calculateAverage(10,500);



let car2=new superCar("fortuner",2023,"Legender");
console.log(car2);
car1.calculateAverage(20,600);