class Shape {
    constructor(color) {
        this.color = color;
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 50 250, 200 50, 200" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`
    }
}

class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    render () {
        return  `<text x="150" y="125" font-size="40" text-anchor="middle" dominant-baseline="middle" fill="${this.color}">${this.text}</text>`
    }
} 
module.exports = {Triangle, Circle, Square, Text};