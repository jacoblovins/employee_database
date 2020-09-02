const choices = {
    peopleChoices: [],
    roleChoices: [],
    managerChoices: ["N/A"],
    dptChoices: []
}

const initialQuest = [
    {
        type: "list",
        name: "what",
        message: "What would you like to do?",
        choices:
            ["view all employees",
                "view all employees by department",
                "view all employees by manager",
                "view all roles",
                "view all departments",
                "add employee",
                "add role",
                "add department",
                "remove employee",
                "remove role",
                "remove department",
                "update employee role",
                "update employee manager",
                "EXIT"]
    }
]

const addEmployeeQuestions = [
    {
        type: "input",
        name: "firstname",
        message: "What is the employee's first name?"
    },
    {
        type: "input",
        name: "lastname",
        message: "What is the employee's last name?"
    },
    {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        choices: choices.roleChoices
    },
    {
        type: "list",
        name: "employeeManager",
        message: "Assign employee to a manager.",
        choices: ["N/A", "Michael Scott", "Jim Halpert"]
    }
]

const removeEmployeeQuestion =
    [
        {
            type: "list",
            name: "remove",
            message: "Which employee do you want to remove?",
            choices: choices.peopleChoices
        }
    ]

const employeeByDepartment = [
    {
        type: "list",
        name: "department",
        message: "Which department's team would you like to search?",
        choices: ["Sales", "Engineering", "Finance", "Legal"]
    }
]

const employeeByManager = [
    {
        type: "list",
        name: "manager",
        message: "Which Manager's team would you like to search?",
        choices: ["Michael Scott", "Jim Halpert"]
    }
]

const updateManager =
    [
        {
            type: "list",
            name: "employee",
            message: "Which employee do you want to update?",
            choices: choices.peopleChoices
        },
        {
            type: "list",
            name: "manager",
            message: "Which manager do you want the employee to have?",
            choices: ["Michael Scott", "Jim Halpert"]
        }
    ]

const updateRole =
    [
        {
            type: "list",
            name: "updateRoleEmployee",
            message: "Which employee do you want to update?",
            choices: choices.peopleChoices
        },
        {
            type: "list",
            name: "role",
            message: "Which role do you want the employee to have?",
            choices: choices.roleChoices
        }
    ]

const addRoleQuestions =
    [
        {
            type: "input",
            name: "role",
            message: "What role would you like to add?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the salary of the role?"
        },
        {
            type: "list",
            name: "department",
            message: "What is the department of the role?",
            choices: choices.dptChoices
        }
    ]

const removeRole =
    [
        {
            type: "list",
            name: "removeRole",
            message: "What role would you like to remove?",
            choices: choices.roleChoices
        }
    ]

const addDepartment =
    [
        {
            type: "input",
            name: "department",
            message: "What department would you like to add?",
        }
    ]

const removeDepartment =
    [
        {
            type: "list",
            name: "removeDepartment",
            message: "What department would you like to remove?",
            choices: choices.dptChoices
        }
    ]



module.exports = {
    initialQuest,
    addEmployeeQuestions,
    removeEmployeeQuestion,
    updateManager,
    updateRole,
    addRoleQuestions,
    removeRole,
    choices,
    employeeByDepartment,
    employeeByManager,
    addDepartment,
    removeDepartment
};