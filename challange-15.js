// Use a constructor function to implement a'Car'.A car has a'make'and a 'speed' property. The 'speed' property is the current speed of the car in km/h
// 2. Implementan'accelerate'methodthatwillincreasethecar'sspeedby10, and log the new speed to the console
// 3. Implementa'brake'methodthatwilldecreasethecar'sspeedby5,andlog the new speed to the console
// 4. Create2'Car'objectsandexperimentwithcalling'accelerate'and 'brake' multiple times on each of them

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = () => {
  this.speed += 10;
  console.log(`Speed is: ${this.speed}`);
};

// const bmwCar = Car("bmw", 30);
// bmwCar.accelerate();
console.dir(Car);
