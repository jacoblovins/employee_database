const inquirer = require("inquirer")
const questions = require("./questions")
const queries = require("./queries")
const connection = require("./connect")
const table = require("console.table")



async function init() {
  let isManager = false
  let managerID = null
  const whatToDO = await inquirer.prompt(questions.initialQuest);
  questions.choices.roleChoices.splice(0);
  questions.choices.peopleChoices.splice(0);

  if (whatToDO.what === "view all employees") {
    const allPeople = await queries.viewAllEmployees();
    console.table(allPeople)

  } else if (whatToDO.what === "view all employees by department") {
    const departmentChoice = await inquirer.prompt(questions.employeeByDepartment);
    const department = departmentChoice.department;
    console.log(department)
    const departmentEmployees = await queries.viewEmployeesByDepartment(department);
    await console.table(departmentEmployees);

  } else if (whatToDO.what === "view all employees by manager") {
    const managerChoice = await inquirer.prompt(questions.employeeByManager);
    const manager = managerChoice.manager;
    console.log(manager)
    const managerEmployees = await queries.viewEmployeesByManager(manager);
    await console.table(managerEmployees);

  } else if (whatToDO.what === "add employee") {
    const allRoles = await queries.allRoleSearch();
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.id + " " + element.title);
    });
    const newEmployee = await inquirer.prompt(questions.addEmployeeQuestions)
    roleID = parseInt(newEmployee.employeeRole.charAt(0));
    if(newEmployee.employeeManager === "Michael Scott"){
      managerID = 1;
    }else if(newEmployee.employeeManager === "Jim Halpert"){
      managerID = 2;
    }
    queries.addEmployee(newEmployee.firstname, newEmployee.lastname, roleID, isManager, managerID);
    console.log("Employee Added!")

  } else if (whatToDO.what === "remove employee") {
    const allPpl = await queries.allPeopleSearch();
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    const removeChoice = await inquirer.prompt(questions.removeEmployeeQuestion);
    const remove = removeChoice.remove;
    console.log(remove)
    const removeEmployee = await queries.removeEmployee(remove);
    await console.log("Employee Removed!!");

  } else if (whatToDO.what === "update employee role") {
    const allPpl = await queries.allPeopleSearch();
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    const allRoles = await queries.allRoleSearch();
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.id + " " + element.title);
    });
    const roleQuestion = await inquirer.prompt(questions.updateRole);
    const roleEmployee = roleQuestion.updateRoleEmployee;
    const roleChoice = roleQuestion.role
    console.log(roleEmployee)
    console.log(roleChoice)
    const removeEmployee = await queries.updateRoleQuery(roleEmployee, roleChoice);
    await console.log("Employee Role Changed!!");

  } else if (whatToDO.what === "update employee manager") {
    const allPpl = await queries.allPeopleSearch();
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    const managerQuestion = await inquirer.prompt(questions.updateManager);
    const employee = managerQuestion.employee;
    const manager = managerQuestion.manager
    console.log(employee)
    console.log(manager)
    const updateManager = await queries.updateManagerQuery(manager, employee);
    await console.log("Employee Manager Changed!!");

  } else if (whatToDO.what === "view all roles") {
    const allRoles = await queries.allRoleSearch();
    console.table(allRoles)

  }

  connection.end();
}
init()

