class Shapes {
    constructor(color) {
        this.color = color
    }
}

class Triangle extends Shapes {
    constructor(color) {
        super(color);
    }

    render() {
        return `<polygon points="150,0 250,170 50,170" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}
const triangle = new Triangle('blue');

module.exports = {Triangle, Square, Circle}

