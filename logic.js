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
  questions.choices.dptChoices.splice(0);

  if (whatToDO.what === "view all employees") {
    const allPeople = await queries.viewAllEmployees();
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    console.table(allPeople)
    init()

  } else if (whatToDO.what === "view all employees by department") {
    const departmentChoice = await inquirer.prompt(questions.employeeByDepartment);
    const department = departmentChoice.department;
    const departmentEmployees = await queries.viewEmployeesByDepartment(department);
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    await console.table(departmentEmployees);
    init()

  } else if (whatToDO.what === "view all employees by manager") {
    const managerChoice = await inquirer.prompt(questions.employeeByManager);
    const manager = managerChoice.manager;
    const managerEmployees = await queries.viewEmployeesByManager(manager);
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    await console.table(managerEmployees);
    init()

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
    init()

  } else if (whatToDO.what === "remove employee") {
    const allPpl = await queries.allPeopleSearch();
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    const removeChoice = await inquirer.prompt(questions.removeEmployeeQuestion);
    const remove = removeChoice.remove;
    queries.removeEmployee(remove);
    await console.log("Employee Removed!!");
    init()

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
    queries.updateRole(roleEmployee, roleChoice);
    await console.log("Employee Role Changed!!");
    init()

  } else if (whatToDO.what === "update employee manager") {
    const allPpl = await queries.allPeopleSearch();
    allPpl.forEach(element => {
      questions.choices.peopleChoices.push(element.first_name + " " + element.last_name);
    });
    const managerQuestion = await inquirer.prompt(questions.updateManager);
    const employee = managerQuestion.employee;
    const manager = managerQuestion.manager
    queries.updateManager(manager, employee);
    await console.log("Employee Manager Changed!!");
    init()

  } else if (whatToDO.what === "view all roles") {
    const allRoles = await queries.allRoleSearch();
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    console.table(allRoles)
    init()

  } else if (whatToDO.what === "add role") {
    const allDepartments = await queries.allDepartmentSearch();
    await allDepartments.forEach(element => {
      questions.choices.dptChoices.push(element.dptid + " " + element.department_name);
    });
    const addRoleQuestion = await inquirer.prompt(questions.addRoleQuestions);
    const role = addRoleQuestion.role;
    const salary = parseInt(addRoleQuestion.salary);
    const department = addRoleQuestion.department;
    queries.addRole(role, salary, department);
    console.log("Role Added!");
    init()

  } else if (whatToDO.what === "remove role") {
    const allRoles = await queries.allRoleSearch();
    allRoles.forEach(element => {
      questions.choices.roleChoices.push(element.title);
    });
    const removeRoleQuestion = await inquirer.prompt(questions.removeRole);
    const role = removeRoleQuestion.removeRole
    queries.removeRole(role);
    console.log("Role Removed!")
    init()

  } else if (whatToDO.what === "add department") {
    const allDepartments = await queries.allDepartmentSearch();
    const lastDpt = allDepartments.slice(-1)[0];
    const dptID = lastDpt.dptid + 1;
    const addDptQuestion = await inquirer.prompt(questions.addDepartment);
    const department = addDptQuestion.department;
    queries.addDpt(dptID, department);
    console.log("Department Added!");
    init()

  } else if (whatToDO.what === "remove department") {
    const allDepartments = await queries.allDepartmentSearch();
    await allDepartments.forEach(element => {
      questions.choices.dptChoices.push(element.department_name);
    });
    const removeDptQuestion = await inquirer.prompt(questions.removeDepartment);
    const department = removeDptQuestion.removeDepartment
    queries.removeDepartment(department);
    console.log("Department Removed!")
    init()

  } else if (whatToDO.what === "view all departments") {
    const allDpts = await queries.allDepartmentSearch();
    console.log('\n', "<-------------------------------------------------------------------->", '\n')
    console.table(allDpts)
    init()

  } else {
    connection.end();
  }
}
init()

