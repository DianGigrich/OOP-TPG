const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const inquirer = require('inquirer')
const fs = require('fs')
const generateTeam = require('./util/generateHtml')
const employeeArray = []


const Begin = async () => {
    try {
        const empQuestions = await inquirer.prompt([
            {
                type: "input",
                message: "What is the team member's name?",
                name: "name",
            },

            {
                type: "input",
                message: "Enter their employee ID:",
                name: "id"
            }, {
                type: "input",
                message: "Email address:",
                name: "email"
            },
            {
                type: "list",
                message: "What is their role?",
                name: "role",
                choices: ["Manager", "Engineer", "Intern"]
            }
        ])

        // proceed to unique questions per role

        switch (empQuestions.role) {
            case "Manager": addManager(empQuestions);
                break;
            case "Engineer": addEngineer(empQuestions);
                break;
            case "Intern": addIntern(empQuestions);
                break;
        }

    } catch (err) {
        console.log(err)
    }

}
// create and add a manager to employee array
function addManager(answers) {
    inquirer.prompt([
        {
            type: "input",
            message: "Phone number:",
            name: "number"
        }, {
            type: "input",
            message: "What do you want to name your team:",
            name: "teamName"
        }, {
            type: "confirm",
            message: "Would you like to add a team members?",
            name: "addNew",
        }
    ]).then((response) => {
        const manager = new Manager(answers.name, answers.id, answers.email, parseInt(response.number), response.teamName)
        employeeArray.push(manager)
        console.log(manager)
        if (response.addNew) {
            Begin()
        } else {
            writeHTML()
        }
    })
}

// create and add an intern to employee array
function addIntern(answers) {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select the school you attend:",
            name: "school",
            choices: ["University of Washington", "Central Washington University", "Washington University", "Unversity of Community College"]
        }, {
            type: "confirm",
            message: "Would you like to add a team members?",
            name: "addNew"
        }
    ]).then((response) => {
        const intern = new Intern(answers.name, answers.id, answers.email, response.school)
        employeeArray.push(intern)
        console.log(intern)
        if (response.addNew) {
            Begin()
        } else {
            writeHTML()
        }
    })
}

// create and add an engineer to employee array
function addEngineer(answers) {
    inquirer.prompt([
        {
            type: "input",
            message: "Github Username:",
            name: "github"
        }, {
            type: "confirm",
            message: "Would you like to add a team members?",
            name: "addNew",
        }
    ]).then((response) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, response.github)
        employeeArray.push(engineer)
        console.log(engineer)
        if (response.addNew) {
            Begin()
        } else {
            writeHTML()
        }

    })

}

// write html file
function writeHTML() {

    fs.writeFile(`./team/${employeeArray[0].teamName}.html`, generateTeam(employeeArray), (err) => {
        err ? console.log(err) : console.log("Your file was created!")
    })
}


Begin()
