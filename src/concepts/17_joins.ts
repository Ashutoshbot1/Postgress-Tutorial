/*
 * SQL JOINS
 *
 * JOINs are used to combine rows from two or more tables based on a related column
 * between them (usually Primary Key and Foreign Key).
 *
 * --------------------------------------------------------------------------
 * 1. INNER JOIN (The Default)
 * --------------------------------------------------------------------------
 * Definition: Returns records that have matching values in both tables.
 * Visual: Intersection of two circles (Venn Diagram).
 *
 * Syntax:
 * SELECT columns
 * FROM table_a
 * INNER JOIN table_b ON table_a.id = table_b.a_id;
 *
 * Example:
 * SELECT emp.name, dept.dept_name
 * FROM employees emp
 * INNER JOIN departments dept ON emp.dept_id = dept.id;
 *
 * --------------------------------------------------------------------------
 * 2. LEFT JOIN (or LEFT OUTER JOIN)
 * --------------------------------------------------------------------------
 * Definition: Returns all records from the left table, and the matched records
 * from the right table. If no match, NULLs are returned for the right table.
 *
 * Example:
 * SELECT emp.name, dept.dept_name
 * FROM employees emp
 * LEFT JOIN departments dept ON emp.dept_id = dept.id;
 * -- (Shows all employees, even if they aren't assigned to a department)
 *
 * --------------------------------------------------------------------------
 * 3. RIGHT JOIN (or RIGHT OUTER JOIN)
 * --------------------------------------------------------------------------
 * Definition: Returns all records from the right table, and the matched records
 * from the left table. If no match, NULLs are returned for the left table.
 *
 * Example:
 * SELECT emp.name, dept.dept_name
 * FROM employees emp
 * RIGHT JOIN departments dept ON emp.dept_id = dept.id;
 * -- (Shows all departments, even if they have no employees)
 *
 * --------------------------------------------------------------------------
 * 4. FULL JOIN (or FULL OUTER JOIN)
 * --------------------------------------------------------------------------
 * Definition: Returns all records when there is a match in either left or right table.
 *
 * Example:
 * SELECT emp.name, dept.dept_name
 * FROM employees emp
 * FULL JOIN departments dept ON emp.dept_id = dept.id;
 *
 * --------------------------------------------------------------------------
 * 5. CROSS JOIN
 * --------------------------------------------------------------------------
 * Definition: Returns the Cartesian product of the two tables (every row from A
 * paired with every row from B). No "ON" clause used.
 *
 * Example:
 * SELECT students.name, courses.name
 * FROM students
 * CROSS JOIN courses;
 *
 * --------------------------------------------------------------------------
 * 6. SELF JOIN
 * --------------------------------------------------------------------------
 * Definition: A regular join, but the table is joined with itself. Requires Aliases.
 * Use Case: Hierarchical data (e.g., employee-manager relationships).
 *
 * Example:
 * SELECT e.name AS Employee, m.name AS Manager
 * FROM employees e
 * INNER JOIN employees m ON e.manager_id = m.id;
 *
 * --------------------------------------------------------------------------
 * DIAGRAMMATIC REPRESENTATION
 * --------------------------------------------------------------------------
 * ```mermaid
 * graph TD
 *     A[Table A] -- Inner Join --- B[Table B]
 *     style A fill:#f9f,stroke:#333
 *     style B fill:#ccf,stroke:#333
 * ```
 */
