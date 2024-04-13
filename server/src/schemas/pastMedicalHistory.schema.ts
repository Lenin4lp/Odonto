import { z } from "zod";

export const pastMedicalHistorySchema = z.object({
  description: z
    .string()
    .max(255, "La descripción debe tener como más 255 caracteres")
    .optional(),
});
