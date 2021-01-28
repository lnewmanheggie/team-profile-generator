const managerCard = ({managerName, managerId, managerEmail, managerOffice}) => 
                `<div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                        ${managerName}
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="one">${managerId}</div>
                        <div class="two"><a href="mailto:${managerEmail}" target="_blank">${managerEmail}</a></div>
                        <div class="three">${managerOffice}</div>
                    </div>
                </div>
                `

const engineerCard = ({engineerName, engineerId, engineerEmail, github}) => 
                `<div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                        ${engineerName}
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="one">${engineerId}</div>
                        <div class="two"><a href="mailto:${engineerEmail}" target="_blank">${engineerEmail}</a></div>
                        <div class="three">${github}</div>
                    </div>
                </div>
                `

const internCard = ({internName, internId, internEmail, school}) => 
                `<div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                        ${internName}
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="one">${internId}</div>
                        <div class="two"><a href="mailto:${internEmail}" target="_blank">${internEmail}</a></div>
                        <div class="three">${school}</div>
                    </div>
                </div>
                `

internName = 'hi'
internId = 123
internEmail = 'sdfsdf'
school = 'dfdf'


const cards = internCard({internName, internId, internEmail, school}) 
engineerName = 'sdfsdf'
engineerId = 333
engineerEmail = 'enemail'
github = 'github'

const html = ({cards}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class=" is-full">
        <div class="notification is-primary is-size-4 has-text-dark">
          MY TEAM
        </div>
    </div>
    <div class="container is-full mainContainer">
        <div class="notification is-primary subContainer">
            <div class="is-flex is-flex-wrap-wrap is-justify-content-center">
                ${cards}
            </div>
        </div>
    </div>
</body>
</html>`

module.exports = ({html});