// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee{
    constructor(email, school) {
        super(Employee.name, "Intern", Employee.id)
        this.email=email
        this.school=school
    }
}
module.exports = Intern