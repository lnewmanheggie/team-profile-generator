const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    createCard = () => 
                `<div class="card">
                    <header class="card-header">
                    <p class="card-header-title">
                        ${this.name}  (Manager)
                    </p>
                    </header>
                    <div class="card-content">
                        <div class="one">${this.id}</div>
                        <div class="two"><a href="mailto:${this.email}" target="_blank">${this.email}</a></div>
                        <div class="three">${this.officeNumber}</div>
                    </div>
                </div>
                `
}

module.exports = Manager;