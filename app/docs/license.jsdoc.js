/**
 * @openapi
 * /licenses:
 *   get:
 *     summary: Retrieve all licenses
 *     tags: [Licenses]
 *     description: Fetch a list of all available licenses, including their details such as name, description, and price.
 *     responses:
 *       200:
 *         description: Licenses successfully retrieved.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: Unique identifier for the license.
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: Name of the license.
 *                     example: "Premium License"
 *                   description:
 *                     type: string
 *                     description: Detailed description of the license.
 *                     example: "Access to all premium features with priority support."
 *                   price:
 *                     type: integer
 *                     description: Cost of the license in the selected currency (e.g., USD).
 *                     example: 49
 *               required:
 *                 - id
 *                 - name
 *                 - description
 *                 - price
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating what went wrong.
 *                   example: "Failed to retrieve licenses due to a database error."
 */
