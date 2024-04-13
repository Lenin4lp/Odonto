import { z } from "zod";

export const registerPatientSchema = z.object({
  patient_name: z
    .string({
      required_error: "Los nombres del paciente son requeridos",
    })
    .min(3, {
      message: "Los nombres del paciente deben tener al menos 3 caracteres",
    })
    .max(50, {
      message: "Los nombres del paciente deben tener como máximo 50 caracteres",
    }),
  patient_lastName: z
    .string({
      required_error: "Los apellidos del paciente son requeridos",
    })
    .min(3, {
      message: "Los apellidos del paciente deben tener al menos 3 caracteres",
    })
    .max(50, {
      message:
        "Los apellidos del paciente deben tener como máximo 50 caracteres",
    }),

  patient_age: z
    .number({
      required_error: "La edad del paciente es requerida",
    })
    .max(100, {
      message: "La edad del paciente debe ser como máximo 100 años",
    }),

  patient_gender: z.enum(["M", "F", "O"], {
    required_error: "El genero del paciente es requerido",
  }),

  patient_email: z
    .string({
      required_error: "El email es requerido",
    })
    .email({
      message: "El email es invalido",
    }),
});

export const updatePatientSchema = z.object({
  patient_name: z
    .string()
    .min(3, {
      message: "Los nombres del paciente deben tener al menos 3 caracteres",
    })
    .max(50, {
      message: "Los nombres del paciente deben tener como máximo 50 caracteres",
    })
    .optional(),
  patient_lastName: z
    .string()
    .min(3, {
      message: "Los apellidos del paciente deben tener al menos 3 caracteres",
    })
    .max(50, {
      message:
        "Los apellidos del paciente deben tener como máximo 50 caracteres",
    })
    .optional(),

  patient_age: z
    .number()
    .max(100, {
      message: "La edad del paciente debe ser como máximo 100 años",
    })
    .optional(),

  patient_gender: z.enum(["M", "F", "O"]).optional(),

  patient_email: z
    .string()
    .email({
      message: "El email es invalido",
    })
    .optional(),
});
