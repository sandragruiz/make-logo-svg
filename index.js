// Packages for application
const inquirer = require('inquirer');
const fs = require("fs")
const {Triangle, Circle, Square, Text} = require("./lib/shapes")

//Prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Input your text here (3-character maximum)',
            name: 'text'
        },
        {
            type: 'input',
            message: 'What color do you want your text to be?',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'What shape do you wish to put on your logo?',
            name: 'shapes',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            message: 'What color do you want your shape to be?',
            name: 'shapeColor',
        },
        //Build shape according to answer
    ]).then(answers => {
        let builtShape;
        if(answers.shapes == "triangle") {
            builtShape = new Triangle(answers.shapeColor)
        }else if (answers.shapes == "circle") {
            builtShape = new Circle(answers.shapeColor)
        }else {
            builtShape = new Square(answers.shapeColor)
        }
        //Add text according to answer
        const newText = new Text(answers.text, answers.textColor)

        //Create svg file
        console.log(builtShape.render())
        const template = `
        <svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        
        ${builtShape.render()}
        ${newText.render()}
        
        </svg>`

        fs.writeFile("./examples/" + answers.shapes + ".svg", template, (err) => {
            if(err)throw err;
        })
    })

    //validate for 3-character text
    //adjust text/shape dimensions