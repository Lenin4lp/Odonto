import { z } from "zod";

export const ESSSchema = z.object({
  description: z
    .string()
    .max(255, "La descripción debe tener como máximo 255 caracteres")
    .optional(),
});
