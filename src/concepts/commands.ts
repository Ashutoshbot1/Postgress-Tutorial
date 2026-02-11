/*
 * SQL Commands
 * Commands keywords are case insensitive.
 * But table and column names are case sensitive.
 * As a convention we write commands keywords in uppercase.
 */

/*
 * Semicolon is used to end a command, but it is optional in psql.
 * We can write a single command in multiple lines.
 * Or we can write multiple commands in a single line.
 *
 * Example:
 *
 * CREATE DATABASE   
   test;
 * SELECT datname FROM pg_database;
 * SELECT datname FROM pg_database;
 *
 * SELECT datname FROM pg_database; SELECT datname FROM pg_database;
 ** Here semicolon plays a important role to separate the commands or to know when the command ends. 
 */

/*
 * 1. List down Databases
 * SELECT datname FROM pg_database;
 *
 */

/*
 * 2. Create Database
 * CREATE DATABASE dbname;
 */

/*
 * 3. Change Database
 * \c <db_name>
 */

/*
 * 4. Delete Database
 * DROP DATABASE dbname;
 */

/*
 * 5. Create Table
 * CREATE TABLE table_name (
 *  column1 datatype,
 *  column2 datatype,
 *  column3 datatype,
 * );
 *
 * Example:
 * CREATE TABLE users (
 *  id INT,
 *  name VARCHAR(255),
 *  email VARCHAR(255)
 * );
 *
 * NOTE:
 ** last column should not have comma, it can lead to syntax error.
 */

/*
 * 6. List down Table contents
 * SELECT * FROM table_name;
 *
 * Example:
 * SELECT * FROM users;
 */

/*
 * 7. Insert data into table
 * INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);
 *
 * Example:
 * INSERT INTO users (id, name, email) VALUES (1, 'John Doe', [EMAIL_ADDRESS]');
 *
 *
 * If we are inserting values in the same order as the columns are defined in the table, then we can skip the column names.
 * Example:
 * INSERT INTO users VALUES (1, 'John Doe', [EMAIL_ADDRESS]');
 *
 * NOTE:
 * Insert string values in single quotes, double quotes can lead to syntax error.
 * Insert number values without quotes.
 */
