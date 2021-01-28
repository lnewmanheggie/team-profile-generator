const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub = () => this.github;

    createCard = () => 
                `<div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                        ${this.name}
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="one">${this.id}</div>
                        <div class="two"><a href="mailto:${this.email}" target="_blank">${this.email}</a></div>
                        <div class="three">${this.github}</div>
                    </div>
                </div>
                `
}

module.exports = Engineer;
