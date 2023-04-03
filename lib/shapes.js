class Shape {
    constructor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="100" y="100" width="100" height="100" fill="${this.color}"/>`
    }
}

class Text {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }

    render () {
        return  `<text x="100" y="100" font-size="40" fill="${this.color}">${this.text}</text>`
    }
} 
module.exports = {Triangle, Circle, Square, Text};