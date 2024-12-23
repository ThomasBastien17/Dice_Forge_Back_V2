-- Verify diceforge:reset-password on pg

BEGIN;

SELECT reset_password_token, reset_password_expires FROM "user";

ROLLBACK;
