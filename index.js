const inquirer = require('inquirer');
const fs = require('fs');
const { managerQuestions, menu, engineerQuestions, internQuestions } = require('./questions')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const employeeArr = [];

const engineerFxn = () => {
    inquirer  
    .prompt(engineerQuestions)
    .then(({engineerName, engineerId, engineerEmail, github}) => {
        console.log(engineerName, engineerId, engineerEmail, github)
        const en = new Engineer(engineerName, engineerId, engineerEmail, github);
        employeeArr.push(en);
        menuFunction();
    })
}

const internFxn = () => {
    inquirer  
    .prompt(internQuestions)
    .then(({internName, internId, internEmail, school}) => {
        const intern = new Intern(internName, internId, internEmail, school);
        employeeArr.push(intern);
        menuFunction();
    })
}

const menuFunction = () => {
    inquirer
    .prompt(menu)
    .then(({menuAnswer}) => {
        switch (menuAnswer) {
            case 'Add an engineer':
                engineerFxn();
                break;
            case 'Add an intern':
                internFxn();
                break;
            case 'Finish building my team':
                console.log(employeeArr);
                return;
        }
    })
}

inquirer 
    .prompt(managerQuestions)
    .then(({managerName, managerId, managerEmail, managerOffice}) => {
        const manager = new Manager(managerName, managerId, managerEmail, managerOffice);
        employeeArr.push(manager);
        menuFunction();
    })