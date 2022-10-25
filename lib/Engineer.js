// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(role, github){
        function addEngineer() {
            const engineerAns = inquirer.prompt([
                 {
 {
                     type: "input",
                     message: "Github Username:",
                     name: "github"
                 }, {
                     type: "list",
                     message: "Would you like to add any more team members?",
                     name: ["No", "Engineer","Intern"]
                 }
             ])

    }
}
module.exports = Engineer

`github`&mdash;GitHub username

* `getGithub()`

* `getRole()`&mdash;overridden to return `'Engineer'`