-- Risky migration: drop a column (destructive, data loss)
ALTER TABLE users DROP COLUMN email;
