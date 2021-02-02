const fs = require("fs");
const path = require("path");

const MANAGER_T = path.join(__dirname, "manager.html")
const INTERN_T = path.join(__dirname, "intern.html")
const ENGINEER_T = path.join(__dirname, "engineer.html")


const render = employees => {
    const manager_html = employees
        .filter(x => x.getRole() === "Manager")
        .map(x => renderManager(x))
        .join("")
    const engineer_html = employees
        .filter(x => x.getRole() === "Engineer")
        .map(x => renderEngineer(x))
        .join("")
    const intern_html = employees
        .filter(x => x.getRole() === "Intern")
        .map(x => renderIntern(x))
        .join("")

    return manager_html + engineer_html + intern_html
}

function renderManager(man) {
    html = fs.readFileSync(MANAGER_T, "utf8")

    html = html.replace("{{ name }}", man.getName())
    html = html.replace("{{ role }}", man.getRole())
    html = html.replace("{{ id }}", man.getId())
    html = html.replace(/{{ email }}/g, man.getEmail())
    html = html.replace(/{{ officeNumber }}/g, man.getOffice())

    return html
}

function renderEngineer(eng) {
    html = fs.readFileSync(ENGINEER_T, "utf8")

    html = html.replace("{{ name }}", eng.getName())
    html = html.replace("{{ role }}", eng.getRole())
    html = html.replace("{{ id }}", eng.getId())
    html = html.replace(/{{ email }}/g, eng.getEmail())
    html = html.replace(/{{ github }}/g, eng.getGithub())

    return html
}

function renderIntern(intr) {
    html = fs.readFileSync(INTERN_T, "utf8")

    html = html.replace("{{ name }}", intr.getName())
    html = html.replace("{{ role }}", intr.getRole())
    html = html.replace("{{ id }}", intr.getId())
    html = html.replace(/{{ email }}/g, intr.getEmail())
    html = html.replace(/{{ school }}/g, intr.getSchool())

    return html
}

module.exports = render;