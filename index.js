const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const inquirer = require('inquirer')
const team = require('./util/generateHtml')
const employeeArray = []


const Begin = async () => {
    try {
        const empQuestions = await inquirer.prompt([
            {
                type: "input",
                message: "What is the team member's name?",
                name: "name",
            }, {
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
        console.log(empQuestions)

        switch (empQuestions.role) {
            case "Manager": addManager();
                // console.log("add manager!")
                break;
            case "Engineer": addEngineer();
                // console.log("add engineer!")
                break;
            case "Intern": addIntern();
                // console.log("add intern!")
                break;
        }

    } catch (err) {
        console.log(err)
    }

}
function addAnotherEmp(answers) {
    if (answers.addNew === "No") {
        console.log("Goodbye")
    } else {
    Begin()
    }
}
function addManager() {
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
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.number)
        employeeArray.push(manager)
        console.log(manager)
        if (answers.addNew) {
            Begin()
        } else {
            console.log("Thank you. Goodbye")
        }
     })
}

function addIntern() {
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
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school)
        employeeArray.push(intern)
        if (answers.addNew) {
            Begin()
        } else {
            console.log("Goodbye")
        }
    })
}

function addEngineer(answers) {
    const engineerAns = inquirer.prompt([
        {
            type: "input",
            message: "Github Username:",
            name: "github"
        }, {
            type: "confirm",
            message: "Would you like to add a team members?",
            name: "addNew",
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github)
        employeeArray.push(engineer)
        if (answers.addNew) {
            Begin()
        } else {
            console.log("G'Day")
        }
        // function (err) {
        //     if (err) {
        //         console.error(err)
        //     } else {
        //         console.log('Answers logged!')
        //     }
        // }

    })

}


Begin()
