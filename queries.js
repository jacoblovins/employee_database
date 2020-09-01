const connection = require("./connect")


const allPeopleSearch = () => {
    const query = "SELECT * FROM employees";
    return connection.query(query);
}

const viewAllEmployees = () => {
    const query = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) as manager FROM employees LEFT JOIN roles ON employees.role_id=roles.id LEFT JOIN departments ON roles.department_id=departments.id LEFT JOIN employees manager ON employees.manager_id=manager.id";
    return connection.query(query);
}

const viewEmployeesByDepartment = (department) => {
    const query = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) as manager FROM employees LEFT JOIN roles ON employees.role_id=roles.id LEFT JOIN departments ON roles.department_id=departments.id LEFT JOIN employees manager ON employees.manager_id=manager.id WHERE departments.department_name = ?";
    const dptName = [department]
    return connection.query(query, dptName);
}

const viewEmployeesByManager = (manager) => {
    let managerName;
    if(manager == "Michael Scott"){
        managerName = [1];
    } else {
        managerName = [2];
    }
    const query = "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.department_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) as manager FROM employees LEFT JOIN roles ON employees.role_id=roles.id LEFT JOIN departments ON roles.department_id=departments.id LEFT JOIN employees manager ON employees.manager_id=manager.id WHERE employees.manager_id = ?";
    return connection.query(query, managerName);
}

const addEmployee = (firstname, lastname, roleID, isManager, managerID) => {
    const query = "INSERT INTO employees (first_name, last_name, role_id, is_manager, manager_id) VALUES (?)";
    const values = [firstname, lastname, roleID, isManager, managerID]
    return connection.query(query, [values]);
}

const removeEmployee = (remove) => {
    const name = remove.split(" ")
    const query = "DELETE FROM employees WHERE first_name = ? AND last_name = ?";
    return connection.query(query, name);
}

const updateRoleQuery = (roleEmployee, roleChoice) => {
    const roleArr = roleChoice.split(" ")
    const empArr = roleEmployee.split(" ")
    const query = "UPDATE employees SET role_id = ? WHERE first_name = ? AND last_name = ?";
    const roleParams = [roleArr[0], ...empArr]
    return connection.query(query, roleParams);
}

const updateManagerQuery = (manager, employee) => {
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

const allRoleSearch = () => {
    const query = "SELECT * FROM roles LEFT JOIN departments ON roles.department_id=departments.id";
    return connection.query(query);
}

const allManagerSearch = () => {
    const query = "SELECT * FROM employees WHERE is_manager = 1";
    return connection.query(query);
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
    updateRoleQuery,
    updateManagerQuery

}

