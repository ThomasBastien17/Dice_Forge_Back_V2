-- Revert diceforge:seedLicenses from pg

BEGIN;

DELETE FROM "game" WHERE name = 'Le trésor perdu';
DELETE FROM "license" WHERE name = 'Donjons et Dragons';
DELETE FROM "license" WHERE name = 'Cthulhu';
DELETE FROM "license" WHERE name = 'Warhammer';
DELETE FROM "license" WHERE name = 'Libre';


COMMIT;
