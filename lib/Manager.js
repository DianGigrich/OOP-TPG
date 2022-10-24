// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require('./Employee')

class Manager {
    constructor(name, id, email, number){
        this.name=name
        this.id=id
        this.email=email
        this.number=number
    }
}
module.exports = Manager