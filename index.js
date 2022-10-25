const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const inquirer = require('inquirer')
const team = require('./util/generateHtml')


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
        case "Engineer": addEngineer;
        console.log("add engineer!")
        break;
        case "Intern": addIntern;
        console.log("add intern!")
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
