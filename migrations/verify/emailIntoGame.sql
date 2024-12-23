-- Verify diceforge:emailIntoGame on pg

BEGIN;

SELECT email FROM game;

ROLLBACK;
