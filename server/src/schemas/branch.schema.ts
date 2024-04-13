import { z } from "zod";

export const registerBranchSchema = z.object({
  branch_name: z
    .string({
      required_error: "El nombre de la sede es requerido",
    })
    .min(3, {
      message: "El nombre de la sede debe tener al menos 3 caracteres",
    })
    .max(50, {
      message: "El nombre de la sede debe tener como maximo 50 caracteres",
    }),
  branch_adress: z
    .string({
      required_error: "La dirección de la sede es requerida",
    })
    .min(4, {
      message: "La dirección de la sede debe tener al menos 3 caracteres",
    })
    .max(200, {
      message: "La dirección de la sede debe tener como maximo 200 caracteres",
    }),
});

export const updateBranchSchema = z.object({
  branch_name: z
    .string()
    .min(3, {
      message: "El nombre de la sede debe tener al menos 3 caracteres",
    })
    .max(50, {
      message: "El nombre de la sede debe tener como maximo 50 caracteres",
    })
    .optional(),
  branch_adress: z
    .string()
    .min(4, {
      message: "La dirección de la sede debe tener al menos 3 caracteres",
    })
    .max(200, {
      message: "La dirección de la sede debe tener como maximo 200 caracteres",
    })
    .optional(),
});
