const {Triangle, Circle, Square, Text} = require ('./shapes');


describe('Triangle', () => {
    test('should render correctly', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 50 250, 200 50, 200" fill="blue" />')
    });
});

describe('Circle', () => {
    test('should render correctly', () => {
const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />')
    });
});

describe('Square', () => {
    test('should render correctly', () => {
const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="100" y="50" width="100" height="100" fill="green" />')
    });
});