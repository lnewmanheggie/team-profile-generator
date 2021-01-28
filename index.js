const inquirer = require('inquirer');
const fs = require('fs');
const { managerQuestions, menu, engineerQuestions, internQuestions } = require('./questions')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { html } = require('./src/helper')

const employeeArr = [];

const createCards = () => {
    let cards = ``;
    employeeArr.forEach(employee => {
        cards += employee.createCard();
    });
    const htmlFile = html({cards})
    fs.mkdir('./dist', (err) => 
        err ? console.error(err) : console.log('Distribution folder created!')
    );
    fs.writeFile('./dist/index.html', htmlFile, (err) =>
        err ? console.error(err) : console.log('Html file created!')
    );
    fs.copyFile('./src/style.css', './dist/style.css', (err) =>
        err ? console.error(err) : console.log('CSS file copied!')
    );
}

const engineerFxn = () => {
    inquirer  
    .prompt(engineerQuestions)
    .then(({engineerName, engineerId, engineerEmail, github}) => {
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
                createCards();
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
