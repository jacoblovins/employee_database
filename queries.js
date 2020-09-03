const connection = require("./connect")

// Grabs all employees and their info from the database
const allPeopleSearch = () => {
    const query = "SELECT * FROM employees";
    return connection.query(query);
}

// Grabs all roles and corresponding departments
const allRoleSearch = () => {
    const query = "SELECT roles.id, roles.title, roles.salary, departments.department_name FROM roles LEFT JOIN departments ON roles.department_id = departments.dptid";
    return connection.query(query);
}

// Grabs all departments and department id's
const allDepartmentSearch = () => {
    const query = "SELECT * FROM departments";
    return connection.query(query);
}

// Grabs all managers
const allManagerSearch = () => {
    const query = "SELECT * FROM employees WHERE is_manager = 1";
    return connection.query(query);
}

// Grabs all employees and their roles and departments in proper order for display
const viewAllEmployees = () => {
    const query = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT (manager.first_name, ' ', manager.last_name) as manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.dptid LEFT JOIN employees manager ON employees.manager_id = manager.id";
    return connection.query(query);
}

// Grabs employees based on the department chosen
const viewEmployeesByDepartment = (department) => {
    const query = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.department_name, CONCAT (manager.first_name, ' ', manager.last_name) as manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.dptid LEFT JOIN employees manager ON employees.manager_id = manager.id WHERE departments.department_name = ?";
    const dptName = [department]
    return connection.query(query, dptName);
}

// Grabs employees based on the manager chosen
const viewEmployeesByManager = (manager) => {
    let managerName;
    if(manager == "Michael Scott"){
        managerName = [1];
    } else {
        managerName = [2];
    }
    const query = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department_name, roles.salary, CONCAT (manager.first_name, ' ', manager.last_name) as manager FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.dptid LEFT JOIN employees manager ON employees.manager_id = manager.id WHERE employees.manager_id = ?";
    return connection.query(query, managerName);
}

// Adds a new employee row into the employees table
const addEmployee = (firstname, lastname, roleID, isManager, managerID) => {
    const query = "INSERT INTO employees (first_name, last_name, role_id, is_manager, manager_id) VALUES (?)";
    const values = [firstname, lastname, roleID, isManager, managerID]
    return connection.query(query, [values]);
}

// Adds a new role row into the roles table
const addRole = (role, salary, department) => {
    const dptArr = department.split(" ")
    const roleArr = [role, salary, parseInt(dptArr[0])]
    const query = "INSERT INTO roles (title, salary, department_id) VALUES (?)";
    return connection.query(query, [roleArr]);
}

// Adds a new department row into the departments table
const addDpt = (id, department) => {
    const dptID = id
    const dpt = department
    const addArr = [dptID, dpt]
    const query = "INSERT INTO departments (dptid, department_name) VALUES (?)";
    return connection.query(query, [addArr]);
}

// Removes selected employee row from the employees table
const removeEmployee = (remove) => {
    const name = remove.split(" ")
    const query = "DELETE FROM employees WHERE first_name = ? AND last_name = ?";
    return connection.query(query, name);
}

// Removes selected role row from the roles table
const removeRole = (role) => {
    const query = "DELETE FROM roles WHERE title = ?";
    return connection.query(query, [role]);
}

// Removes selected department row from the departments table
const removeDepartment = (department) => {
    const query = "DELETE FROM departments WHERE department_name = ?";
    return connection.query(query, department);
}

// Changes role assignment for the selected employee
const updateRole = (roleEmployee, roleChoice) => {
    const roleArr = roleChoice.split(" ")
    const empArr = roleEmployee.split(" ")
    const query = "UPDATE employees SET role_id = ? WHERE first_name = ? AND last_name = ?";
    const roleParams = [roleArr[0], ...empArr]
    return connection.query(query, roleParams);
}

// Changes manager assignment for the selected employee
const updateManager = (manager, employee) => {
    let id;
    if(manager === "Michael Scott"){
        id = 1
    } else {
        id = 2
    }
    const empArr = employee.split(" ")
    const query = "UPDATE employees SET manager_id = ? WHERE first_name = ? AND last_name = ?";
    const managerParams = [id, ...empArr]
    return connection.query(query, managerParams);
}

module.exports = {
    allPeopleSearch,
    allRoleSearch,
    allManagerSearch,
    addEmployee,
    viewAllEmployees,
    viewEmployeesByDepartment,
    viewEmployeesByManager,
    removeEmployee,
    updateRole,
    updateManager,
    addRole,
    allDepartmentSearch,
    removeRole,
    addDpt,
    removeDepartment
}

