/*
 * 1. CONCAT
 * CONCAT(string1, string2, ... stringN) returns a string that is the result of concatenating the input strings.
 ** How it is used in table
 * Suppose our table is like below -:
 * emp_id	first_name	last_name
 * 1	    Ashutosh	Singh
 * 2	    Rahul	Sharma
 * 3	    Amit	Verma
 
 * Now if we use, SELECT CONCAT(first_name, last_name) FROM employees
 * OUTPUT:
 * concat
 * ----------
 * AshutoshSingh
 * RahulSharma
 * AmitVerma
 * 
 * Here you can see column name is concat
 * To change it we use AS keyword (alis)
 * 
 * e.g SELECT CONCAT(first_name, last_name) AS full_name FROM employees;
 * OUTPUT:
 * full_name
 * ----------
 * AshutoshSingh
 * RahulSharma
 * AmitVerma
 * 
 */

/* Get multiple columns along with CONCAT
 * e.g SELECT emp_id, first_name, last_name, CONCAT(first_name, last_name) AS full_name FROM employees;
 * OUTPUT:
 * emp_id | first_name | last_name | full_name
 * --------+------------+-----------+------------
 * 1      | Ashutosh   | Singh     | AshutoshSingh
 * 2      | Rahul      | Sharma    | RahulSharma
 * 3      | Amit       | Verma     | AmitVerma
 */

/* CONCAT_WS
 * CONCAT_WS(separator, string1, string2, ... stringN) returns a string that is the result of concatenating the input strings.
 * e.g SELECT CONCAT_WS(' ', first_name, last_name) AS full_name FROM employees;
 * OUTPUT:
 * full_name
 * ----------
 * Ashutosh Singh
 * Rahul Sharma
 * Amit Verma
 */

/* 2. SUBSTRING
 * SUBSTRING(string, start, length) returns a substring of the given string.
 * e.g SELECT SUBSTRING(first_name, 1, 3) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * Ash
 * Rah
 * Ami
 */

/* 3. REPLACE
 * REPLACE(string, old_string, new_string) returns a string that is the result of replacing the old_string with the new_string in the given string.
 * e.g SELECT REPLACE(first_name, 'Ashutosh', 'Ashu') AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * Ashu
 * Rahul
 * Amit
 */

/* 4. REVERSE
 * REVERSE(string) returns a string that is the reverse of the given string.
 * e.g SELECT REVERSE(first_name) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * hotsuhsA
 * lhuaR
 * timA
 */

/* 5. LENGTH
 * LENGTH(string) returns the length of the given string.
 * e.g SELECT LENGTH(first_name) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * 8
 * 5
 * 4
 *
 ** Use LENGTH with WHERE
 * e.g SELECT * FROM employees WHERE LENGTH(first_name) > 5;
 * OUTPUT:
 * emp_id | first_name | last_name
 * -------+------------+-----------
 * 1      | Ashutosh   | Singh
 */

/* 6. LEFT and RIGHT
 * LEFT(string, length) returns the left part of the given string.
 * RIGHT(string, length) returns the right part of the given string.
 * e.g SELECT LEFT(first_name, 3) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * Ash
 * Rah
 * Ami
 *
 * e.g SELECT RIGHT(first_name, 3) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * osh
 * hul
 * mit
 */

/* 7. TRIM
 * TRIM(string) returns a string that is the result of removing the leading and trailing spaces from the given string.
 * e.g SELECT TRIM(first_name) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * Ashutosh
 * Rahul
 * Amit
 *
 ** LENGTH with TRIM
 * e.g SELECT LENGTH(TRIM(first_name)) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * 8
 * 5
 * 4
 */

/* 8. POSITION
 * POSITION(substring IN string) returns the position of the first occurrence of the substring in the string.
 * e.g SELECT POSITION('Ash' IN first_name) AS first_name FROM employees;
 * OUTPUT:
 * first_name
 * ----------
 * 1
 * 0
 * 0
 */
