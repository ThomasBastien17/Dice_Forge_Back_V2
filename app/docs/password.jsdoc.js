/**
 * @openapi
 * /forgot-password:
 *   post:
 *     summary: Request password reset
 *     tags: [Auth]
 *     description: This endpoint allows a user to request a password reset by submitting their email address. An email will be sent with a password reset link.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *                 description: The email address associated with the user account.
 *             required:
 *               - email
 *     responses:
 *       200:
 *         description: Password reset email sent successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Confirmation message.
 *                   example: "Password reset email sent."
 *       404:
 *         description: User not found with the provided email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating that no user was found.
 *                   example: "User not found."
 *       500:
 *         description: Error sending password reset email.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message related to the email sending failure.
 *                   example: "Failed to send email, please try again later."
 */

/**
 * @openapi
 * /resetPassword:
 *   post:
 *     summary: Reset user password
 *     tags: [Password]
 *     description: Allows a user to reset their password using a provided token, ID, and the new password details. The new password must be confirmed by entering the same value in the 'confirmPassword' field.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - id
 *               - password
 *               - confirmPassword
 *             properties:
 *               token:
 *                 type: string
 *                 description: Token generated for password reset, usually sent via email.
 *                 example: "abc123xyz456"
 *               id:
 *                 type: integer
 *                 description: The ID of the user requesting the password reset.
 *                 example: 101
 *               password:
 *                 type: string
 *                 description: The new password chosen by the user.
 *                 example: "NewPassword@123"
 *               confirmPassword:
 *                 type: string
 *                 description: Confirmation of the new password to ensure both entries match.
 *                 example: "NewPassword@123"
 *     responses:
 *       200:
 *         description: Password reset successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message confirming the password reset.
 *                   example: "Password has been reset successfully."
 *       400:
 *         description: Bad request, token, ID, or passwords mismatch.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for invalid inputs, such as missing parameters or mismatched passwords.
 *                   example: "Passwords do not match."
 *       401:
 *         description: Unauthorized, invalid or expired token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message for an invalid or expired reset token.
 *                   example: "Token is invalid or expired."
 *       500:
 *         description: Internal server error during password reset process.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: General error message indicating failure to complete the reset.
 *                   example: "Failed to reset password, please try again later."
 */
