const inquirer = require("inquirer")
const questions = require("./assets/js/questions.js")
const queries = require("./assets/js/queries.js")
const connection = require("./assets/js/connect.js")
const table = require("console.table")

console.log('\n', "<-----------------------------Welcome to Your Employee Database--------------------------------------->", '\n')
  

// Initial function that runs all of the questions when app is ran 
async function init() {
  let isManager = false
  let managerID = null

  // Ask the main question with all of the choices
  const whatToDO = await inquirer.prompt(questions.initialQuest);

  // Set all of the question choices in the questions.js module to empty arrays
  questions.choices.roleChoices.splice(0);
  questions.choices.peopleChoices.splice(0);
  questions.choices.dptChoices.splice(0);

  // All logic based on what answer was chosen from the main question
  if (whatToDO.what === "view all employees") {
    // query the database
    const allPeople = await queries.viewAllEmployees();
    // display results
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    console.table(allPeople)
    init()

  } else if (whatToDO.what === "view all employees by department") {
    // Ask related question
    const departmentChoice = await inquirer.prompt(questions.employeeByDepartment);
    const department = departmentChoice.department;
    // query the database
    const departmentEmployees = await queries.viewEmployeesByDepartment(department);
    // display results
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    await console.table(departmentEmployees);
    init()

  } else if (whatToDO.what === "view all employees by manager") {
    // Ask related question
    const managerChoice = await inquirer.prompt(questions.employeeByManager);
    const manager = managerChoice.manager;
    // query the database
    const managerEmployees = await queries.viewEmployeesByManager(manager);
    // display results
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    await console.table(managerEmployees);
    init()

  } else if (whatToDO.what === "add employee") {
    // query the database
    const allRoles = await queries.allRoleSearch();
    // push all roles to role choices array to be used in the role question
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.id + " " + element.title);
    });
    // ask additional questions
    const newEmployee = await inquirer.prompt(questions.addEmployeeQuestions)
    roleID = parseInt(newEmployee.employeeRole.charAt(0));
    // Check which manager was chosen
    if(newEmployee.employeeManager === "Michael Scott"){
      managerID = 1;
    }else if(newEmployee.employeeManager === "Jim Halpert"){
      managerID = 2;
    }
    // query the database
    queries.addEmployee(newEmployee.firstname, newEmployee.lastname, roleID, isManager, managerID);
    console.log("Employee Added!")
    init()

  } else if (whatToDO.what === "remove employee") {
    // query the database
    const allPpl = await queries.allPeopleSearch();
    // push all employees to people choices array to be used in the removeEmployee Question
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    // ask additional question
    const removeChoice = await inquirer.prompt(questions.removeEmployeeQuestion);
    const remove = removeChoice.remove;
    // query the database
    queries.removeEmployee(remove);
    await console.log("Employee Removed!!");
    init()

  } else if (whatToDO.what === "update employee role") {
    // query the database for all employees
    const allPpl = await queries.allPeopleSearch();
    // push all employees to people choices array to be used in the updateRole Question
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    // query the database for all roles
    const allRoles = await queries.allRoleSearch();
    // push all roles to role choices array to be used in the updateRole Question
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.id + " " + element.title);
    });
    // Ask additional role questions
    const roleQuestion = await inquirer.prompt(questions.updateRole);
    const roleEmployee = roleQuestion.updateRoleEmployee;
    const roleChoice = roleQuestion.role
    // query the database
    queries.updateRole(roleEmployee, roleChoice);
    await console.log("Employee Role Changed!!");
    init()

  } else if (whatToDO.what === "update employee manager") {
    // query the database
    const allPpl = await queries.allPeopleSearch();
    // push all employees to people choices array to be used in the update manager Question
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    // ask additional manager questons
    const managerQuestion = await inquirer.prompt(questions.updateManager);
    const employee = managerQuestion.employee;
    const manager = managerQuestion.manager
    // query the database 
    queries.updateManager(manager, employee);
    await console.log("Employee Manager Changed!!");
    init()

  } else if (whatToDO.what === "view all roles") {
    // query the database for all roles
    const allRoles = await queries.allRoleSearch();
    // display the results
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    console.table(allRoles)
    init()

  } else if (whatToDO.what === "add role") {
    // query the database for all of the departments
    const allDepartments = await queries.allDepartmentSearch();
    // push all departments to department choices array to be used in the addRole Questions
    await allDepartments.forEach(element => {
      questions.choices.dptChoices.push(element.dptid + " " + element.department_name);
    });
    // ask additional questions for adding a role
    const addRoleQuestion = await inquirer.prompt(questions.addRoleQuestions);
    const role = addRoleQuestion.role;
    const salary = parseInt(addRoleQuestion.salary);
    const department = addRoleQuestion.department;
    // Query the database
    queries.addRole(role, salary, department);
    console.log("Role Added!");
    init()

  } else if (whatToDO.what === "remove role") {
    // query the databse for all roles
    const allRoles = await queries.allRoleSearch();
    // push all roles to role choices array to be used in the removeRole Question
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.title);
    });
    // ask additional remove role question
    const removeRoleQuestion = await inquirer.prompt(questions.removeRole);
    const role = removeRoleQuestion.removeRole
    // query the database
    queries.removeRole(role);
    console.log("Role Removed!")
    init()

  } else if (whatToDO.what === "add department") {
    // query the database for all departments
    const allDepartments = await queries.allDepartmentSearch();
    // grab the last department id in the array and add 1 to it
    const lastDpt = allDepartments.slice(-1)[0];
    const dptID = lastDpt.dptid + 1;
    // ask additional department question
    const addDptQuestion = await inquirer.prompt(questions.addDepartment);
    const department = addDptQuestion.department;
    // query the database
    queries.addDpt(dptID, department);
    console.log("Department Added!");
    init()

  } else if (whatToDO.what === "remove department") {
    // query the database for all departments
    const allDepartments = await queries.allDepartmentSearch();
    // push all departments to department choices array to be used in the remove department qestion
    await allDepartments.forEach(element => {
      questions.choices.dptChoices.push(element.department_name);
    });
    // ask additional remove department question
    const removeDptQuestion = await inquirer.prompt(questions.removeDepartment);
    const department = removeDptQuestion.removeDepartment
    // query the database
    queries.removeDepartment(department);
    console.log("Department Removed!")
    init()

  } else if (whatToDO.what === "view all departments") {
    // query the database for all departments 
    const allDpts = await queries.allDepartmentSearch();
    // display the results
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    console.table(allDpts)
    init()

  } else {
    // if exit is chosen, end the connection
    connection.end();
  }
}
init()

