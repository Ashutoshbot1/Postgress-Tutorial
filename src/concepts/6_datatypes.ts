/*
 * 1. Integer
 * INT or INTEGER: Whole numbers (positive or negative)
 *
 * Example:
 * CREATE TABLE users (
 *   id INT,
 *   age INT
 * );
 */

/*
 * 2. Decimal
 * DECIMAL(precision, scale): Exact decimal numbers
 * precision: Total number of digits (including decimal part)
 * scale: Number of digits after the decimal point
 *
 * Example:
 * CREATE TABLE products (
 *   id INT,
 *   price DECIMAL(10, 2)
 * );
 */

/*
 * 3. String
 * VARCHAR(length): Variable-length string
 * CHAR(length): Fixed-length string
 * TEXT: Large text
 *
 * Example:
 * CREATE TABLE users (
 *   id INT,
 *   name VARCHAR(255),
 *   description TEXT
 * );
 */

/*
 * 4. Boolean
 * BOOLEAN: True or false
 *
 * Example:
 * CREATE TABLE users (
 *   id INT,
 *   is_active BOOLEAN
 * );
 */

/*
 * 5. Date and Time
 * DATE: Date (YYYY-MM-DD)
 * TIME: Time (HH:MM:SS)
 * TIMESTAMP: Date and time
 * we can use CURRENT_DATE and CURRENT_TIME to get the current date and time to set default values
 *
 * Example:
 * CREATE TABLE users (
 *   id INT,
 *   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
 * );
 */

/*
 * 6. Array
 * ARRAY: Array of values
 *
 * Example:
 * CREATE TABLE users (
 *   id INT,
 *   hobbies TEXT[]
 * );
 */

/*
 * 7. JSON
 * JSON: JSON data
 * JSONB: Binary JSON data
 *
 * Example:
 * CREATE TABLE users (
 *   id INT,
 *   metadata JSONB
 * );
 */
