const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const inquirer = require('inquirer')
const team = require('./util/generateHtml')
const empArray = new Employee[]


const Begin = async () => {
    try {
        inquirer.prompt([
            {
                type: "confirm",
                message: "Wat is the team member's?",
                name: "name",
            }, {
                type: "input",
                message: "Enter their employee ID:",
                name: "id"
            }, {
                type: "input",
                message: "Email address:",
                name: "email"
            }
        ])

        switch (addManager.team) {
            case "Engineer": addEngineer;
                console.log("add engineer!")
                break;
            case "Intern": addIntern;
                console.log("add intern!")
                break;
        }


    }
        
    } catch (err) {
    console.log(err)
}

}

function addEmployee() {

}

function addIntern() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select the school you attend:",
            name: "school",
            choices: ["University of Washington", "Central Washington University", "Washington University", "Unversity of Community College"]
        }, {
            type: "list",
            message: "Would you like to add any more team members?",
            name: ["No", "Engineer", "Intern"]
        }
    ])
}

function addEngineer(answers) {
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
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
}


function addManager() {
    inquirer.prompt([ {
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
}


Begin()
