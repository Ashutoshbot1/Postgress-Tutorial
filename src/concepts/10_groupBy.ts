/*
 * 1. GROUP BY
 * GROUP BY groups rows that have the same values in specified columns into summary rows.
 * GROUP BY can be used with aggregate functions(SUM, AVG, etc.) to perform calculations on each group.
 * Syntax-: SELECT <column_name> FROM <table_name> GROUP BY <column_name>;
 * 
 ** why SELECT * ... can't be used with GROUP BY
 * When you use GROUP BY, SQL combines multiple rows into one row per group.
 * If you use SELECT *, you are asking for all columns from all rows.
 * But since multiple rows are combined into one row per group, it is not possible to return all columns from all rows.
 * Suppose your table is:
    emp_id	dept	salary
    1	    IT	    50000
    2	    IT	    60000
    3	    HR	    40000

 * now if you use SELECT * FROM employees GROUP BY dept
 * it will get confused that for IT dept it should return emp_id 1 or 2
 */
