-- Verify diceforge:invitation-token on pg

BEGIN;

SELECT invitation_token FROM "game";

ROLLBACK;
