/*
 * DATABASE VIEWS
 *
 * A View is a "Virtual Table" based on the result-set of an SQL statement.
 * It does not store data itself but provides a way to look at data from one or
 * more tables (Base Tables).
 *
 * --------------------------------------------------------------------------
 * 1. BASIC SYNTAX
 * --------------------------------------------------------------------------
 * -- Creating a View:
 * CREATE VIEW view_name AS
 * SELECT column1, column2, ...
 * FROM table_name
 * WHERE condition;
 *
 * -- Updating/Replacing a View:
 * CREATE OR REPLACE VIEW view_name AS ...;
 *
 * -- Deleting a View:
 * DROP VIEW view_name;
 *
 * --------------------------------------------------------------------------
 * 2. WHY USE VIEWS?
 * --------------------------------------------------------------------------
 * 1. Simplicity: Hide complex queries (like those with 5+ JOINS) behind a simple name.
 * 2. Security: Allow users to see only specific columns of a table without giving
 *    access to the entire base table.
 * 3. Consistency: Define business logic once in a view so everyone uses the same logic.
 * 4. Logical Data Independence: Changes in the base table structure (e.g., renaming a column)
 *    can be masked by mapping the new column to the old name in the view.
 *
 * --------------------------------------------------------------------------
 * 3. TYPES OF VIEWS
 * --------------------------------------------------------------------------
 * - Simple View: Created from a single table; usually allows INSERT/UPDATE (if it follows rules).
 * - Complex View: Created from multiple tables (JOINS), includes aggregations, GROUP BY, etc.
 *
 * --------------------------------------------------------------------------
 * 4. EXAMPLE
 * --------------------------------------------------------------------------
 * -- Suppose we have a complex join for User Orders:
 * CREATE VIEW user_order_summary AS
 * SELECT
 *     u.username,
 *     o.order_date,
 *     p.product_name,
 *     o.quantity * p.price AS total_amount
 * FROM users u
 * JOIN orders o ON u.id = o.user_id
 * JOIN products p ON o.product_id = p.id;
 *
 * -- Now you can query it like a table:
 * SELECT * FROM user_order_summary WHERE total_amount > 100;
 *
 * --------------------------------------------------------------------------
 * 5. DIAGRAMMATIC REPRESENTATION
 * --------------------------------------------------------------------------
 * ```mermaid
 * graph BT
 *     T1[Table: Users] --> V[VIEW: user_order_summary]
 *     T2[Table: Orders] --> V
 *     T3[Table: Products] --> V
 *     V -.-> U[User / Application]
 *
 *     style V fill:#dfd,stroke:#333
 *     style T1 fill:#eee,stroke:#333
 *     style T2 fill:#eee,stroke:#333
 *     style T3 fill:#eee,stroke:#333
 * ```
 */
