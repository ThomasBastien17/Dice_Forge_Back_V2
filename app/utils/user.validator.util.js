import { z } from "zod";

export const userSchema = z.object({
  firstname: z
      .string()
      .min(2, "Le prénom doit contenir au moins 2 caractères")
      .max(50, "Le prénom doit contenir au maximum 50 caractères")
      .regex(
        /^[a-zA-ZÀ-ÖØ-öø-ÿ'\- ]+$/,
      "Le prénom ne doit contenir que des lettres, espaces, tirets ou apostrophes"
      )
      .trim(), // trim() permet de supprimer les espaces en début et fin de chaîne
  lastname: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom doit contenir au maximum 50 caractères")
    .regex(
      /^[a-zA-ZÀ-ÖØ-öø-ÿ'\- ]+$/,
      "Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes"
    )
    .trim(), // trim() permet de supprimer les espaces en début et fin de chaîne
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
      "Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule et un chiffre et un caractère spécial et un minimum de 12 caractères"
    ),
});

