import bcrypt from 'bcryptjs';
import pool from '../../config/pg.config.js';
import UserDataMapper from '../datamappers/user.datamapper.js';
import { userSchema } from '../utils/user.validator.util.js';

const userDataMapper = new UserDataMapper(pool);

export const createUser = async (req, res) => {
    const { lastname, firstname, email, password } = req.body;
  
    try {
      // Validation des données utilisateur
      userSchema.parse(req.body);
  
      // Vérification si l'utilisateur existe déjà
      const existingUser = await userDataMapper.findUserByEmail(email);
      if (existingUser) {
        return res.status(409).json({ error: "Cet email est déjà utilisé" });
      }
  
      // Hashage du mot de passe
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      // Création de l'utilisateur
      await userDataMapper.createUser(lastname, firstname, email, hashedPassword);
      return res.status(201).json({ message: "Utilisateur créé" });
    } catch (err) {
      if (err.errors) {
        return res.status(400).json({ error: "Données invalides", details: err.errors });
      }
      return res.status(500).json({ error: "Erreur serveur", details: err.message });
    }
  };
