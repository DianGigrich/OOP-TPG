// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, id, email, role, number) {
        super(name, id, email)
this.role=role
this.number=number

        getRole() {
            return "Manager"
        }

        getOfficeNumber() {
            return this.number
        }

inquirer.prompt([
            {
                type: "confirm",
                message: "Who is the team manager?",
                name: "name",
            }, {
                type: "input",
                message: "Enter their employee ID:",
                name: "id"
            }, {
                type: "input",
                message: "Email address:",
                name: "email"
            }, {
                type: "input",
                message: "Phone number:",
                name: "number"
            }, {
                type: "list",
                message: "Please add a team member:",
                name: "team",
                choices: ["Engineer", "Intern"]
            }
        ])
    }
}
module.exports = Manager

* `officeNumber`

* `getRole()`&mdash;overridden to return `'Manager'`