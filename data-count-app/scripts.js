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
