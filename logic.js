const inquirer = require("inquirer")
const questions = require("./questions")
const mysql = require("mysql");
const queries = require("./queries")

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "docker123",
  database: "employee_tracker"
});

connection.connect(function(err) {
  if (err) throw err;
  init();
});

async function init() {
    const whatToDO = await inquirer.prompt(questions.initialQuest);
    console.log(whatToDO);

    if(whatToDO.what === "add employee"){
        questions.choices.roleChoices.push(queries.allPeopleSearch())
        questions.choices.peopleChoices.push("something else1", "something else");
        const chosenEmployee = await inquirer.prompt(questions.addEmployeeQuestions)
    }
}
