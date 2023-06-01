// @ts-check

let value = 3;

const increase = () => {
    value +=1;
};

const decrease = () => {
    value -=1;
};

increase()
decrease()
increase()

console.log(value)

// COMBINE YOUR DATA AND BEHAVIOUR INTO A SINGLE ENCAPSULATED UNIT
/*
const counter = {
    value: 1,
   
    increase() {
        counter.value += 1;
    },
    /
    decrease() {
        counter.value -= 1;
    },
    display () {
        console.log(this.value);
    }
}

counter.increase();
counter.increase();
counter.display();
*/


/**
 * @callback Modify
 * @param {number} [amount] - The amount to modify the counter by
 */

/**
 * @callback EmptyFunction
 */

/**
 * An object that keeps internal state and allows you to increase, decrease, and display the current value. It does not allow you to modify the value.
 * @typedef {Object} Counter
 * @prop {} increase
 * @prop {} decrease
 * @prop {} display
 */

/**
 * @param {string} label - The actual value being measured
 * @returns {Counter}
 */
const createCounter = (label) => {
    let value = 1;
    let innerLabel = label;

    const increase = (amount) => { value += amount || 1 }
    const decrease = (amount) => { value -= amount || 1 }

    const display = () => console.log(`${value} ${label}`);    

    return {
        display,
        increase,
        decrease,

        get label () {
            return innerLabel
        }
        
        set label (newLabel) { 
            innerLabel = `${newLabel} is the label!`
        }
    }
}

const temperature = createCounter("Celsius");
const humidity = createCounter("Humidity Factor"); 

humidity.increase(20);
temperature.decrease(3);
temperature.increase(10);

temperature.label = "Fahrenheit";

humidity.display();
temperature.display();


// Encapsulation example:
class Car {
    constructor() {
    this.speed = 0;
    }
    
    accelerate() {
    this.speed += 10;
    }
    
    brake() {
    this.speed -= 5;
    }
    
    getSpeed() {
    return this.speed;
    }
    }
    
    const myCar = new Car();
    myCar.accelerate();
    console.log(myCar.getSpeed()); // Output: 10
    
    /*
    In this example, the Car class encapsulates the speed variable and the methods accelerate, brake, and getSpeed. 
    The speed variable is hidden and can only be accessed through the public method getSpeed. This encapsulation provides 
    control over how the speed variable is modified and accessed.
    */

// Abstraction example:
class Shape {
    constructor() {
    if (this.constructor === Shape) {
    throw new Error('Abstract classes cannot be instantiated.');
    }
    }
    
    calculateArea() {
    throw new Error('Method calculateArea must be implemented.');
    }
    }
    
    class Rectangle extends Shape {
    constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    }
    
    calculateArea() {
    return this.width * this.height;
    }
    }
    
    const rectangle = new Rectangle(5, 3);
    console.log(rectangle.calculateArea()); // Output: 15
    
    /*
    In this example, the Shape class is an abstract class that defines the common behavior of shapes but does not provide an 
    implementation for calculateArea. The Rectangle class extends the Shape class and provides an implementation for calculateArea. 
    The Shape class serves as an abstraction, defining a contract (the calculateArea method) that derived classes must implement. 
    This abstraction allows us to work with shapes in a generalized way without worrying about the specific details of each shape.
    
    To summarize, encapsulation focuses on hiding and controlling access to data and methods within an object, while abstraction 
    involves simplifying complex systems by defining common interfaces and leaving the implementation details to derived classes.
    */

   // getters and setters
   const person = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value) { // value is whatever will be on the right side of the = operator
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
   };

   // getters => access properties in an object
   // setters => mutate properties in an object

   person.fullName = 'Peter Pan';
   console.log(person);

   // factory functions - produce objects

function createCircle(radius) {
    return {
    radius, // removing the value and simply keeping the key
    draw() {
        console.log('draw');
    }
    };
}

const circle1 = createCircle(1);
console.log(circle1)

const circle2 = createCircle(2);
console.log(circle2)

// Classes in JavaScript - define properties and/or methods(functions that operate on objects)

class Car{

    drive(){
        console.log('You drive the car');
    }
    brake(){
        console.log('You step on the brake');
    }
}

// car object named 'car'
let car1 = new Car();
let car2 = new Car();

car1.drive(); // You drive the car
car2.brake(); // You step on the brake