// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {

        this.name = name
        this.id = id
        this.email = email
        


    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getRole() {
        return "Employee"
    }

    getEmail() {
        return this.email
    }

}

module.exports = Employee

//get manager information
//get engineer information
//get intern information
//re ask questions
//quit questions
//add information to Employee.js
//send information to HTML
// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`