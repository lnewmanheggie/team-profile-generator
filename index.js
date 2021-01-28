const inquirer = require('inquirer');
const fs = require('fs');
const { managerQuestions, menu } = require('./questions')

const menuFunction = () => {
    inquirer
        .prompt(menu)
        .then(({menuAnswer}) => {
            switch (menuAnswer) {
                case 'Add an engineer':
                    console.log('engineer')
                    break;
                case 'Add an intern':
                    console.log('intern');
                    break;
            }
        })
}

inquirer 
    .prompt(managerQuestions)
    .then(({managerName, managerId, managerEmail, managerOffice}) => {
        console.log(managerName, managerId, managerEmail, managerOffice)
        menuFunction();
    })