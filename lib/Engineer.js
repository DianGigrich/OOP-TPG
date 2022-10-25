// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer {
    constructor(email, github){
        super(Employee.name, "Engineer", Employee.id)
        this.email=email
        this.github=github
    }
}
module.exports = Engineer