// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(number, email) {
        super(Employee.name, "Manager", Employee.id)
        this.email = email
        this.number = number
    }
}
module.exports = Manager