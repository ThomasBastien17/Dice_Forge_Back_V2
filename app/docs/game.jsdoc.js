/**
 * @openapi
 * /game/{id}:
 *   get:
 *     summary: Get game by ID
 *     tags: [Games]
 *     description: Retrieve detailed information about a specific game using its unique ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the game to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Game retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 music:
 *                   type: string
 *                 note:
 *                   type: string
 *                 event:
 *                   type: string
 *                 license_name:
 *                   type: string
 *       404:
 *         description: Game not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Game with ID {id} not found."
 *       500:
 *         description: Internal server error.
 */

 /**
 * @openapi
 * /game:
 *   post:
 *     summary: Create a new game
 *     tags: [Games]
 *     description: Add a new game to the system. Required fields include the name, license name, and email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - license_name
 *               - email
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the game.
 *               music:
 *                 type: string
 *                 description: Background music for the game.
 *               note:
 *                 type: string
 *                 description: Optional note or comment about the game.
 *               license_name:
 *                 type: string
 *                 description: Name of the license associated with the game.
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Contact email for the game.
 *     responses:
 *       201:
 *         description: Game created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *                   example: "Game created successfully."
 *       400:
 *         description: Missing required fields or license not found.
 *       401:
 *         description: User not logged in.
 *       500:
 *         description: Internal server error.
 */

/**
 * @openapi
 * /game/{id}:
 *   put:
 *     summary: Update a game
 *     tags: [Games]
 *     description: Modify an existing game by providing its ID and the updated information.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               music:
 *                 type: string
 *               note:
 *                 type: string
 *               event:
 *                 type: string
 *     responses:
 *       200:
 *         description: Game updated successfully.
 *       404:
 *         description: Game not found.
 *       400:
 *         description: Invalid input or missing fields.
 *       500:
 *         description: Internal server error.
 */


/**
 * @openapi
 * /game/{id}:
 *   delete:
 *     summary: Delete a game
 *     tags: [Games]
 *     description: Remove an existing game from the system using its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the game to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Game deleted successfully.
 *       404:
 *         description: Game not found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @openapi
 * /game/user/{id}:
 *   get:
 *     summary: Get games by user ID
 *     tags: [Games]
 *     description: Retrieve all games associated with a specific user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user whose games you want to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of games retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   music:
 *                     type: string
 *                   note:
 *                     type: string
 *                   event:
 *                     type: string
 *                   license_name:
 *                     type: string
 *                   created_at:
 *                     type: string
 *                   updated_at:
 *                     type: string
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
