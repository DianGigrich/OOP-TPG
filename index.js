const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
const inquirer = require('inquirer')
const team = require('./util/generateHtml')
const empArray = new Employee[]


const Begin = async () => {
    try {
        
       switch (addManager.team){
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

function addIntern() {
            
}

function addEngineer() {
    //inqurer
    //.then() {
        const engineer = new Engineer(answers.name, a)
    }
}

function addManager() {

}
Begin()
