const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOffice',
    },
]

const menu = [
    {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ["Add an engineer", "Add an intern", "Finish building my team"],
        name: 'menuAnswer',
    },
]

module.exports = { managerQuestions, menu }