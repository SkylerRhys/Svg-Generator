const {Triangle, Square, Circle} = require('../lib/shapes.js');
const {SVG} = require('../lib/generateSvg.js');

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return triangle svg text with the correct color', () => {
            const answer = `<polygon points="150,0 250,170 50,170" fill="blue" />`;
            const triangle = new Triangle('blue');
            expect(triangle.render().toBe(answer));
        });
    });
});