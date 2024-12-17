/**
 * @openapi
 * /sheet:
 *   get:
 *     summary: Retrieve a sheet by name
 *     tags: [Sheet]
 *     description: This endpoint retrieves a sheet by its name. The name parameter is case-sensitive and required.
 *     parameters:
 *       - in: query
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The sheet name to retrieve.
 *     responses:
 *       200:
 *         description: Sheet retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the sheet.
 *                   example: "Sheet 1"
 *                 data:
 *                   type: array
 *                   description: Data contained in the sheet.
 *                   items:
 *                     type: object
 *                     properties:
 *                       field1:
 *                         type: string
 *                         description: A field in the sheet's data.
 *                         example: "Value 1"
 *                       field2:
 *                         type: integer
 *                         description: A numeric value related to the sheet's data.
 *                         example: 100
 *       400:
 *         description: Invalid request due to missing or malformed parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message detailing the issue.
 *                   example: "The 'name' parameter is required and must be a non-empty string."
 *       404:
 *         description: Sheet not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating that the sheet was not found.
 *                   example: "Sheet not found."
 */

/**
 * @openapi
 * /sheet:
 *   post:
 *     summary: Create a new sheet
 *     tags: [Sheet]
 *     description: This endpoint creates a new sheet. The name must be unique.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the new sheet.
 *                 example: "New Sheet"
 *               data:
 *                 type: array
 *                 description: Data to be included in the sheet.
 *                 items:
 *                   type: object
 *                   properties:
 *                     field1:
 *                       type: string
 *                       description: A field in the sheet's data.
 *                       example: "Value 1"
 *                     field2:
 *                       type: integer
 *                       description: A numeric value related to the sheet's data.
 *                       example: 50
 *     responses:
 *       201:
 *         description: Sheet created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the created sheet.
 *                   example: "New Sheet"
 *                 data:
 *                   type: array
 *                   description: Data contained in the sheet.
 *                   items:
 *                     type: object
 *                     properties:
 *                       field1:
 *                         type: string
 *                         description: A field in the sheet's data.
 *                         example: "Value 1"
 *                       field2:
 *                         type: integer
 *                         description: A numeric value related to the sheet's data.
 *                         example: 50
 *       400:
 *         description: Invalid request due to validation errors.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Details about the validation error.
 *                   example: "The 'name' field must be unique."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Description of the server error.
 *                   example: "An unexpected error occurred while creating the sheet."
 */

/**
 * @openapi
 * /sheet/{name}:
 *   patch:
 *     summary: Update a sheet by name
 *     tags: [Sheet]
 *     description: This endpoint updates a sheet by its name. Fields that are not provided will remain unchanged.
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: The name of the sheet to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image:
 *                 type: string
 *                 description: URL or identifier of the image associated with the sheet.
 *                 example: "http://example.com/image.jpg"
 *               class:
 *                 type: string
 *                 description: Classification or category of the sheet.
 *                 example: "Category A"
 *               level:
 *                 type: integer
 *                 description: Level or priority of the sheet.
 *                 example: 2
 *     responses:
 *       200:
 *         description: Sheet updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: The name of the updated sheet.
 *                   example: "Updated Sheet"
 *                 data:
 *                   type: array
 *                   description: Data contained in the sheet.
 *                   items:
 *                     type: object
 *                     properties:
 *                       field1:
 *                         type: string
 *                         description: A field in the sheet's data.
 *                         example: "Updated Value"
 *                       field2:
 *                         type: integer
 *                         description: A numeric value related to the sheet's data.
 *                         example: 200
 *       400:
 *         description: Invalid request due to validation errors.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Details about the validation issue.
 *                   example: "The 'level' field must be a positive integer."
 *       404:
 *         description: Sheet not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message stating that the sheet was not found.
 *                   example: "Sheet not found."
 */

/**
 * @openapi
 * /sheet/{id}:
 *   delete:
 *     summary: Delete a sheet
 *     tags: [Sheet]
 *     description: Deletes a sheet by its unique ID. This operation is idempotent.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique identifier of the sheet to delete.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: No Content, sheet deleted successfully.
 *       403:
 *         description: Forbidden, the user does not have permission to delete this sheet.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Authorization error message.
 *                   example: "You do not have permission to delete this sheet."
 *       404:
 *         description: Sheet not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating that the sheet was not found.
 *                   example: "Sheet not found."
 */

