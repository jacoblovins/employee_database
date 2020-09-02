-- Departments
INSERT INTO departments (department_name)
VALUES ("Sales");

INSERT INTO departments (department_name)
VALUES ("Engineering");

INSERT INTO departments (department_name)
VALUES ("Finance");

INSERT INTO departments (department_name)
VALUES ("Legal");

-- Roles
INSERT INTO roles (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("Accountant", 125000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

-- Employees
INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Michael", "Scott", 1, true);

INSERT INTO employees (first_name, last_name, role_id, is_manager)
VALUES ("Jim", "Halpert", 1, true);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Jacob", "Lovins", 4, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Dwight", "Shrute", 2, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Pam", "Beasley", 5, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Angela", "Martin", 5, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Kelly", "Kapoor", 7, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Andy", "Bernard", 2, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Ryan", "Howard", 7, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Kevin", "Malone", 5, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Phyllis", "Vance", 2, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Meredith", "Palmer", 2, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Oscar", "Martinez", 5, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Stanley", "Hudson", 3, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Creed", "Bratton", 6, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Toby", "Flenderson", 7, 1, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Darryl", "Philbin", 4, 2, false);

INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager)
VALUES ("Erin", "Hannon", 4, 2, false);