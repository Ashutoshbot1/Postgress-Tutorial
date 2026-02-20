/*
 * CASE is like if else,it return value based on condition into new column
 * Syntax -: SELECT <column1>,<column2> CASE WHEN <condition> THEN <value> END AS <user_defined_column_name> FROM <table_name>;
 * e.g -: SELECT name,salary,CASE WHEN salary > 50000 THEN 'High' ELSE 'Low' END AS salary_range FROM employee;
 *
 * we can add multiple condition
 * Syntax -: SELECT <column1>,<column2> CASE WHEN <condition1> THEN <value1> WHEN <condition2> THEN <value2> END AS <user_defined_column_name> FROM <table_name>;
 * e.g -: SELECT name,salary,CASE WHEN salary > 50000 THEN 'High' WHEN salary > 30000 THEN 'Medium' ELSE 'Low' END AS salary_range FROM employee;
 *
 */
