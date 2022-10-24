const intern = require('./lib/Intern')
const manager = require('./lib/Manager')
const engineer = require('./lib/Engineer')
const employee = require('./lib/Employee')
const inquirer = require('inquirer')

const Begin = async () => {
    try {
        const addManager = inquirer.prompt([
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
       switch (addManager.team){
        case "Engineer": addEngineer
        break;
        case "Intern": addIntern
        break;
       }
        function addEngineer() {
           const engineerAns = inquirer.prompt([
                {
                    type: "input",
                    message: "Name?",
                    name: "name",
                }, {
                    type: "input",
                    message: "employee ID",
                    name: "id"
                }, {
                    type: "input",
                    message: "Email address:",
                    name: "email"
                }, {
                    type: "input",
                    message: "Github Username:",
                    name: "github"
                }, {
                    type: "list",
                    message: "Would you like to add any more team members?",
                    name: ["No", "Engineer","Intern"]
                }
            ])
            const engineer = new Engineer
        }
        function addIntern() {
            const internAns = inquirer.prompt([
                {
                    type: "input",
                    message: "Name?",
                    name: "name"
                }, {
                    type: "input",
                    message: "employee ID",
                    name: "id"
                }, {
                    type: "input",
                    message: "Email address:",
                    name: "email"
                }, {
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
    } catch (err) {
        console.log(err)
    }

}
Begin()
