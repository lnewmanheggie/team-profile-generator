const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool = () => this.school;

    createCard = () => 
                `<div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                        ${this.name}  (Intern)
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="one">${this.id}</div>
                        <div class="two"><a href="mailto:${this.email}" target="_blank">${this.email}</a></div>
                        <div class="three">${this.school}</div>
                    </div>
                </div>
                `
}

module.exports = Intern;