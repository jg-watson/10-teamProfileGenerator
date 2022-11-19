//bring in required files and packages
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//inquirer package
const inquirer = require('inquirer');
//generateHtml
const generateHtml = require('./src')

//inquirer prompt 
const addEmployee = () => 
inquirer.prompt([
{
    type: 'input',
    name: 'role', 
    message: 'What is the role of the employee?',
    choices: ['Employee, Engineer, Intern, Manager']
},
{
    type: 'input',
    name: 'id',
    message: 'Enter employee id:'
},
{
    type: 'input',
    name: 'email',
    message: 'Please enter employee email.'
}

])

//function to create the index.html
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
};

//initialize app
function init() {
inquirer.prompt(addEmployee).then((response) => {
    writeToFile('index.html', generateHtml(response));
});

};

init();