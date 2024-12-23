-- Verify diceforge:seedLicenses on pg

BEGIN;

SELECT * FROM "license" WHERE name = 'Donjons et Dragons';
SELECT * FROM "license" WHERE name = 'Cthulhu';
SELECT * FROM "license" WHERE name = 'Warhammer';
SELECT * FROM "license" WHERE name = 'Libre';
SELECT * FROM "game" WHERE name = 'Le trésor perdu';

ROLLBACK;
