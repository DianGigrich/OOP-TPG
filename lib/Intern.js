// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(role, school) {

const internAns = inquirer.prompt([
   {
        type: "list",
        message: "Please select the school you attend:",
        name: "school",
        choices: ["University of Washington", "Central Washington University", "Washington University", "Unversity of Community College"]
    }, {
        type: "list",
        message: "Would you like to add any more team members?",
        name: ["No", "Engineer","Intern"]
    }
])
    }
}
module.exports = Intern

* `school`

* `getSchool()`

* `getRole()`&mdash;overridden to return `'Intern'`