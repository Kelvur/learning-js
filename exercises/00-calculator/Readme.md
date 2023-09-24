# Exercise 00 - Calculator

Implements a Calculator in a class and function way. It has to be able to `add`, `subtract`, `multiply`, `divide` 2 numbers. Also, has to have the method `getLastCalculation` which will return the result of the last operation.

## How to define a Class

```javascript

class Calculator {
    add(a, b) {
        return a + b;
    }
}

const calculator = new Calculator();
calculator.add(1, 2); // 3

```

## How to use a function as a class

```javascript

function Calculator(){
    return {
        add: function(a, b) {
            return a + b;
        }
    }
}

const calculator = new Calculator();
calculator.add(1, 2); // 3

```