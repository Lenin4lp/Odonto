import { z } from "zod";

export const registerClinicHistorySchema = z.object({
  reason: z
    .string({
      required_error: "El motivo de la consulta es requerido",
    })
    .min(3, {
      message: "El motivo de la consulta debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "El motivo de la consulta debe tener como máximo 255 caracteres",
    }),

  current_illness: z
    .string({
      required_error: "La sección de enfermedad es requerida",
    })
    .min(3, {
      message: "La sección de enfermedad debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "La sección de enfermedad debe tener como máximo 255 caracteres",
    }),
});

export const updateClinicHistorySchema = z.object({
  reason: z
    .string()
    .min(3, {
      message: "El motivo de la consulta debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "El motivo de la consulta debe tener como máximo 255 caracteres",
    })
    .optional(),

  current_illness: z
    .string()
    .min(3, {
      message: "La sección de enfermedad debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "La sección de enfermedad debe tener como máximo 255 caracteres",
    })
    .optional(),
});
