import { z } from "zod";

export const userSchema = z.object({
  firstname: z
    .string()
    .min(2, "Le prénom doit contenir au moins 2 caractères")
    .max(50, "Le prénom doit contenir au maximum 50 caractères")
    .regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ'\- ]+$/, "Le prénom ne doit contenir que des lettres, espaces, tirets ou apostrophes")
    .trim(),
  lastname: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom doit contenir au maximum 50 caractères")
    .regex(/^[a-zA-ZÀ-ÖØ-öø-ÿ'\- ]+$/, "Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes")
    .trim(),
  email: z.string().email("L'adresse e-mail n'est pas valide"),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/,
      "Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre, un caractère spécial, et au moins 12 caractères"
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

