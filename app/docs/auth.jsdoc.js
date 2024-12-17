/**
 * @openapi
 * /login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     description: Authentifie un utilisateur existant à l'aide de son email et de son mot de passe.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: L'email enregistré de l'utilisateur.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Le mot de passe associé au compte.
 *     responses:
 *       200:
 *         description: Utilisateur connecté avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Jeton JWT pour les appels sécurisés.
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     email:
 *                       type: string
 *                     firstname:
 *                       type: string
 *                     lastname:
 *                       type: string
 *       400:
 *         description: Email ou mot de passe manquant ou invalide.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Message d'erreur.
 *             example:
 *               error: "Invalid email or password"
 *       401:
 *         description: Échec de l'authentification.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Authentication failed"
 */

 /**
 * @openapi
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     description: Enregistre un nouvel utilisateur avec validation des champs et vérification de l'unicité de l'email.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - lastname
 *               - firstname
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               lastname:
 *                 type: string
 *                 description: Le nom de famille de l'utilisateur (minimum 2 caractères).
 *                 minLength: 2
 *               firstname:
 *                 type: string
 *                 description: Le prénom de l'utilisateur (minimum 2 caractères).
 *                 minLength: 2
 *               email:
 *                 type: string
 *                 format: email
 *                 description: L'email de l'utilisateur (doit être unique).
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Le mot de passe de l'utilisateur (minimum 12 caractères, une majuscule, un chiffre, un caractère spécial).
 *                 minLength: 12
 *               confirmPassword:
 *                 type: string
 *                 description: Confirmation du mot de passe (doit correspondre au mot de passe).
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User created successfully"
 *       400:
 *         description: Données d'entrée invalides.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                 details:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         description: Nom du champ avec une erreur.
 *                       message:
 *                         type: string
 *                         description: Message d'erreur.
 *             example:
 *               error: "Validation failed"
 *               details:
 *                 - field: "email"
 *                   message: "Email is invalid"
 *                 - field: "password"
 *                   message: "Password must be at least 12 characters long"
 *       409:
 *         description: Email déjà utilisé.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *             example:
 *               error: "Email already exists"
 */
