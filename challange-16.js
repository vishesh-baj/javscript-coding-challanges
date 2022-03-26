"use strict";

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  get speedUS() {
    return Math.trunc(this.speed / 1.6);
  }

  set _speedUS(speed) {
    this.speed = speed * 1.6;
    return this.speed;
  }

  accelerate = () => {
    this.speed += 10;
    console.log(`${this.make}'s speed is ${this.speed}`);
  };

  brake = () => {
    this.speed -= 5;
    console.log(`${this.make}'s speed is ${this.speed}`);
  };
}

const car1 = new Car("Ford", 120);
car1.accelerate();
car1.brake();
console.log((car1._speedUS = 139));
