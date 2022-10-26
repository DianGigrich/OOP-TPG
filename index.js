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
            // {
            //     type: "input",
            //     message: "What do you want to name your team:",
            //     name: "teamName"
            // },
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
 
        // console.log(empQuestions)

        switch (empQuestions.role) {
            case "Manager": addManager(empQuestions);
                break;
            case "Engineer": addEngineer(empQuestions);
                break;
            case "Intern": addIntern(empQuestions);
                break;
        } 
        // console.log(employeeArray)

    } catch (err) {
        console.log(err)
    }

}
function addManager(answers) {
    inquirer.prompt([
        {
            type: "input",
            message: "Phone number:",
            name: "number"
        }, {
            type: "confirm",
            message: "Would you like to add a team members?",
            name: "addNew",
        }
    ]).then((response) => {
        const manager = new Manager(answers.name, answers.id, answers.email, parseInt(response.number))
        employeeArray.push(manager)
        console.log(manager)
        console.log(answers)
        if (response.addNew) {
            Begin()
        } else {
            fs.writeFile(`./team/${answers.teamName}.html`, generateTeam(employeeArray), (err)=>{
                err ? console.log(err) : console.log("Your file was created!")
            });
            console.log("Thank you. Goodbye")
        }
    })
}

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
        console.log(answers)
        if (response.addNew) {
            Begin()
        } else {
            fs.writeFile(`./team/${answers.teamName}.html`, generateTeam(employeeArray), (err)=>{
            err ? console.log(err) : console.log("Your file was created!")
        });
        }
    })
}

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
        if (response.addNew) {
            Begin()
        } else {
            fs.writeFile(`./team/${answers.teamName}.html`, generateTeam(employeeArray), (err)=>{
                err ? console.log(err) : console.log("Your file was created!")
            });
        }

    })

}


Begin()
