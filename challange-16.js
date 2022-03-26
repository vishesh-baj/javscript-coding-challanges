"use strict";

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   get speedUS() {
//     return Math.trunc(this.speed / 1.6);
//   }

//   set _speedUS(speed) {
//     this.speed = speed * 1.6;
//     return this.speed;
//   }

//   accelerate = () => {
//     this.speed += 10;
//     console.log(`${this.make}'s speed is ${this.speed}`);
//   };

//   brake = () => {
//     this.speed -= 5;
//     console.log(`${this.make}'s speed is ${this.speed}`);
//   };
// }
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = () => {
  this.speed += 10;
  console.log(`Speed is: ${this.speed}`);
};
const ElectricCar = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} is going at ${this.speed} with charge of ${this.charge}`
  );
};
const carEV = new ElectricCar("bmw", 200, 100);
carEV.chargeBattery(90);
carEV.accelerate();
