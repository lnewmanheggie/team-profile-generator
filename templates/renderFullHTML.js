const fs = require("fs");
const path = require("path");

const TEMPLATE = path.join(__dirname, "fullHTML.html")

const renderTemplate = cards => {
    html = fs.readFileSync(TEMPLATE, "utf8")

    html = html.replace("{{ cards }}", cards)

    return html;
}

module.exports = renderTemplate;