/*
1. WHERE: Filters rows based on a condition.

Example:
SELECT * FROM users WHERE age > 18;
*/

/*
2. ORDER BY: Sorts rows based on a column.

Example:
SELECT * FROM users ORDER BY age ASC;
*/

/*
3. LIMIT: Limits the number of rows returned.

Example:
SELECT * FROM users LIMIT 10;
*/

/*
4.LIKE: Filters rows based on a pattern.

Example:
SELECT * FROM users WHERE name LIKE 'John%';
*/

/*
5. ILIKE: Filters rows based on a pattern.
* It is case insensitive.
** % symbol 
  -> matches any number of characters
  -> '%a' at the end matches any number of characters ending with a
  -> 'a%' at the start matches any number of characters starting with a
  -> '%a%' matches any number of characters containing a
** _ symbol 
  -> matches a single character
  -> '__' matches 2 characters
  -> '___' matches 3 characters
  -> '_a_' matches 3 characters containing a
  -> '_a' matches 2 characters starting with a
  -> 'a_' matches 2 characters ending with a
  -> '_a%' matches any number of characters containing a in second position and any number of characters at the end
  -> '%a_' matches any number of characters containing a in second last position and any number of characters at the start
   

Example:
SELECT * FROM users WHERE name ILIKE 'john%';
*/

/*
6. GROUP BY: Groups rows based on a column.

Example:
SELECT * FROM users GROUP BY age;
*/

/*
7. HAVING: Filters groups based on a condition.

Example:
SELECT * FROM users HAVING age > 18;
*/

/*
8. JOIN: Combines rows from two or more tables based on a related column between them.

Example:
SELECT * FROM users JOIN orders ON users.id = orders.user_id;
*/

/*
9. UNION: Combines the result sets of two or more SELECT statements.

Example:
SELECT * FROM users WHERE age > 18
UNION
SELECT * FROM users WHERE age < 18;
*/

// ----------- OPERATORS -----------

/*
1. Comparison Operators
* It returns rows that are in the specified values.

Example:
SELECT * FROM users WHERE age > 18;
*/

/*
2. Logical Operators
* It returns rows that are in the specified values.

Example:
SELECT * FROM users WHERE age > 18 AND age < 30;
*/

/*
3. OR Operator
* It returns rows that are in the specified values.

Example:
SELECT * FROM users WHERE age > 18 OR age < 30;
*/

/*
4. IN Operator
* It returns rows that are in the specified values.

Example:
SELECT * FROM users WHERE age IN (18, 19, 20);
*/

/*
5. NOT IN Operator
* It returns rows that are not in the specified values.

Example:
SELECT * FROM users WHERE age NOT IN (18, 19, 20);
*/

/*
6. BETWEEN Operator
* It returns rows that are between the specified values.

Example:
SELECT * FROM users WHERE age BETWEEN 18 AND 30;
*/

/*
7. NOT BETWEEN Operator
* It returns rows that are not between the specified values.

Example:
SELECT * FROM users WHERE age NOT BETWEEN 18 AND 30;
*/

/*
 8. DISTINCT Operator
 * It returns only unique values.

Example:
SELECT DISTINCT age FROM users;
*/

/*
9. ORDER BY Operator
* It returns rows that are sorted based on the specified values.
* by default it is in ascending order.
* we can use DESC to sort in descending order.

Example:
SELECT * FROM users ORDER BY age ; // by default it is in ascending order
SELECT * FROM users ORDER BY age DESC;
SELECT * FROM users ORDER BY age ASC;
*/
