function allPeopleSearch() {
    var query = "SELECT * FROM employees";
    connection.query(query, function (err, res) {
        if (err) throw err;
        const allEmployees = res.map(data => data.first_name + " " + data.last_name)
        // console.log(allEmployees);
        return allEmployees;
    });
}

function allRoleSearch() {
    var query = "SELECT * FROM roles";
    connection.query(query, function (err, res) {
        if (err) throw err;
        const allRoles = res.map(data => data.title)
        // console.log(allRoles);
        return allRoles;
    });
}

module.exports =
{
    allPeopleSearch,
    allRoleSearch
}