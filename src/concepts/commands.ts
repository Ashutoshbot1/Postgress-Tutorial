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
 * List down Databases
 * SELECT datname FROM pg_database;
 *
 */

/*
 * Create Database
 * CREATE DATABASE dbname;
 *
 */
