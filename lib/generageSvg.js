const {Triangle, Square, Circle} = require('./shapes.js');


function returnShape(shape, shapeColor) {
    if (shape === "triangle") {
        return new Triangle(shapeColor);
    } else if (shape === "square") {
        return new Square(shapeColor);
    } else {
        return new Circle(shapeColor);
    }
}

class SVG {
    constructor(shape, shapeColor, text, textColor) {
        this.shape = returnShape(shape, shapeColor);
        this.text = text.toUpperCase();
        this.textColor = textColor;
    }

    render() {
        return ` <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shape.render()}
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}


module.exports = {SVG};