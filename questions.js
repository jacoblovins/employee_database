// const allQuestions = (questionChoices) => {
const choices = {
    peopleChoices: [],
    roleChoices: [],
    managerChoices: []
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
                "add employee",
                "remove employee",
                "update employee role",
                "update employee manager",
                "view all roles",
                "add role",
                "remove role"]
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
        choices: choices.peopleChoices
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

const updateManager =
    [
        {
            type: "list",
            name: "updateManagerEmployee",
            message: "Which employee do you want to update?",
            choices: choices.peopleChoices
        },
        {
            type: "list",
            name: "updateRole",
            message: "Which manager do you want the employee to have?",
            choices: choices.managerChoices
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
            name: "updateRole",
            message: "Which role do you want the employee to have?",
            choices: choices.roleChoices
        }
    ]

const addRole =
    [
        {
            type: "input",
            name: "role",
            message: "What role would you like to add?"
        }
    ]

const removeRole =
    [
        {
            type: "input",
            name: "removeRole",
            message: "What role would you like to remove?"
        }
    ]
// }

module.exports = {
    initialQuest,
    addEmployeeQuestions,
    removeEmployeeQuestion,
    updateManager,
    updateRole,
    addRole,
    removeRole,
    choices
};