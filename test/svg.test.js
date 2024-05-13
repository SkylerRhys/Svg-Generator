const {Triangle, Square, Circle} = require('../lib/shapes.js');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return triangle svg text with the correct color', () => {
            const answer = `<polygon points="150,0 250,170 50,170" fill="blue" />`;
            const triangle = new Triangle('blue');
            expect(triangle.render()).toBe(answer);
        });
    });

    describe('Circle', () => {
        it('should return circle svg text with the correct color', () => {
            const answer = `<circle cx="150" cy="100" r="80" fill="green" />`;
            const circle = new Circle('green');
            expect(circle.render()).toBe(answer);
        });
    });

    describe('Square', () => {
        it('should return square svg text with the correct color', () => {
            const answer = `<rect x="70" y="20" width="160" height="160" fill="white" />`;
            const square = new Square('white');
            expect(square.render()).toBe(answer);
        });
    });
});