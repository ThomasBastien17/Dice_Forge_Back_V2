/**
 * @openapi
 * /profile:
 *   get:
 *     summary: Retrieve profile information
 *     description: Retrieve the profile information from the database for the currently authenticated user.
 *     tags: [Profile]
 *     responses:
 *       200:
 *         description: A successful response containing the user's profile information.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The unique identifier of the user.
 *                   example: 101
 *                 name:
 *                   type: string
 *                   description: The name of the user.
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   description: The email address of the user.
 *                   example: "john.doe@example.com"
 *                 created_at:
 *                   type: string
 *                   format: date-time
 *                   description: The date and time when the user's profile was created.
 *                   example: "2024-01-01T12:00:00Z"
 *                 updated_at:
 *                   type: string
 *                   format: date-time
 *                   description: The date and time when the user's profile was last updated.
 *                   example: "2024-12-12T08:00:00Z"
 */

/**
 * @openapi
 * /profile:
 *   patch:
 *     summary: Update profile information
 *     description: Update the profile information in the database for the authenticated user.
 *     tags: [Profile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 description: The unique identifier of the user.
 *               name:
 *                 type: string
 *                 description: The name of the user.
 *               email:
 *                 type: string
 *                 description: The email address of the user.
 *               created_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the profile was created.
 *               updated_at:
 *                 type: string
 *                 format: date-time
 *                 description: The date and time when the profile was last updated.
 *     responses:
 *       200:
 *         description: Profile information updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message confirming the profile update.
 *                   example: "Profile updated successfully."
 *       400:
 *         description: Bad request, invalid data or missing required fields.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message detailing the invalid fields.
 *                   example: "Invalid email format."
 *       404:
 *         description: User profile not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message stating the user profile doesn't exist.
 *                   example: "Profile not found."
 *       500:
 *         description: Internal server error when attempting to update profile.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating a server issue.
 *                   example: "An error occurred while updating the profile."
 */
