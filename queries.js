const connection = require("./connect")

const allPeopleSearch = () => {
    var query = "SELECT * FROM employees";
    return connection.query(query);
}

const allRoleSearch = () => {
    var query = "SELECT * FROM roles";
    return connection.query(query);
}

const allManagerSearch = () => {
    var query = "SELECT * FROM employees WHERE is_manager = 1";
    return connection.query(query);
}

const addEmployee = () => {
    var query = "INSERT INTO employees (first_name, last_name, manager_id) VALUES ('Jacob', 'Lovins', 4, 14, false);";
    return connection.query(query);
}


module.exports = {
    allPeopleSearch,
    allRoleSearch,
    allManagerSearch,
    addEmployee

}

