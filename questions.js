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

const engineerQuestions = [
    {
        type: 'input',
        message: "What is this engineer's name?",
        name: 'engineerName',
    },
    {
        type: 'input',
        message: "What is their employee ID?",
        name: 'engineerId',
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: "What is their github?",
        name: 'github',
    },
]

const internQuestions = [
    {
        type: 'input',
        message: "What is this intern's name?",
        name: 'internName',
    },
    {
        type: 'input',
        message: "What is the their employee ID?",
        name: 'internId',
    },
    {
        type: 'input',
        message: "What is their email?",
        name: 'internEmail',
    },
    {
        type: 'input',
        message: "What is their school?",
        name: 'school',
    },
]

module.exports = { managerQuestions, menu, engineerQuestions, internQuestions}