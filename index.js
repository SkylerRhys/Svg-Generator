const {SVG} = require('./lib/generageSvg.js');
const {writeFile} = require('fs').promises;
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "What text would you like for the logo? (limit 3 characters)",
        name: "text",
    },
    {
        type: "input",
        message: "What color would you like the text to be? (color or hexadecimal)",
        name: "textColor",
    },
    {
        type: "list",
        message: "What shape would you like the logo to be?",
        name: "shape",
        choices: ["triangle", "square", "circle"],
    },
    {
        type: "input",
        message: "What color would you like the shape to be? (color or hexadecimal)",
        name: "shapeColor",
    }
];

function writeToFile(fileName, data) {
    writeFile(fileName, data)
    .then(() => console.log("Success! Open logo.svg in the examples file."))
    .catch(err => console.log(err))
};

function init() {
    inquirer
    .prompt(
        questions
    )
    .then(response => {
        const svg = new SVG(response.shape, response.shapeColor, response.text, response.textColor);
        writeToFile("./examples/logo.svg", svg.render());
    })
};

init();