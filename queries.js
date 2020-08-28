function allPeopleSearch() {
    var query = "SELECT * FROM employees";
    connection.query(query, function (err, res) {
        if (err) throw err;
        const allEmployees = res.map(data => data.first_name + " " + data.last_name)
        console.log(allEmployees);
        return allEmployees;
    });
}

module.exports = allPeopleSearch();