/*
1. NOT NULL: Column cannot have NULL values
   Example:
   CREATE TABLE users (
     id INT,
     name VARCHAR(255) NOT NULL
   );
*/

/*
2. UNIQUE: Column cannot have duplicate values
   Example:
   CREATE TABLE users (
     id INT,
     email VARCHAR(255) UNIQUE
   );
*/

/*
3. PRIMARY KEY: Column cannot have duplicate values and NULL values
   Example:
   CREATE TABLE users (
     id INT PRIMARY KEY,
     name VARCHAR(255)
   );
*/

/*
4. FOREIGN KEY: Column cannot have values that are not present in the referenced table
   Example:
   CREATE TABLE users (
     id INT,
     name VARCHAR(255),
     FOREIGN KEY (id) REFERENCES orders(user_id)
   );
*/

/*
5. CHECK: Column cannot have values that do not satisfy the condition
   Example:
   CREATE TABLE users (
     id INT,
     age INT CHECK (age >= 18)
   );
*/

/*
6. DEFAULT: Column cannot have NULL values
   Example:
   CREATE TABLE users (
     id INT,
     acc_type VARCHAR(50) NOT NULL DEFAULT 'Savings'
   )
*/

/*
7. AUTO_INCREMENT: Column cannot have NULL values
   Example:
   CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     name VARCHAR(255) NOT NULL
   );
*/
