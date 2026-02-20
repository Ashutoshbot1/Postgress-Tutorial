/*
 * FOREIGN KEY (FK) CONCEPT
 *
 * A Foreign Key is a column (or group of columns) in one table that refers to the Primary Key
 * in another table. It establishes a link between the data in the two tables and enforces
 * "Referential Integrity".
 *
 * Why use Foreign Keys?
 * 1. Consistency: Ensures that data in the related table exists.
 * 2. Integrity: Prevents orphaned records (e.g., an order for a non-existent customer).
 *
 * --------------------------------------------------------------------------
 * 1. SQL SYNTAX
 * --------------------------------------------------------------------------
 * -- Inside CREATE TABLE:
 * CREATE TABLE orders (
 *     order_id SERIAL PRIMARY KEY,
 *     product_name VARCHAR(100),
 *     user_id INT REFERENCES users(id) -- Simple inline reference
 * );
 *
 * -- Using ALTER TABLE (recommended for naming constraints):
 * ALTER TABLE orders
 * ADD CONSTRAINT fk_user_id
 * FOREIGN KEY (user_id)
 * REFERENCES users(id);
 *
 * --------------------------------------------------------------------------
 * 2. REFERENTIAL ACTIONS (ON DELETE / ON UPDATE)
 * --------------------------------------------------------------------------
 * What happens when a parent record (in 'users') is deleted?
 *
 * 1. CASCADE: Automatically delete/update the child records.
 *    e.g., user_id INT REFERENCES users(id) ON DELETE CASCADE
 *
 * 2. SET NULL: Set the foreign key column in child records to NULL.
 *    e.g., user_id INT REFERENCES users(id) ON DELETE SET NULL
 *
 * 3. RESTRICT (Default): Prevents deletion of the parent if child records exist.
 *
 * 4. NO ACTION: Similar to RESTRICT, but checked at the end of the transaction.
 *
 * --------------------------------------------------------------------------
 * 3. DIAGRAMMATIC REPRESENTATION
 * --------------------------------------------------------------------------
 *
 * Parent Table (Primary Key) <----- Child Table (Foreign Key)
 *
 * Mermaid Diagram:
 * ```mermaid
 * erDiagram
 *   PARENT_TABLE ||--o{ CHILD_TABLE : "referenced by"
 *   PARENT_TABLE {
 *     int id PK
 *     string name
 *   }
 *   CHILD_TABLE {
 *     int id PK
 *     int parent_id FK
 *     string data
 *   }
 * ```
 *
 * Example SQL with Options:
 * CREATE TABLE posts (
 *     id SERIAL PRIMARY KEY,
 *     title VARCHAR(200),
 *     author_id INT,
 *     CONSTRAINT fk_author
 *       FOREIGN KEY(author_id)
 *       REFERENCES users(id)
 *       ON DELETE CASCADE -- If user is deleted, their posts are also deleted
 * );
 */
