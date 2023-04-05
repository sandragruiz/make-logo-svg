const {Triangle, Circle, Square, Text} = require("./lib/shapes");


describe('Triangle', () => {
    test('should render correctly', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    });
});

describe('Circle', () => {
    test('should render correctly', () => {
const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="100" cy="100" r="50" fill="red" />')
    });
});

describe('Square', () => {
    test('should render correctly', () => {
const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="100" y="100" width="100" height="100" fill="green" />')
    });
});