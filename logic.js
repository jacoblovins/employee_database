const inquirer = require("inquirer")
const questions = require("./questions")
const queries = require("./queries")


async function init() {
  const whatToDO = await inquirer.prompt(questions.initialQuest);
  questions.choices.roleChoices.splice(0);
  questions.choices.managerChoices.splice(0);
  questions.choices.managerChoices.push("N/A");

  if (whatToDO.what === "add employee") {
    const allRoles = await queries.allRoleSearch();
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.title);
    });
    const allManagers = await queries.allManagerSearch();
    await allManagers.forEach(element => {
      questions.choices.managerChoices.push(element.first_name + " " + element.last_name)
    });
    const newEmployee = await inquirer.prompt(questions.addEmployeeQuestions)
    console.log(newEmployee.firstname)
  }
}
init()

