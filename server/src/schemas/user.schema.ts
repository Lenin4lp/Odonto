import { z } from "zod";

export const updateSchema = z.object({
  user_name: z
    .string()
    .min(4, {
      message: "El nombre debe tener al menos 4 caracteres",
    })
    .max(50, {
      message: "El nombre debe tener como maximo 50 caracteres",
    })
    .optional(),

  user_email: z
    .string()
    .email({
      message: "El email es invalido",
    })
    .optional(),
  user_password: z
    .string()
    .min(5, {
      message: "La contraseña debe tener al menos 5 caracteres",
    })
    .max(50, {
      message: "La contraseña debe tener como maximo 50 caracteres",
    })
    .optional(),
});
