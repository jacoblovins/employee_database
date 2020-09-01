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
INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Sales Lead", 100000, 1, true);

INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Salesperson", 80000, 1, false);

INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Lead Engineer", 150000, 2, true);

INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Software Engineer", 120000, 2, false);

INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Accountant", 125000, 3, false);

INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Legal Team Lead", 250000, 4, true);

INSERT INTO roles (title, salary, department_id, is_manager)
VALUES ("Lawyer", 190000, 4, false);

-- Employees
INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Jacob", "Lovins", 4, 14, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Dwight", "Shrute", 2, 3, false);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Michael", "Scott", 1, true);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Pam", "Beasley", 5, false);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Jim", "Halpert", 1, true);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Angela", "Martin", 5, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Kelly", "Kapoor", 7, 15, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Andy", "Bernard", 2, 5, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Ryan", "Howard", 7, 15, false);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Kevin", "Malone", 5, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Phyllis", "Vance", 2, 5, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Meredith", "Palmer", 2, 3, false);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Oscar", "Martinez", 5, false);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Stanley", "Hudson", 3, true);

INSERT INTO employees (first_name , last_name, role_id, is_manager)
VALUES ("Creed", "Bratton", 6, true);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Toby", "Flenderson", 7, 15, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Darryl", "Philbin", 4, 14, false);

INSERT INTO employees (first_name , last_name, role_id, manager_id, is_manager)
VALUES ("Erin", "Hannon", 4, 14, false);