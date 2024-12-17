/**
 * @openapi
 * /refresh-token:
 *   post:
 *     summary: Refresh the access token
 *     tags: [Authentication]
 *     description: This endpoint generates a new access token using a valid refresh token provided in the request body. This process helps maintain session continuity without requiring re-authentication.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: The refresh token issued during the authentication process.
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 *     responses:
 *       200:
 *         description: Access token refreshed successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: The newly issued access token to use for authenticated requests.
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
 *                 tokenType:
 *                   type: string
 *                   description: The type of token issued (e.g., Bearer).
 *                   example: "Bearer"
 *                 expiresIn:
 *                   type: integer
 *                   description: Time in seconds until the token expires.
 *                   example: 3600
 *       400:
 *         description: Bad request due to missing or malformed refresh token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message explaining the issue.
 *                   example: "The 'refreshToken' field is required."
 *       403:
 *         description: Invalid or expired refresh token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the token is invalid or has expired.
 *                   example: "Invalid refresh token."
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Generic error message for unexpected server errors.
 *                   example: "An unexpected error occurred."
 */