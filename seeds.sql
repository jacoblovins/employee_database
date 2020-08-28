-- Departments
INSERT INTO departments (id, department_name)
VALUES (1, "Sales");

INSERT INTO departments (id, department_name)
VALUES (2, "Engineering");

INSERT INTO departments (id, department_name)
VALUES (3, "Finance");

INSERT INTO departments (id, department_name)
VALUES (4, "Legal");

-- Roles
INSERT INTO roles (id, title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES ("Salesperson", 80000, 1);

INSERT INTO roles (id, title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO roles (id, title, salary, department_id)
VALUES ("Accountant", 125000, 3);

INSERT INTO roles (id, title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO roles (id, title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

-- Employees
INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Jacob", "Lovins", 4, 14);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Dwight", "Shrute", 2, 3);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Michael", "Scott", 1);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Pam", "Beasley", 5);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Jim", "Halpert", 1);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Angela", "Martin", 5);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Kelly", "Kapoor", 7, 15);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Andy", "Bernard", 2, 5);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Ryan", "Howard", 7, 15);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Kevin", "Malone", 5);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Phyllis", "Vance", 2, 5);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Meredith", "Palmer", 2, 3);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Oscar", "Martinez", 5);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Stanley", "Hudson", 3);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Creed", "Bratton", 6);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Toby", "Flenderson", 7, 15);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Darryl", "Philbin", 4, 14);

INSERT INTO employees (id, first_name , last_name, role_id, manager_id)
VALUES ("Erin", "Hannon", 4, 14);