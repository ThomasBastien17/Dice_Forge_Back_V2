-- Verify diceforge:init on pg

BEGIN;

SELECT * FROM "license";
SELECT * FROM "user";
SELECT * FROM "game";
SELECT * FROM "sheet";
SELECT * FROM "characteristic";
SELECT * FROM "spell";
SELECT * FROM "object";
SELECT * FROM "play";
SELECT * FROM "contain";
SELECT * FROM "possesses";
SELECT * FROM "characterize";

ROLLBACK;
