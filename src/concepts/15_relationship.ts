/*
 * DATABASE RELATIONSHIPS
 *
 * Relationships are connections between two or more tables that help organize data efficiently.
 * There are three main types of relationships:
 * 1. One-to-One (1:1)
 * 2. One-to-Many (1:N)
 * 3. Many-to-Many (M:N)
 *
 * --------------------------------------------------------------------------
 * 1. ONE-TO-ONE (1:1)
 * --------------------------------------------------------------------------
 * Definition: Each record in Table A is associated with exactly one record in Table B, and vice versa.
 * Implementation: Add a Primary Key of one table as a Unique Foreign Key in the other table.
 *
 * Representation:
 * [User] 1 <-----> 1 [Profile]
 *
 * Mermaid Diagram:
 * ```mermaid
 * erDiagram
 *   USERS ||--|| PROFILES : has
 * ```
 *
 * SQL Example:
 * CREATE TABLE users (
 *     id SERIAL PRIMARY KEY,
 *     username VARCHAR(50) NOT NULL
 * );
 *
 * CREATE TABLE profiles (
 *     id SERIAL PRIMARY KEY,
 *     bio TEXT,
 *     user_id INT UNIQUE REFERENCES users(id) -- Unique ensures 1:1
 * );
 *
 * --------------------------------------------------------------------------
 * 2. ONE-TO-MANY (1:N)
 * --------------------------------------------------------------------------
 * Definition: Each record in Table A can be associated with multiple records in Table B,
 * but each record in Table B is associated with only one record in Table A.
 * Implementation: Add the Primary Key of the "One" side as a Foreign Key in the "Many" side.
 *
 * Representation:
 * [Department] 1 <-----> N [Employees]
 *
 * Mermaid Diagram:
 * ```mermaid
 * erDiagram
 *   DEPARTMENT ||--o{ EMPLOYEES : employs
 * ```
 *
 * SQL Example:
 * CREATE TABLE departments (
 *     id SERIAL PRIMARY KEY,
 *     dept_name VARCHAR(50) NOT NULL
 * );
 *
 * CREATE TABLE employees (
 *     id SERIAL PRIMARY KEY,
 *     emp_name VARCHAR(50) NOT NULL,
 *     dept_id INT REFERENCES departments(id) -- Foreign key on the "Many" side
 * );
 *
 * --------------------------------------------------------------------------
 * 3. MANY-TO-MANY (M:N)
 * --------------------------------------------------------------------------
 * Definition: Multiple records in Table A can be associated with multiple records in Table B.
 * Implementation: Requires a "Junction Table" (also called Link/Bridge table) that
 * contains foreign keys from both tables.
 *
 * Representation:
 * [Students] M <-----> N [Courses]
 *
 * Mermaid Diagram:
 * ```mermaid
 * erDiagram
 *   STUDENTS }o--o{ COURSES : enrolls
 *   STUDENTS ||--o{ ENROLLMENTS : is_in
 *   COURSES ||--o{ ENROLLMENTS : has
 * ```
 *
 * SQL Example:
 * CREATE TABLE students (
 *     id SERIAL PRIMARY KEY,
 *     student_name VARCHAR(50) NOT NULL
 * );
 *
 * CREATE TABLE courses (
 *     id SERIAL PRIMARY KEY,
 *     course_name VARCHAR(50) NOT NULL
 * );
 *
 * -- Junction Table
 * CREATE TABLE enrollments (
 *     student_id INT REFERENCES students(id),
 *     course_id INT REFERENCES courses(id),
 *     PRIMARY KEY (student_id, course_id)
 * );
 */
