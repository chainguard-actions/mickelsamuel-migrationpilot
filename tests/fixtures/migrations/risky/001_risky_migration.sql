-- Risky migration: adding NOT NULL column without default causes full table rewrite
ALTER TABLE users ADD COLUMN age INTEGER NOT NULL;

-- Risky: DROP TABLE is destructive
DROP TABLE IF EXISTS old_users;
