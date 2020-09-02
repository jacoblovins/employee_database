/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS employee_tracker;

/* Create database */
CREATE DATABASE employee_tracker;
USE employee_tracker;

/* Create new table */
CREATE TABLE departments (
  dptid INT NOT NULL,
  department_name VARCHAR(30) NULL,
  PRIMARY KEY (dptid)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary INT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES departments(dptid)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  is_manager BOOLEAN,
  PRIMARY KEY (id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
);





