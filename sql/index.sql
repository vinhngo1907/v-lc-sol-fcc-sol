-- DROP, CREATE, ALTER
CREATE TABLE users(
    id INT PRIMARY KEY,
    name varchar(255),
    email varchar(255),
    avatar varchar(100),
)

DROP TABLE users;
ALTER TABLE users ADD column nickname varchar(255);
ALTER TABLE users RENAME COLUMN display_name to nickname;
ALTER TABLE users drop column display_name;
ALTER TABLE users RENAME COLUMN to persons;
DROP TABLE users;

-- Grant, Revoke
Grant select, insert FROM henry on users;
Revoke insert on users FROM henry;
REVOKE all on users from henry;

-- ROLLBACK, SAVEPOINT, COMMIT

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

CREATE TABLE  accounts(
    id INT PRIMARY KEY,
    name VARCHAR(100),
    balance INT
)

UPDATE accounts SET balance = balance + 200 where name='Alice';
UPDATE accounts SET balance = balance - 200 where name='Bob';
SAVEPOINT transfer_done;
UPDATE accounts SET balance = balance + 1000 WHERE name = 'Charlie'; 
--  Errors: Can not find name is 'Charlie';
ROLLBACK TO SAVEPOINT transfer_done;
COMMIT;
-- If you don't use SAVEPOINT and ROLLBACK TO, you use:
ROLLBACK;
-- All of changes in transactions will be canceled;