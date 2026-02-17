/* 1. ADD
 * ADD is used to add a new column to a table.
 * Syntax: ALTER TABLE <table_name> ADD <column_name> <data_type>;
 * e.g. ALTER TABLE users ADD COLUMN age INT;
 *
 ** DEFAULT Keyword
 * Default keyword is used to set a default value for a column.
 * Syntax: ALTER TABLE <table_name> ADD <column_name> <data_type> DEFAULT <value>;
 * e.g. ALTER TABLE users ADD COLUMN age INT DEFAULT 18;
 */

/* 2. DROP
 * DROP is used to remove a column from a table.
 * Syntax: ALTER TABLE <table_name> DROP COLUMN <column_name>;
 * e.g. ALTER TABLE users DROP COLUMN age;
 */

/* 3. RENAME TABLE
 * RENAME is used to rename a table.
 * Syntax: ALTER TABLE <table_name> RENAME TO <new_table_name>;
 * e.g. ALTER TABLE users RENAME TO users_new;
 */

/* 4. RENAME COLUMN
 * RENAME is used to rename a column.
 * Syntax: ALTER TABLE <table_name> RENAME COLUMN <old_column_name> TO <new_column_name>;
 * e.g. ALTER TABLE users RENAME COLUMN age TO age_new;
 */

/* 5. MODIFY COLUMN
 ** a. Update column data type
 * Syntax: ALTER TABLE <table_name> ALTER COLUMN <column_name> TYPE <new_data_type>;
 * e.g. ALTER TABLE users ALTER COLUMN age TYPE INT;
 *
 ** b. Update data length (SET DATA TYPE)
 * Syntax: ALTER TABLE <table_name> ALTER COLUMN <column_name> SET DATA TYPE <new_data_type>;
 * e.g. ALTER TABLE users ALTER COLUMN age SET DATA TYPE VARCHAR(255);
 *
 ** c. Update default value (SET DEFAULT)
 * Syntax: ALTER TABLE <table_name> ALTER COLUMN <column_name> SET DEFAULT <value>;
 * e.g. ALTER TABLE users ALTER COLUMN age SET DEFAULT 18;
 *
 ** d. Remove default value (DROP DEFAULT)
 * Syntax: ALTER TABLE <table_name> ALTER COLUMN <column_name> DROP DEFAULT;
 * e.g. ALTER TABLE users ALTER COLUMN age DROP DEFAULT;
 *
 ** e. Set NOT NULL constraint (SET NOT NULL)
 * Syntax: ALTER TABLE <table_name> ALTER COLUMN <column_name> SET NOT NULL;
 * e.g. ALTER TABLE users ALTER COLUMN age SET NOT NULL;
 *
 ** f. Remove NOT NULL constraint (DROP NOT NULL)
 * Syntax: ALTER TABLE <table_name> ALTER COLUMN <column_name> DROP NOT NULL;
 * e.g. ALTER TABLE users ALTER COLUMN age DROP NOT NULL;
 */

/* 6. CHECK CONSTRAINT
 * CHECK is used to add a constraint to a table.
 * Syntax: ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> CHECK (<condition>);
 * e.g. ALTER TABLE users ADD CONSTRAINT age_constraint CHECK (age >= 18);
 */

/* 7. ADD CONSTRAINT
 * ADD CONSTRAINT is used to add a constraint to a table.
 * Syntax: ALTER TABLE <table_name> ADD CONSTRAINT <constraint_name> <constraint_type>;
 * e.g. ALTER TABLE users ADD CONSTRAINT age_constraint CHECK (age >= 18);
 */
