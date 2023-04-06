# make-logo-svg

## Description

A simple logo generator enabled through the command-line that accepts user input and renders an SVG file with the desired shape, color, and text for the logo. 

## Installation

This application requires the use of npm dependency Inquirer. To install Inquirer, type 'npm install inquirer' or 'npm i inquirer' into
the terminal. This application was made with Inquirer version 8.2.4.

## Usage

Open the application files. To build your logo, use your terminal to run 'node index' or 'node index.js'. You will be prompted to specify your desired text (3-character limit), 
text color, shape (3 options including triangle, circle and square) and shape color. A message in your console will let you know when your logo has been generated successfully. 
You may find your newly generated logo.svg file under the /examples folder. To view it, open the file in your browser.  

The video below shows the testing and functionality:  

https://drive.google.com/file/d/1s8tr55H-q3MFtdmgJPh1tJ_piPbIya08/view   

## License

This project is licensed under the MIT license. See the LICENSE file for details.

## Testing

To run tests for this application, the shapes.test.js file within the /lib folder provides a few sample tests that can be run with jest. You may use these
or add new tests of your own. To run the tests, input 'npm run test' or 'npm test' on the terminal and all tests in the shapes.test.js file will be run. 