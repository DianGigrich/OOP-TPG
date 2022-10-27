// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, number, teamName) {
        super(name, id, email)

        this.number = number
        this.teamName = teamName

    }
    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.number
    }

}
module.exports = Manager

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`